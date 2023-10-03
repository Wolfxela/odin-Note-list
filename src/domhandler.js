import { generalFuncModule as module } from "./generalFunctions";
import { programData, taskHandler } from "./index";

const domProjectHandler = (function(){

    
    let Projects = [];
    const page = document.querySelector('.content')
    const projectHolder = page.querySelector(".projectHolder")
    const mainProjectHolder = page.querySelector('.mainProjectHolder')
    const projectAddBtn = page.querySelector(".addProjectBtn")

    const deleteProject = function(ProjectId)
    {
        Projects.splice(ProjectId,id);
        displayProjects(Projects)

    }

    const addProject = function(Project)
    {
        Projects.push(Project)
        displayProjects(Projects)
    }

    const displayProjects = function()
    {
        let ProjectDiv;
        clearDom(projectHolder,".Project")
        clearDom(mainProjectHolder,".Project")
        for(let i = 0; i<Projects.length;i++)
        {
            if(i < 3)
            {
                ProjectDiv =  module.insertElement('div','Project',Projects[i].getName(),mainProjectHolder);
                ProjectDiv.classList.add("projectView");
          
            }
            else
            {
                ProjectDiv =  module.insertElement('div','Project',Projects[i].getName(),projectHolder);
            }
            ProjectDiv.addEventListener("click",function()
            {
                programData.setProject(Projects[i])
                domTaskHandler.displayTasks()        
            })
        }
        programData.setProject(Projects[0])
        projectHolder.appendChild(projectAddBtn)
    }
    

    return{deleteProject,addProject}


})();


const domTaskHandler = (function()
{
    const taskDisplay = document.querySelector('.tasks')

    const displayTasks = function()
    {
        clearDom(taskDisplay,'.task')

        const tasks = programData.getCurrentProject().getTasks()

        for(let i = 0; i< tasks.length;i++)
        {
           taskMaker(taskDisplay,tasks[i])
           
        }
        taskSorter(taskDisplay)
    };
    
    return{displayTasks}
})();

const taskMaker = function(taskDisplay,tasks)
{
           const taskDiv = module.insertElement('div','task','',taskDisplay)
           module.insertElement('div',tasks.getTaskPriority()+'Priority','',taskDiv)
           const taskContentDiv = module.insertElement('div','taskContent','',taskDiv)
           const checkMark = module.insertElement('div','checkMark','',taskContentDiv)
           module.insertElement('div','taskTitle',tasks.getTaskName(),taskContentDiv)
           module.insertElement('div','taskTime',tasks.getTaskDate(),taskContentDiv)
           taskDisplay.appendChild(taskDiv)
           checkMark.addEventListener('click',function()
           {

            taskHandler.deleteTask(Array.from(taskDisplay.children).indexOf(taskDiv),programData.getCurrentProject().getTasks())
            taskDisplay.removeChild(taskDiv)


           })
}
const taskSorter = function(taskArray)
{
       
        const highPriority = taskArray.querySelectorAll('.highPriority')
        for(let i = 0; i<highPriority.length;i++)
        { 
            console.log("hawo")
            taskArray.appendChild(highPriority[i].parentElement)
        }
        const mediumPriority = taskArray.querySelectorAll('.mediumPriority')
        for(let i = 0; i<mediumPriority.length;i++)
        {
            taskArray.appendChild(mediumPriority[i].parentElement)
        }
        const lowPriority = taskArray.querySelectorAll('.lowPriority')
        for(let i = 0; i<lowPriority.length;i++)
        {
            taskArray.appendChild(lowPriority[i].parentElement)
        }
}

const clearDom = function(element,inputClass)
{
       const elementArray = element.querySelectorAll(inputClass)
       for(let i = 0; i<elementArray.length;i++)
       {
        element.removeChild(elementArray[i])
       }
}


export{domProjectHandler,domTaskHandler}