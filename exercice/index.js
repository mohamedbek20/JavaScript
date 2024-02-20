const Form = [];

    function addName() {
        const nom = document.getElementById("nom").value;
        const prenom = document.getElementById("prenom").value;
        const age = document.getElementById("age").value;

        Form[Form.length] = { nom, prenom, age };

        displayNames();
    }

    function displayNames() {
        const namesList = document.getElementById("namesList");
        namesList.innerHTML = "";

        Form.forEach(name => {
            const paragraph = document.createElement("p");
                paragraph.textContent = "Nom: " + name.nom + ", Prénom: " + name.prenom + ", Age: " + name.age;
                namesList.appendChild(paragraph);
        });
    }