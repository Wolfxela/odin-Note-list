import { dataTaskMaker,projectMaker } from "./objects";
import { domProjectHandler,domTaskHandler } from "./domhandler";

const taskHandler = (function()
{
    const setTask = (task,taskArray)=>{taskArray.push(task)}
    const deleteTask = (taskSpot,taskArray)=>{taskArray.splice(taskSpot,1)}
    return{setTask,deleteTask}
})();


const programData = (function()
{
    let currentProject;
    const setProject = function(project){currentProject = project}
    const getCurrentProject = function(){return currentProject}

    return{setProject,getCurrentProject}
})();
const initialiseApp = function()
{
    const btnProject = document.querySelector('.addProjectBtn')
    const btnTask = document.querySelector('.addTaskBtn')
    //how we should add the project and the tasks
    btnProject.addEventListener("click",function()
    {
        const project = projectMaker("Jimmy")
        domProjectHandler.addProject(project)

    });
    btnTask.addEventListener("click",function()
    {

        const task = dataTaskMaker("name","description","Date","High")
        taskHandler.setTask(task,programData.getCurrentProject().getTasks())
        domTaskHandler.displayTasks(programData.getCurrentProject())

    });
}
initialiseApp()