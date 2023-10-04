import { generalFuncModule as module } from "./generalFunctions"
import { programData,taskHandler } from "./index"
import { dataTaskMaker, projectMaker,test1 } from "./objects"


const taskSorter = function(taskArray)
{
       
        const highPriority = taskArray.querySelectorAll('.highPriority')
        const mediumPriority = taskArray.querySelectorAll('.mediumPriority')
        const lowPriority = taskArray.querySelectorAll('.lowPriority')
        for(let i = 0; i<highPriority.length;i++)
        { 
            taskArray.appendChild(highPriority[i].parentElement)
        }
        for(let i = 0; i<mediumPriority.length;i++)
        {
            taskArray.appendChild(mediumPriority[i].parentElement)
        }
        for(let i = 0; i<lowPriority.length;i++)
        {
            taskArray.appendChild(lowPriority[i].parentElement)
        }
}
const taskDetailMaker = function(name,description,date,priority)
{
    const taskDiv = module.insertElement('div','taskdetails','',document.body)
    const topDetails = module.insertElement('div','topDetails','',taskDiv)
    const bottomDetails = module.insertElement('div','bottomDetails','',taskDiv)
    module.insertElement('div','taskName',name,topDetails)
    module.insertElement('div','taskDescription',description,topDetails)
    module.insertElement('div','taskDate',"Date:"+date,bottomDetails)
    module.insertElement('div','taskPriority',"Priority:"+priority,bottomDetails)

    taskDiv.addEventListener('click',function()
    {
        document.body.removeChild(taskDiv)
    })

}
const checkLocalProjects = function(projectArray,project)
{
    let isProjectAlreadyIn = false;
    if(projectArray.length == 0)
    {
        projectArray.push(project)
        console.log(projectArray[0].getName())
    }
    for(let i = 0; i < projectArray.length;i++)
    {
        if(project.projectName == projectArray[i].projectName)
        {
            projectArray[i] = project
            isProjectAlreadyIn = true

        }
    }
    if(isProjectAlreadyIn == false)
    {
        projectArray.push(project)
    }
}

const domTaskHandler = (function()
{
    let localProjects = [];
    const taskDisplay = document.querySelector('.tasks')
    const displayTasks = function()
    {
        taskDisplay.style.flexDirection = "column";
        taskDisplay.style.justifyContent = "flex-start";
        taskDisplay.style.flexWrap = "nowrap";
        module.clearDom(taskDisplay,'.task')
        module.clearDom(taskDisplay,'.note')

        const tasks = programData.getCurrentProject().getTasks()


        for(let i = 0; i< tasks.length;i++)
        {
           taskMaker(taskDisplay,tasks[i])
           
        }
        taskSorter(taskDisplay)

        if (!localStorage.getItem("Projects"))
        { 
            localStorage.setItem("Projects",JSON.stringify(localProjects))
            JSON.parse(localStorage.getItem("Projects"))
            localProjects = JSON.parse(localStorage.getItem("Projects"))
            checkLocalProjects(localProjects,programData.getCurrentProject());
        }
        else
        {
            localProjects = JSON.parse(localStorage.getItem("Projects"))
            checkLocalProjects(localProjects,programData.getCurrentProject());
            localStorage.setItem("Projects",JSON.stringify(localProjects))
        }
        


    };
    const taskMaker = function(taskDisplay,tasks)
        {
           const taskDiv = module.insertElement('div','task','',taskDisplay)
           module.insertElement('div',tasks.getTaskPriority()+'Priority','',taskDiv)
           const taskContentDiv = module.insertElement('div','taskContent','',taskDiv)
           const checkMark = module.insertElement('div','checkMark','',taskContentDiv)
           const taskTitle = module.insertElement('div','taskTitle',tasks.getTaskName(),taskContentDiv)
           module.insertElement('div','taskTime',tasks.getTaskDate(),taskContentDiv)
           taskDisplay.appendChild(taskDiv)

           checkMark.addEventListener('click',function()
           {
            taskHandler.deleteTask(Array.from(taskDisplay.children).indexOf(taskDiv),programData.getCurrentProject().getTasks())
            taskDisplay.removeChild(taskDiv)
            displayTasks()
           })
           taskTitle.addEventListener("click",function()
           {
            taskDetailMaker(tasks.getTaskName(),tasks.getTaskDescription(),tasks.getTaskDate(),tasks.getTaskPriority())
           })
        }
    
    return{displayTasks}
})();

const makeTask = function(inputname,inputDescription,inputDate,inputPriority)
{
        let test = programData.getCurrentProject()
        const task = dataTaskMaker(inputname,inputDescription,inputDate,inputPriority)
        taskHandler.setTask(task,programData.getCurrentProject().getTasks())
        domTaskHandler.displayTasks(programData.getCurrentProject())
}
export{domTaskHandler,makeTask}