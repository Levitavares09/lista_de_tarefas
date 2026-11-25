const formulario = document.getElementById("form-tabela")
const msg = document.getElementById("entrada")
const tabela = document.getElementById("tabela-form")

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();

    const texto = msg.value.trim()

    if(texto == ""){
        return;
    }

    const linha = document.createElement("tr")
    const celulaTarefa = document.createElement("td")

    celulaTarefa.textContent = texto

    linha.appendChild(celulaTarefa)
    tabela.appendChild(linha)

    let celulaStatus = document.createElement("td")
    let caixinha = document.createElement("input")

    caixinha.type = "checkbox"

    caixinha.addEventListener("change", () =>{

        if (caixinha.checked) {
            celulaTarefa.style.textDecoration = "line-through"
        } else {
            celulaTarefa.style.textDecoration = "none"
        }
    })

    celulaStatus.appendChild(caixinha)
    linha.appendChild(celulaStatus)

    const btnRemover = document.createElement("button")
    const celulaRemover = document.createElement("td")

    btnRemover.type = "button"
    btnRemover.textContent = "Remover"

    btnRemover.addEventListener("click", () =>{
        linha.remove()
    })

    celulaRemover.appendChild(btnRemover)
    linha.appendChild(celulaRemover)

    msg.value = ""
    msg.focus()

    
})