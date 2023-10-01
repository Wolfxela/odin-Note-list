
const projectMaker = function(inputName)
{
    let projectName = inputName;
    let tasks = [];

    const getName = ()=>{return projectName}
    const getTasks = ()=>{return tasks}

    return{getName,getTasks}
}

const taskHandler = (function()
{
    const setTask = (task,taskArray)=>{taskArray.push(task)}
    const deleteTask = (taskSpot,taskArray)=>{taskArray.splice(taskSpot,1)}
    return{setTask,deleteTask}
})();

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

// const test = projectMaker("Home")
// const task1 = dataTaskMaker("name1","hello i am fox","12/12/1232","High")
// const task2 = dataTaskMaker("name2","hello i am fox","12/12/1232","Medium")
// const task3 = dataTaskMaker("name3","hello i am fox","12/12/1232","Low")
// taskHandler.setTask(task1,test.getTasks())
// taskHandler.setTask(task2,test.getTasks())
// taskHandler.setTask(task3,test.getTasks())
//  console.log(test.getTasks())
//  taskHandler.deleteTask(0,test.getTasks())
//  console.log(test.getTasks())
