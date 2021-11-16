function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas `//talvez nao precise por estar dentro do if//
    if (hora >= 0 && hora  <12){
        msg.innerHTML = `Agora são ${hora} horas, tenha um bom dia!! `//add a mais//
        //bomdia//
        img.src = 'manha 250.png'
        document.body.style.background='#998A8F'
    }else if (hora >=12 && hora <18){
        img.src=`tarde 250.png`
        document.body.style.background='#F9CCA8'
        msg.innerHTML = `Agora são ${hora} horas, tenha uma boa tarde!! `//add a mais//
        //boa tarde//
    }else{
        msg.innerHTML = `Agora são ${hora} horas, tenha uma boa noite!! `//add a mais//
        //boa noite//
        img.src='noite 250.png'
        document.body.style.background='#22353C'
        
    }
}
