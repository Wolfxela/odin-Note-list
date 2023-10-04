import { generalFuncModule as module } from "./generalFunctions";
import { programData} from "./index";
import { domTaskHandler } from "./domTaskHandler";

const domProjectHandler = (function(){

     //comment
    let Projects = [];
    const page = document.querySelector('.content')
    const projectHolder = page.querySelector(".projectHolder")
    const mainProjectHolder = page.querySelector('.mainProjectHolder')
    const projectAddBtn = page.querySelector(".addProjectBtn")

    const deleteProject = function(ProjectId)
    {
        Projects.splice(ProjectId,1);
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
        module.clearDom(projectHolder,".Project")
        module.clearDom(mainProjectHolder,".Project")
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
                programData.setTaskStatus(true)
                domTaskHandler.displayTasks()        
            })
        }
        programData.setProject(Projects[0])
        projectHolder.appendChild(projectAddBtn)
    }
    

    return{deleteProject,addProject}


})();


export{domProjectHandler}