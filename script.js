function sim() {
    var ctz = prompt("Tem certeza disso?")

    if (ctz === "sim" || ctz === "Sim" || ctz === "SIM") {
        alert("Então vamos lá")
        alert("Agora me fala o dia ?")
        var dia = prompt("Dia: ")
        alert("Agora me fala o mês: ")
        var mes = prompt("Mês: ")
        var wtp = `https://api.whatsapp.com/send?phone=5583993523059&text=dia: ${dia} / mês: ${mes}`
        if (dia === "" || mes === "") {
            alert("Você não me informou o dia ou o mês")
            sim()
        } else {
            window.open(wtp)
        }
    } else if (ctz === "não" || ctz === "Não" || ctz === "NÃO" || ctz === "nao" || ctz === "Nao" || ctz === "NAO") {
        var wtp = `https://api.whatsapp.com/send?phone=5583993523059&text=Tudo bem, eu já sabia que você não ia querer`
        window.open(wtp)
    } else {
        alert("Você não me informou se tem certeza ou não")
        sim()
    }
}

function nao(btn) {
    btn.style.position = "relative"
    btn.style.left = Math.random() * 10 + "px"
    btn.style.top = Math.random() * 10 + "px"
}
