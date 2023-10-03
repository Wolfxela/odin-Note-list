import { generalFuncModule as module } from "./generalFunctions"
import { programData,taskHandler } from "./index"
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

const domTaskHandler = (function()
{
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
    };
    
    return{displayTasks}
})();

export{domTaskHandler}