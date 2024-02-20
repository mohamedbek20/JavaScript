const create = () => {
    const parent = document.querySelector(".content");
    const enfant = document.createElement("h1");
    const child2 = document.createElement("button");

    enfant.innerHTML = "CHAPA CHAPA";
    enfant.style.backgroundColor = "red";

    child2.innerHTML = "submit";
    child2.style.backgroundColor = "yellow";

    parent.append(enfant);
    parent.prepend(child2);

    
    window.createdElements = [enfant, child2];
}

const removeElements = () => {
   
    const createdElements = window.createdElements;

    if (createdElements) {
        
        createdElements.forEach(element => {
            element.remove();
        });

        // Reset the global variable to null
        window.createdElements = null;
    }
}

document.querySelector(".create_h1").addEventListener("click", create);
document.querySelector(".remove_elements").addEventListener("click", removeElements);
