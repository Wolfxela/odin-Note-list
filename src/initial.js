import { domProjectHandler } from "./domhandler"
import { projectMaker } from "./objects"
import { domNoteHandler} from "./domNoteHandler"
import { makeTask } from "./domTaskHandler"
import { programData,taskHandler } from "./index"
import { dataTaskMaker } from "./objects"
import format from "date-fns/format"

const addMainProjects = function()
{
    const todayProject = projectMaker("Today")
    const weeklyProject = projectMaker("Weekly")
    const monthlyProject = projectMaker("Monthly")
    domProjectHandler.addProject(todayProject)
    domProjectHandler.addProject(weeklyProject)
    domProjectHandler.addProject(monthlyProject)

    programData.setProject(todayProject)
     makeTask("do dishes","","01 Nov 2009","high")
     makeTask("do grab trash","","20 Nov 2008","medium")
     makeTask("do homework","","03 Nov 2000","high")
     makeTask("buy cat food","","10 Nov 2003","high")
     makeTask("clean your room","","30 Nov 2005","low")
     makeTask("go touch grass","","50;) Nov 2004","low")
}
const initialiseApp = function()
{

    const btnProject = document.querySelector('.addProjectBtn')
    const btnTask = document.querySelector('.addTaskBtn')
    const btnNotes = document.querySelector('.notes')
    const taskForm = document.querySelector('.taskForm')
    const noteForm = document.querySelector('.noteForm')
    const projectForm = document.querySelector('.projectForm')
    //how we should add the project and the tasks
    btnProject.addEventListener("click",function()
    {
       
        projectForm.style.visibility = "visible";

    });
    btnTask.addEventListener("click",function()
    {

        if(programData.getTaskStatus() === true)
        {
            taskForm.style.visibility = "visible";
        }
        else
        {
            noteForm.style.visibility = "visible";
        }
        

    });
    btnNotes.addEventListener("click",function()
    {
        programData.setTaskStatus(false)
        programData.setProject(programData.getNoteProject())
        domNoteHandler.displayNotes()
    })
    
    
}
const makeProject = function(projectName)
{
    const project = projectMaker(projectName)
    domProjectHandler.addProject(project)
}
const domFormHandler = (function()
{
    const taskForm = document.querySelector('.taskForm')
    const taskTitleInput = taskForm.querySelector('.getTitle')
    const taskDescriptionInput = taskForm.querySelector('.getDescription')
    const taskDateInput = taskForm.querySelector('.getDate')
    const taskPriorityInput = taskForm.querySelector('.getPriority')
    const taskSubmitBtn = taskForm.querySelector(".taskSubmit")
    const projectForm = document.querySelector('.projectForm')
    const projectInputTitle = projectForm.querySelector('.getProjectTitle')
    const projectSubmitBtn = projectForm.querySelector('.submitNotes')

    const noteForm = document.querySelector('.noteForm')
    const noteDescriptionInput = noteForm.querySelector('.getNoteDescription')
    const noteSubmitBtn = noteForm.querySelector('.submitNotes')
    const setFormBtns = function()
    {
        
        taskSubmitBtn.addEventListener("click",function()
        {
            if(taskTitleInput.value != "" && taskDateInput.value != "")
            {
            makeTask(taskTitleInput.value,taskDescriptionInput.value,format(new Date(taskDateInput.value), 'dd MMM yyyy'),taskPriorityInput.value)
            taskForm.style.visibility = "hidden"
            }
            
        })
        noteSubmitBtn.addEventListener("click",function()
        {
            const task = dataTaskMaker('',noteDescriptionInput.value,'','')
            taskHandler.setTask(task,programData.getCurrentProject().getTasks())
            domNoteHandler.displayNotes(programData.getCurrentProject())
            noteForm.style.visibility = "hidden"
        })
        projectSubmitBtn.addEventListener("click",function()
        {
            if(projectInputTitle.value != "")
            {
                makeProject(projectInputTitle.value)
                projectForm.style.visibility = "hidden"
            }
            
        })
    }
    return{setFormBtns}
})();
addMainProjects()
initialiseApp()
domFormHandler.setFormBtns()