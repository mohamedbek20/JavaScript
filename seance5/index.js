document.querySelector(".btn-calculator").addEventListener("click", () => {
    let a = Number(document.querySelector(".num1").value) ;

    let b = Number(document.querySelector(".num2").value) ;

    let resultat = a+b 

    document.querySelector(".resultat").value = resultat

    if ( resultat>20 ) {
        document.querySelector(".resultat").style.backgroundColor = "red"
    }
    else {
        document.querySelector(".resultat").style.backgroundColor = "blue"
    }
    console.log("ok")
})
const reset = () => {
    document.querySelector(".num1").value = ""
    document.querySelector(".num2").value = ""
    document.querySelector(".resultat").value = ""
    document.querySelector(".resultat").style.backgroundColor = ""
}
document.querySelector(".reset").addEventListener("click",reset)