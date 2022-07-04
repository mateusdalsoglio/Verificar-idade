function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (formAno.value.length == 0 || Number(formAno.value) > ano ){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', '/img/criança menino.jpg')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', '/img/homem adulto.jpg')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', '/img/homem mais velho.jpg')
            }else {
                //Idoso
                img.setAttribute('src', '/img/homem mais velho.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', '/img/criança menina.jpg')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', '/img/mulher adulta.jpg')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', '/img/mulher mais velha.jpg')
            }else {
                //Idoso
                img.setAttribute('src', '/img/mulher mais velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}