const dataTaskMaker = function(inputName,inputDescription,inputDate,inputPriority)
{
    let taskName = inputName;
    let taskDescription = inputDescription;
    let taskDate = inputDate;
    let taskPriority = inputPriority
    let isComplete = false;

    const getTaskName = ()=>{return taskName}
    const getTaskDescription = ()=>{return taskDescription}
    const getTaskDate = ()=>{return taskDate}
    const getTaskPriority = ()=>{return taskPriority}
    const isTaskCompleted = ()=>{return isComplete}

    return{getTaskName,getTaskDescription,getTaskDate,getTaskPriority,isTaskCompleted}
}

const projectMaker = function(inputName)
{
    let projectName = inputName;
    let tasks = [];

    const getName = ()=>{return projectName}
    const getTasks = ()=>{return tasks}

    return{getName,getTasks}
}

export{dataTaskMaker,projectMaker}