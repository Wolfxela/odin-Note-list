import { generalFuncModule as module } from "./generalFunctions";
const domProjectHandler = (function(){

    let Projects = [];
    const projectHolder = document.querySelector(".projectHolder")
    const projectAddBtn = document.querySelector(".addProjectBtn")

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
        Projects.forEach(Project => {
           const ProjectDiv =  module.insertElement('div','Project',Project.getName(),projectHolder);
        });
        projectHolder.appendChild(projectAddBtn)
    }
    

    return{deleteProject,addProject}


})();


const domTaskHandler = (function()
{
    const displayTasks = function(Project)
    {
        clearDom(tasks)
        //code to display tasks here
    };
    
    return{displayTasks}
})();

const clearDom = function(element,inputClass)
{
    //code to delete all of dom's children
}




// btnDelProject.addeventlistener("click",function()
// {
//     const index; //getIndexCode;
//     domProjectHandler().deleteProject(index)
// })
// btnDelTask.addeventlistener("click",function()
// {
//     const index; //getIndexCode;
//     taskHandler.deleteTask(index,programData.getCurrentProject().getTasks())
// })

export{domProjectHandler,domTaskHandler}