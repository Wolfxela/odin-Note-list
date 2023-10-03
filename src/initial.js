import { domProjectHandler } from "./domhandler"
import { taskHandler, programData } from "./index"
import { projectMaker, dataTaskMaker } from "./objects"
import { domTaskHandler } from "./domTaskHandler"
import { domNoteHandler } from "./domNoteHandler"

const addMainProjects = function()
{
    const todayProject = projectMaker("Today")
    const weeklyProject = projectMaker("Weekly")
    const monthlyProject = projectMaker("Monthly")
    domProjectHandler.addProject(todayProject)
    domProjectHandler.addProject(weeklyProject)
    domProjectHandler.addProject(monthlyProject)

    programData.setProject(todayProject)
     makeTask("do dishes","date","high")
     makeTask("do grab trash","date","medium")
     makeTask("do homework","date","high")
     makeTask("buy cat food","date","high")
     makeTask("clean your room","date","low")
     makeTask("go touch grass","date","low")
}
const initialiseApp = function()
{

    const btnProject = document.querySelector('.addProjectBtn')
    const btnTask = document.querySelector('.addTaskBtn')
    const btnNotes = document.querySelector('.notes')
    //how we should add the project and the tasks
    btnProject.addEventListener("click",function()
    {
       
        makeProject()

    });
    btnTask.addEventListener("click",function()
    {

        if(programData.getTaskStatus() === true)
        {
            makeTask("name","date","high")
        }
        else
        {
            const task = dataTaskMaker('','hello i am a fox note ','','')
            taskHandler.setTask(task,programData.getCurrentProject().getTasks())
            domNoteHandler.displayNotes(programData.getCurrentProject())
        }
        

    });
    btnNotes.addEventListener("click",function()
    {
        programData.setTaskStatus(false)
        programData.setProject(programData.getNoteProject())
        domNoteHandler.displayNotes()
    })
    
    
}
const makeTask = function(inputname,inputDate,inputPriority)
{
        const task = dataTaskMaker(inputname,'description',inputDate,inputPriority)
        taskHandler.setTask(task,programData.getCurrentProject().getTasks())
        domTaskHandler.displayTasks(programData.getCurrentProject())
}
const makeProject = function(projectName)
{
    const project = projectMaker("Jimmy")
    domProjectHandler.addProject(project)
}
addMainProjects()
initialiseApp()