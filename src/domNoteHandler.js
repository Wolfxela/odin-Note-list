import { generalFuncModule as module } from "./generalFunctions";
import { programData } from "./index";
import { taskHandler } from "./index";

const domNoteHandler = (function()
{
    const taskDisplay = document.querySelector('.tasks')

    

    const displayNotes = function()
    {
        taskDisplay.style.flexDirection = "row";
        taskDisplay.style.justifyContent = "center";
        taskDisplay.style.flexWrap = "wrap";
        module.clearDom(taskDisplay,'.task')
        module.clearDom(taskDisplay,'.note')

        const tasks = programData.getNoteProject().getTasks()

        for(let i = 0; i< tasks.length;i++)
        {
            noteMaker(taskDisplay,tasks[i])
           
        }
    };
    
    return{displayNotes}
})();

const noteMaker = function(taskDisplay,tasks)
{
           const noteDiv = module.insertElement('div','note',tasks.getTaskDescription(),taskDisplay)
           const deleteNote = module.insertElement('div','deleteNote','X',noteDiv)


           deleteNote.addEventListener('click',function()
           {
            taskHandler.deleteTask(Array.from(taskDisplay.children).indexOf(noteDiv),programData.getCurrentProject().getTasks())
            taskDisplay.removeChild(noteDiv)
           })
}

export{domNoteHandler}