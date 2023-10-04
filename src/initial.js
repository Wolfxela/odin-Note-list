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
    programData.setProject(weeklyProject)
     makeTask("do dishes","","01 Nov 2009","high")
    programData.setProject(monthlyProject)
    makeTask("go touch grass","","50;) Nov 2004","low")
    programData.setProject(todayProject)
     
    
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

const storageInit = function()
{    
    if (!localStorage.getItem("Projects"))
    {
        addMainProjects()
    }
    else
    {
        console.log("hello")
        let Projects = JSON.parse(localStorage.getItem("Projects"))
        for(let i = 0;i < Projects.length ;i++)
        {
            let project = projectMaker(Projects[i].projectName)
            let tasks = Projects[i].tasks
            for(let i = 0;i < tasks.length;i++)
            {
                let task = dataTaskMaker(tasks[i].taskName,tasks[i].taskDescription,tasks[i].taskDate,tasks[i].taskPriority)
                taskHandler.setTask(task,project.getTasks())
            }
            domProjectHandler.addProject(project)
            

        }
        
    }
}

function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }
  if (storageAvailable("localStorage"))
  {
    storageInit()
  }
  else
  {

  }
  function returnProjects() {

    var values = [],
    keys = Object.keys(localStorage);

    for(let i = 0;i<keys.length;i++)
    {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values[0];
}
initialiseApp()
domFormHandler.setFormBtns()


