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
    return{insertElement}
})();

export {generalFuncModule}