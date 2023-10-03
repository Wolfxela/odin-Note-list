const generalFuncModule = (function()
{
    const bodyElem = document.body;
    const doc = document;



    const insertElement = function(elementType,elementClass,elementContent,elementParrent,elementImgSrc)
    {
       let element = doc.createElement(elementType);
        element.className = elementClass;
        element.textContent = elementContent
        if(elementType === "img")
        {
            element.src = elementImgSrc;
        }
        elementParrent.appendChild(element)
        return element
        
    }
    const clearDom = function(parrent,inputClass)
{
       const elementArray = parrent.querySelectorAll(inputClass)
       for(let i = 0; i<elementArray.length;i++)
       {
        parrent.removeChild(elementArray[i])
       }
}
    return{insertElement,clearDom}
})();

export {generalFuncModule}