
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
export{programData, taskHandler}