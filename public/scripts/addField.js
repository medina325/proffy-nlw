// Procurar o botao
document.querySelector("#add-time").addEventListener('click', cloneField)
// Quando clicar no botao

// Executar uma acao
function cloneField() 
{
    // Duplicas os campos

    // Obs.: se o tipo da variável não for definido, então por default ele virá com o "tipo"(?) var
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    // Antes de colocar o clone na página, devemos resetar os campos
    const fields = newFieldContainer.querySelectorAll("input")

    fields.forEach(function(field_do_momento) {
        field_do_momento.value = ""
    });
    
    // Colocar na pagina
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
    