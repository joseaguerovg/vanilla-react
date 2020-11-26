function setProperties(prop, value, element){
    return element.setAttribute(prop, value)
}

export function createElement(type, props, content){
    const element = document.createElement(type)
    if(content){
        element.textContent = content
    }

    Object.keys(props).forEach(prop => setProperties(prop, props[prop], element))

    return element;
}