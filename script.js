function sim() {
    var ctz = prompt("Tem certeza ?")

    if (ctz === "sim" || ctz === "Sim" || ctz === "SIM") {
        alert("Então vamos lá")
        alert("Agora me fala o dia ?")
        var dia = prompt("Dia: ")
        alert("Agora me fala o mês: ")
        var mes = prompt("Mês: ")
        if (dia === "" || mes === "") {
            alert("Você não me informou o dia ou o mês")
            sim()
        } else {
            alert(`Então tudo certo para o ${dia}/${mes}!!`)
        }
    } else if (ctz === "não" || ctz === "Não" || ctz === "NÃO" || ctz === "nao" || ctz === "Nao" || ctz === "NAO") {
        alert("Tudo bem, eu já sabia que você não ia querer")
    } else {
        alert("Você não me informou se tem certeza ou não")
        sim()
    }
}

function nao(btn) {
    btn.style.position = "absolute"
    btn.style.left = Math.random() * 1000 + "px"
    btn.style.top = Math.random() * 500 + "px"
}

