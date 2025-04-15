import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import brain from "brain"; // Import brain client
import mermaid from 'mermaid'; // Import mermaid library
import { TasksResponse, IndexEntry, TaskTemplates } from "types"; // Import relevant types
import {
  Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Import Select components
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ChevronRight, AlertTriangle, CheckCircle, Clock, Info } from "lucide-react";

// Helper function to render mermaid diagrams
const MermaidDiagram = ({ content, title, description }: { content: string; title: string; description?: string }) => {
  const diagramRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const mermaidInitialized = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!mermaidInitialized.current) {
        try {
          mermaid.initialize({ 
            startOnLoad: false, 
            theme: document.documentElement.classList.contains('dark') ? 'dark' : 'default',
          });
          mermaidInitialized.current = true;
        } catch (initError) {
          console.error("Mermaid initialization error:", initError);
          setError(`Failed to initialize diagram rendering: ${initError.message || String(initError)}`);
          return; // Stop if initialization fails
        }
      }

      if (diagramRef.current && content) {
        try {
          diagramRef.current.innerHTML = content; // Set content first
          diagramRef.current.removeAttribute('data-processed');

          // Use Promise.resolve().then() to defer execution slightly
          Promise.resolve().then(() => {
             mermaid.run({ 
               nodes: [diagramRef.current!] // Run on the specific node
             }).catch(runError => {
                console.error("Mermaid run error:", runError);
                setError(`Failed to render diagram: ${runError.message || String(runError)}`);
                if(diagramRef.current) {
                  diagramRef.current.innerHTML = `<pre class="text-red-500">Error rendering diagram.\n${content}</pre>`;
                }
             });
          });

          setError(null); // Clear previous error if setup is okay
        } catch (e) {
          console.error("Mermaid setup error:", e);
          setError(`Failed to prepare diagram: ${e.message || String(e)}`);
          if(diagramRef.current) {
            diagramRef.current.innerHTML = `<pre class="text-red-500">Error preparing diagram.\n${content}</pre>`;
          }
        }
      } else if (diagramRef.current) {
        diagramRef.current.innerHTML = '';
        diagramRef.current.removeAttribute('data-processed');
        setError(null);
      }
    }
  }, [content]);

  return (
    <div className="my-4">
      {title && <h4 className="text-sm font-medium mb-1">{title}</h4>}
      {description && <p className="text-sm text-muted-foreground mb-2">{description}</p>}
      <div className="overflow-hidden w-full rounded-md">
        <div 
          ref={diagramRef} 
          className="mermaid-diagram-container p-4 bg-card overflow-x-auto overflow-y-hidden text-xs w-full max-w-full" 
          key={content} // Use content as key to force re-render on content change
          style={{ maxWidth: '100%', overflowX: 'auto', overflowY: 'hidden' }}
        >
          {error ? 
            <div className="text-red-500 p-2">{error}</div> 
            : 
            <div className="mermaid w-full">{/* Mermaid will render here */}</div>
          }
        </div>
      </div>
    </div>
  );
};

// Helper to get status badge
const StatusBadge = ({ status }: { status: string }) => {
  const statusConfig: Record<string, { color: string; icon: React.ReactNode }> = {
    "completed": { color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200", icon: <CheckCircle className="h-3 w-3 mr-1" /> },
    "issues-found": { color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200", icon: <AlertTriangle className="h-3 w-3 mr-1" /> },
    "needs-attention": { color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200", icon: <AlertTriangle className="h-3 w-3 mr-1" /> },
    "in-progress": { color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200", icon: <Clock className="h-3 w-3 mr-1" /> },
    "seek-clarification": { color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200", icon: <Info className="h-3 w-3 mr-1" /> },
    "unknown": { color: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200", icon: <Info className="h-3 w-3 mr-1" /> }
  };

  const safeStatus = typeof status === 'string' ? status.toLowerCase() : 'unknown';
  const config = statusConfig[safeStatus] || statusConfig["unknown"];

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
      {config.icon}
      {status || 'Unknown'}
    </span>
  );
};

// Helper to render markdown content safely
const renderMarkdown = (content: string) => {
  if (!content) return null;
  
  // First, convert all markdown content to HTML by creating a temporary element
  const parseMarkdown = (markdown: string) => {
    // Step 1: Process multi-line code blocks with triple backticks
    let processedContent = markdown.replace(/```([\s\S]*?)```/g, (match, codeBlock) => {
      // Escape angle brackets in the code block
      const escapedCode = codeBlock.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return '```' + escapedCode + '```';
    });
    
    // Step 2: Process inline code with single backticks
    processedContent = processedContent.replace(/`([^`]*)`/g, (match, code) => {
      return '`' + code.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '`';
    });
    
    return processedContent;
  };
  
  const processedContent = parseMarkdown(content);
  
  return (
    <div className="w-full overflow-hidden">
      <div className="prose prose-sm dark:prose-invert max-w-none break-words whitespace-normal 
        [&_pre]:whitespace-pre-wrap [&_pre]:break-all [&_pre]:bg-muted/50 [&_pre]:p-3 [&_pre]:rounded [&_pre]:text-xs 
        [&_code]:whitespace-pre-wrap [&_code]:break-all [&_code]:font-mono [&_code]:text-xs [&_code:not(pre code)]:bg-muted/30 [&_code:not(pre code)]:px-1.5 [&_code:not(pre code)]:py-0.5 [&_code:not(pre code)]:rounded 
        [&_p]:break-words [&_p]:whitespace-normal [&_p]:leading-relaxed [&_p]:my-2 
        [&_ul]:my-2 [&_ol]:my-2 [&_li]:break-words [&_li]:whitespace-normal [&_li]:my-1 
        [&_h1]:text-lg [&_h1]:font-bold [&_h1]:my-3 
        [&_h2]:text-base [&_h2]:font-bold [&_h2]:my-2.5 
        [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:my-2 
        [&_h4]:text-sm [&_h4]:font-medium [&_h4]:my-2 
        [&_h5]:text-xs [&_h5]:font-medium [&_h5]:my-1.5 
        [&_h6]:text-xs [&_h6]:font-medium [&_h6]:my-1.5 
        [&_blockquote]:border-l-4 [&_blockquote]:border-muted [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-3 [&_blockquote]:py-0.5
        [&_table]:w-full [&_table]:border-collapse [&_table]:my-2 [&_table]:text-xs 
        [&_th]:border [&_th]:border-muted [&_th]:px-2 [&_th]:py-1 [&_th]:bg-muted/30 
        [&_td]:border [&_td]:border-muted [&_td]:px-2 [&_td]:py-1 
        [&_*]:max-w-full">
        <ReactMarkdown remarkPlugins={[remarkGfm]} skipHtml={true}>
          {processedContent}
        </ReactMarkdown>
      </div>
    </div>
  );
};

// Main component
const VibeDebugPage: React.FC = () => {
  const [allTasks, setAllTasks] = useState<IndexEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTask, setSelectedTask] = useState<IndexEntry | null>(null);
  const [taskTypes, setTaskTypes] = useState<string[]>([]);
  const [tasksByType, setTasksByType] = useState<Record<string, IndexEntry[]>>({});
  const [activeTab, setActiveTab] = useState<string>("tasks"); // Default to 'tasks' tab
  
  // State for task templates
  const [taskTemplates, setTaskTemplates] = useState<TaskTemplates>({});
  const [selectedTemplateKey, setSelectedTemplateKey] = useState<string | null>(null);
  const [isLoadingTemplates, setIsLoadingTemplates] = useState<boolean>(true);

  // Define core task types that have dedicated UI sections
  const CORE_TASK_TYPES = ["tasks"]; // Only tasks tab remains as core type
  
  // Fetch all tasks
  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await brain.get_all_tasks();
      const data: TasksResponse = await response.json();
      // Ensure tasks is an array, default to empty if not
      const tasksArray = Array.isArray(data.tasks) ? data.tasks : []; 
      
      // Sort tasks by creation date, newest first
      const sortedTasks = tasksArray.sort((a, b) => 
        new Date(b.taskMetadata.createdAt).getTime() - new Date(a.taskMetadata.createdAt).getTime()
      );

      setAllTasks(sortedTasks);

      // Process tasks by type
      const customTypes = new Set<string>();
      const groupedTasks: Record<string, IndexEntry[]> = {};

      sortedTasks.forEach((task) => {
        const type = task.taskMetadata.taskType || 'uncategorized';
        
        // Group all tasks by their type
        if (!groupedTasks[type]) {
          groupedTasks[type] = [];
        }
        groupedTasks[type].push(task);
        
        // Only collect custom types (not core ones) for the navigation
        if (!CORE_TASK_TYPES.includes(type)) {
          customTypes.add(type);
        }
      });

      // Sort custom types alphabetically
      const sortedCustomTypes = Array.from(customTypes).sort();
      setTaskTypes(sortedCustomTypes);
      setTasksByType(groupedTasks);


    } catch (err) {
      console.error("Failed to fetch tasks:", err);
      setError("Failed to load task results. Please try refreshing.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch task templates
  const fetchTemplates = async () => {
    setIsLoadingTemplates(true);
    try {
      const response = await brain.get_task_templates();
      const templatesData: TaskTemplates = await response.json(); 
      setTaskTemplates(templatesData || {}); // Handle potential null/undefined response
      
      // Auto-select first template if available
      if (templatesData?.templates && 
          Object.keys(templatesData.templates).length > 0 && 
          !selectedTemplateKey) {
        setSelectedTemplateKey(Object.keys(templatesData.templates)[0]);
      }
    } catch (err) {
      console.error("Failed to fetch task templates:", err);
      // Optionally set an error state for templates
    } finally {
      setIsLoadingTemplates(false);
    }
  };

    // Fetch data on component mount
  useEffect(() => {
    fetchTasks();
    fetchTemplates();
  }, []);

  // Effect to handle tab changes: Auto-select first task or clear selection
  useEffect(() => {
    if (activeTab === "tasks") {
      setSelectedTask(null); // Clear selection for templates tab
      setSelectedTemplateKey(null); // Also clear template selection
    } else if (taskTypes.includes(activeTab) && tasksByType[activeTab]?.length > 0) {
      // Auto-select the first (most recent) task for the selected type
      setSelectedTask(tasksByType[activeTab][0]); 
    } else {
      // If the tab is a task type but has no tasks, clear selection
      setSelectedTask(null); 
    }
    // We don't want this effect to re-run when tasksByType changes, only when the tab changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, taskTypes]); // Rerun only when activeTab or taskTypes change

  if (loading && allTasks.length === 0) { // Show loading only on initial load
    return <div className="container mx-auto p-8 text-center">Loading VibeDebug results...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto p-8">
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      {/* Header Section */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-semibold">VibeDebug</h1>
          <Button variant="outline" size="sm" onClick={fetchTasks} disabled={loading}>
            {loading ? 'Refreshing...' : 'Refresh'}
          </Button>
        </div>
        <p className="text-muted-foreground mt-2 mb-8 text-sm md:text-base">VibeDebug is a structured debugging and analysis framework for Databutton applications that helps you systematically identify, define, explore, fix, and learn from issues in your applications. Based on the proven IDEAL methodology, VibeDebug transforms chaotic troubleshooting into a methodical process that saves time and builds knowledge.</p>
      </div>

      {/* Main Content - Using simple flexbox layout instead of Tabs component */}
      <div className="flex flex-col md:flex-row md:space-x-6">
        {/* Side Navigation - Simple custom tabs with controlled entries to prevent duplicates */}
        <div className="w-full md:w-64 shrink-0 mb-6 md:mb-0 mt-1">
          <div className="flex flex-col space-y-1 border rounded-md overflow-hidden">
            {/* Core fixed tabs section */}
            <div className="border-b">
              <button 
                onClick={() => setActiveTab("tasks")} 
                className={`text-left w-full px-3 py-2 ${activeTab === "tasks" ? "bg-muted font-medium" : "hover:bg-muted/50"}`}
              >
                Task Templates
              </button>
            </div>
            
            {/* Core Analysis section removed as requested */}
            
            {/* Show custom tasks section only for non-core task types */}
            {taskTypes.length > 0 && taskTypes.some(type => tasksByType[type]?.length > 0) && (
              <div>
                <div className="px-3 py-1 text-xs text-muted-foreground uppercase font-medium">Custom Tasks</div>
                {taskTypes
                  .filter(type => tasksByType[type]?.length > 0)
                  .map((taskType) => (
                    <button
                      key={taskType}
                      onClick={() => setActiveTab(taskType)}
                      className={`text-left w-full px-3 py-2 capitalize ${activeTab === taskType ? "bg-muted font-medium" : "hover:bg-muted/50"}`}
                    >
                      {taskType.replace(/-/g, ' ')}
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>

        {/* Content Area - Main content panel */}
        <div className="flex-1 border rounded-md p-6 bg-card">
          {/* Tasks & Templates Tab Content */}
          {activeTab === "tasks" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Task Templates</h2>
  <p className="text-muted-foreground mb-4">Select and copy templates for various debugging and analysis tasks.</p>
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <CardTitle>Available Templates</CardTitle>
                      <CardDescription>Select a template to view its content and copy it for use.</CardDescription>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={async () => {
                        try {
                          const response = await brain.refresh_templates();
                          const result = await response.json();
                          if (result.content) {
                            // If refresh was successful, refetch templates
                            fetchTemplates();
                            // TODO: Add toast notification
                            // toast.success(`Templates refreshed successfully. Found ${result.file_count} templates.`);
                          } else if (result.error) {
                            console.error("Error refreshing templates:", result.error);
                            // TODO: Add toast notification
                            // toast.error(`Failed to refresh templates: ${result.error}`);
                          }
                        } catch (err) {
                          console.error("Error calling refresh templates API:", err);
                          // TODO: Add toast notification
                          // toast.error("Failed to refresh templates. See console for details.");
                        }
                      }}
                    >
                      Refresh Templates
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isLoadingTemplates ? (
                    <p className="text-muted-foreground">Loading templates...</p>
                  ) : Object.keys(taskTemplates).length === 0 ? (
                    <p className="text-muted-foreground">No task templates found.</p>
                  ) : (
                    <Select onValueChange={setSelectedTemplateKey} value={selectedTemplateKey || undefined}>
                      <SelectTrigger className="w-full md:w-[300px]">
                        <SelectValue placeholder="Select a task template" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(taskTemplates).map(([key, content]) => (
                          <SelectItem key={key} value={key}>
                            {key.replace(/\.md$/, '')} {/* Display filename without .md extension */}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                  {selectedTemplateKey && taskTemplates[selectedTemplateKey] && (
                    <div className="mt-4 space-y-3">
                       <div className="flex justify-between items-center">
                         <p className="text-sm text-muted-foreground">Previewing template: <strong>{selectedTemplateKey.replace(/\.md$/, '')}</strong></p>
                         <Button 
                           variant="outline" 
                           size="sm"
                           onClick={() => {
                             navigator.clipboard.writeText(taskTemplates[selectedTemplateKey] || '');
                             // TODO: Add toast notification here for feedback
                             // import { toast } from "sonner";
                             // toast.success("Template copied to clipboard!");
                           }}
                         >
                           Copy Template
                         </Button>
                       </div>
                       <div className="border rounded-md p-4 bg-background text-sm w-full overflow-hidden">
                         {renderMarkdown(taskTemplates[selectedTemplateKey])}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Task Templates only - removed All Tasks section */}
            </div>
          )}

          {/* Core analysis tab content removed as requested */}

          {/* Dynamic Task Type Tabs Content */}
          {taskTypes.filter(type => type !== 'tasks' && activeTab === type).map((taskType) => (
            <div key={taskType}>
              <h2 className="text-xl font-semibold mb-4 capitalize">{taskType.replace(/-/g, ' ')}</h2>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                {tasksByType[taskType]?.length > 0 ? (
                  tasksByType[taskType].map((task, index) => (
                    <Card 
                      key={task.taskMetadata.runId || index}
                      className={`cursor-pointer transition-all hover:shadow-lg ${selectedTask?.taskMetadata.runId === task.taskMetadata.runId ? 'ring-2 ring-primary ring-offset-2 dark:ring-offset-background' : ''}`}
                      onClick={() => setSelectedTask(task)}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start gap-2">
                          <CardTitle className="text-base font-medium leading-tight">{task.taskMetadata.taskName}</CardTitle>
                          <StatusBadge status={task.summary?.status} />
                        </div>
                        <CardDescription className="text-xs pt-1">
                          {new Date(task.taskMetadata.createdAt).toLocaleString()}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-3 text-sm">
                        {task.summary?.keyFindings && task.summary.keyFindings.length > 0 && (
                          <div className="mt-1">
                            <h4 className="text-xs font-semibold mb-1 uppercase text-muted-foreground">Key Findings:</h4>
                            <ul className="text-xs text-muted-foreground list-disc pl-4 space-y-0.5">
                              {task.summary.keyFindings.slice(0, 2).map((finding, i) => (
                                <li key={i} className="truncate" title={finding}>{finding}</li>
                              ))}
                              {task.summary.keyFindings.length > 2 && (
                                <li className="text-primary/80">
                                  {task.summary.keyFindings.length - 2} more...
                                </li>
                              )}
                            </ul>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-full">
                    <Alert className="bg-muted/50">
                      <Info className="h-4 w-4" />
                      <AlertTitle>No Tasks</AlertTitle>
                      <AlertDescription>
                        No '{taskType.replace(/-/g, ' ')}' tasks found.
                      </AlertDescription>
                    </Alert>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Task Preview Section - Shown when a task is selected */}
          {selectedTask && (
            <div className="mt-8 pt-6 border-t">
              <Card className="shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold">{selectedTask.taskMetadata.taskName}</CardTitle>
                      <CardDescription className="text-xs mt-1">
                        Type: {selectedTask.taskMetadata.taskType.replace(/-/g, ' ')} | Created: {new Date(selectedTask.taskMetadata.createdAt).toLocaleString()}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                       <StatusBadge status={selectedTask.summary?.status} />
                       <span className="text-xs text-muted-foreground">Run ID: {selectedTask?.taskMetadata?.runId?.substring(0, 8)}...</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Summary Section */}
                    {(selectedTask.summary?.metrics || selectedTask.summary?.keyFindings) && (
                       <div>
                         <h3 className="text-base font-semibold mb-2">Summary</h3>
                         <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                           {selectedTask.summary?.metrics && Object.keys(selectedTask.summary.metrics).length > 0 && (
                             <Card className="bg-muted/30">
                               <CardHeader className="pb-2 pt-3">
                                 <CardTitle className="text-sm font-medium">Metrics</CardTitle>
                               </CardHeader>
                               <CardContent className="pb-3">
                                 <dl className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                                   {Object.entries(selectedTask.summary.metrics).map(([key, value]) => (
                                     <React.Fragment key={key}>
                                       <dt className="text-xs text-muted-foreground truncate" title={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}>
                                         {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                                       </dt>
                                       <dd className="text-xs font-medium">{String(value)}</dd>
                                     </React.Fragment>
                                   ))}
                                 </dl>
                               </CardContent>
                             </Card>
                           )}
                           {selectedTask.summary?.keyFindings && selectedTask.summary.keyFindings.length > 0 && (
                              <Card className="bg-muted/30">
                                <CardHeader className="pb-2 pt-3">
                                  <CardTitle className="text-sm font-medium">Key Findings</CardTitle>
                                </CardHeader>
                                <CardContent className="pb-3">
                                  <ul className="list-disc pl-4 space-y-1">
                                    {selectedTask.summary.keyFindings.map((finding, i) => (
                                      <li key={i} className="text-xs">{finding}</li>
                                    ))}
                                  </ul>
                                </CardContent>
                              </Card>
                           )}
                         </div>
                       </div>
                    )}

                    {/* Visualizations Section */}
                    {selectedTask.visualizations && selectedTask.visualizations.length > 0 && (
                      <div>
                        <h3 className="text-base font-semibold mb-2">Visualizations</h3>
                        <Card className="bg-muted/30">
                          <CardContent className="p-4 space-y-4">
                            {selectedTask.visualizations.map((viz, i) => (
                              <MermaidDiagram 
                                key={i}
                                content={viz.content}
                                title={viz.title}
                                description={viz.description}
                              />
                            ))}
                          </CardContent>
                        </Card>
                      </div>
                    )}

                    {/* Content Sections */}
                    {selectedTask.sections && selectedTask.sections.length > 0 && (
                      <div>
                        <h3 className="text-base font-semibold mb-2">Details</h3>
                        <Accordion type="multiple" className="w-full border rounded-md px-3 bg-muted/30">
                          {selectedTask.sections
                            .sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999)) // Use nullish coalescing
                            .map((section, i) => (
                              <AccordionItem key={i} value={`section-${i}`} className="border-b last:border-b-0">
                                <AccordionTrigger className="text-sm font-medium py-3 hover:no-underline">
                                  {section.title}
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 text-sm">
                                  {renderMarkdown(section.content)}
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                        </Accordion>
                      </div>
                    )}

                    {/* Actions Section */}
                    {selectedTask.actions && selectedTask.actions.length > 0 && (
                      <div>
                        <h3 className="text-base font-semibold mb-2">Recommended Actions</h3>
                        <div className="space-y-3">
                          {selectedTask.actions.map((action, i) => (
                            <Card key={i} className="bg-muted/30">
                              <CardContent className="p-4">
                                <div className="flex items-start gap-4">
                                  <div className="flex-1">
                                    <h4 className="font-medium text-sm">{action.title}</h4>
                                    <p className="text-xs text-muted-foreground mt-1">{action.description}</p>
                                  </div>
                                  <div className="flex gap-2 flex-wrap justify-end">
                                    {action.priority && (
                                      <Badge variant={
                                        action.priority === "high" ? "destructive" : 
                                        action.priority === "medium" ? "default" : "secondary"
                                      } className="text-xs px-1.5 py-0.5">
                                        Priority: {action.priority}
                                      </Badge>
                                    )}
                                    {action.impact && (
                                      <Badge variant="outline" className="text-xs px-1.5 py-0.5">
                                        Impact: {action.impact}
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* References Section */}
                    {selectedTask.references && selectedTask.references.length > 0 && (
                      <div>
                        <h3 className="text-base font-semibold mb-2">References</h3>
                        <Card className="bg-muted/30">
                          <CardContent className="p-4">
                            <ul className="divide-y divide-border">
                              {selectedTask.references.map((ref, i) => (
                                <li key={i} className="py-2 first:pt-0 last:pb-0">
                                  <div className="flex items-start gap-2">
                                    <Badge variant="secondary" className="text-xs px-1.5 py-0.5 whitespace-nowrap mt-0.5">
                                      {ref.type}
                                    </Badge>
                                    <div className="flex-1">
                                      <p className="font-medium text-sm break-words">{ref.path}</p>
                                      <p className="text-xs text-muted-foreground mt-0.5">{ref.description}</p>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VibeDebugPage;
