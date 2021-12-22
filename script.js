function solucionar() {
    var nome = document.getElementById("nome")
    var telefone = document.getElementById("telefone")
    var email = document.getElementById("email")
    if (nome.value.length == 0 || telefone.value.length == 0 || email.value.length == 0) {
        window.alert("preencha todos os campos para solucionar!")
    } else {
    document.write("Concluido! Em breve entraremos em contato :D")   
    document.body.style.font = "normal 25pt Bungee"
    document.body.style.textAlign = "center"
    document.body.style.color = "white"
    document.body.style.backgroundColor = "red"
}}

function topo() {
    window.scrollTo(top)
}