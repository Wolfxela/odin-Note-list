import { projectMaker } from "./objects";
const taskHandler = (function()
{
    const setTask = (task,taskArray)=>{taskArray.push(task)}
    const deleteTask = (taskSpot,taskArray)=>{taskArray.splice(taskSpot,1)}
    return{setTask,deleteTask}
})();


const programData = (function()
{
    let currentProject;
    let areTasksDisplaying = true;
    let notesProject = projectMaker("Notes");
    const setProject = function(project){currentProject = project}
    const getCurrentProject = function(){return currentProject}
    const getTaskStatus = function(){return areTasksDisplaying}
    const setTaskStatus = function(input){areTasksDisplaying = input}
    const getNoteProject = function(){return notesProject}

    return{setProject,getCurrentProject,getTaskStatus,setTaskStatus,getNoteProject}
})();


export{programData, taskHandler}