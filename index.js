const conten__message = document.querySelector(".conten__message");

const conten__message__main = conten__message.querySelector(".conten__message__main");

var messageValue = "chào cậu !!"

const messageElement = document.createElement("span");
messageElement.className = 'conten__message__main__text'
messageElement.innerText = messageValue;

conten__message__main.appendChild(messageElement)


const conten__btn__no = document.querySelector('.conten__btn__no');
const conten__btn__yes = document.querySelector('.conten__btn__yes');


conten__btn__no.innerText = "không chào"
conten__btn__yes.innerText = "ừ"


var size = 0;
function todongy(){
    const conten = document.querySelector(".conten");
    const app = document.querySelector(".app");
    setTimeout(function(){
        conten.style.display = "none";
    }, 1000);
    setTimeout(function(){
        var messageValuee = "❤️";
        app.innerText = messageValuee;
        app.style.fontSize = "20px";
        app.style.animation = "sizze 2s ease-in-out forwards";
        
            
        setTimeout(function(){
            var messageValuee = "❤️ iu cậu!";
            app.innerText = messageValuee;
        }, 1000);
    }, 2000);
}

var loss = 0;
var click = 0;
conten__btn__yes.addEventListener("click", ()=>{
    yesValue = conten__btn__yes.innerText;
    noValue = conten__btn__no.innerText;
    if(yesValue == "ừ"){
        conten__btn__no.style.marginLeft =  '0px';
        conten__btn__no.style.display =  'block';
        if(click >= 2){
            messageValue = "vạy có phải tốt hơn 0";
            messageElement.innerText = messageValue;
            setTimeout(function(){
                messageValue = "chuyện là....";
                messageElement.innerText = messageValue;
                conten__btn__no.innerText = "gì"
                conten__btn__yes.innerText = "sao á"
            }, 2000);
        }
        if(click <= 1){
            messageValue = "oki cạu";
            messageElement.innerText = messageValue;
            conten__btn__no.innerText = ""
            conten__btn__yes.innerText = ""
            
            setTimeout(function(){
                messageValue = "chuyện là....";
                messageElement.innerText = messageValue;
                conten__btn__no.innerText = "gì"
                conten__btn__yes.innerText = "sao á"
            }, 2000);
        }
    }

    
    if(yesValue == "sao á"){
        setTimeout(function(){
            messageValue = "to noi cau dung de y nha ..";
            messageElement.innerText = messageValue;
            conten__btn__yes.innerText = "ô kê, nói đi"
            conten__btn__no.innerText = "ừm"
        }, 1000);

    }
    if(yesValue == "ô kê, nói đi"){
        conten__btn__yes.innerText = ""
        conten__btn__no.innerText = ""
        setTimeout(function(){
            messageValue = "tothichcau";
            messageElement.innerText = messageValue;
            conten__btn__yes.innerText = "rồi sao nứa"
            conten__btn__no.innerText = "ừmm"
        }, 1000);

    }
    if(yesValue == "rồi sao nứa"){
        conten__btn__yes.innerText = ""
        conten__btn__no.innerText = ""
        setTimeout(function(){
            messageValue = "cậu làm bạn gái tớ nha!";
            messageElement.innerText = messageValue;
            conten__btn__yes.innerText = "cậu chắc chưa"
            conten__btn__no.innerText = "đợi tớ 30p"
        }, 1000);

    }
    if(yesValue == "cậu chắc chưa"){
        conten__btn__yes.innerText = ""
        conten__btn__no.innerText = ""
        setTimeout(function(){
            messageValue = "tớ nghĩ lâu lắm rùi cạu";
            messageElement.innerText = messageValue;
            conten__btn__yes.innerText = ""
            conten__btn__no.innerText = ""
        }, 1000);
        setTimeout(function(){
            messageValue = "cậu làm người yêu tớ nha!!";
            messageElement.innerText = messageValue;
            conten__btn__yes.innerText = "đợi tớ xíu"
            conten__btn__no.innerText = "tớ đồngg ý"
        }, 2000);

    }
    if(yesValue == "đợi tớ xíu"){
        conten__btn__yes.innerText = ""
        conten__btn__no.innerText = ""
        setTimeout(function(){
            messageValue = "oki cạu";
            messageElement.innerText = messageValue;
            conten__btn__yes.innerText = ""
            conten__btn__no.innerText = ""
        }, 1000);
        setTimeout(function(){
            messageValue = "...";
            messageElement.innerText = messageValue;
            conten__btn__yes.innerText = "tớ đồngg ý"
            conten__btn__no.innerText = "đợi tớ xíu"
        }, 2000);

    }
    
    if(yesValue == "tớ đồngg ý"){
        conten__btn__yes.innerText = ""
        conten__btn__no.innerText = ""
        setTimeout(function(){
            messageValue = "tớ cảm ơn cạu";
            messageElement.innerText = messageValue;
            conten__btn__yes.innerText = ""
            conten__btn__no.innerText = ""
        }, 1000);
        setTimeout(function(){
            messageValue = "yêu cậu";
            messageElement.innerText = messageValue;
            conten__btn__yes.innerText = ""
            conten__btn__no.innerText = ""
            
        }, 2000);
        setTimeout(function(){
            
            todongy();
        }, 3000);

    }
})

// conten__btn__no.addEventListener("click", ()=>{
//     yesValue = conten__btn__yes.innerText;
//     noValue = conten__btn__no.innerText;
    
    
    
// })

conten__btn__no.addEventListener("click", ()=>{
    yesValue = conten__btn__yes.innerText;
    noValue = conten__btn__no.innerText;
    if(loss == 0)
        loss = 220;
    else if(loss == 220)
        loss = -220;
    else if(loss == -220)
        loss = 0;
    click++;
    if(click == 4)
        conten__btn__no.style.display = "none";
    if(noValue == "không chào"){
        conten__btn__no.style.marginLeft = loss + 'px';
        messageValue = "chào đi mà!";
        messageElement.innerText = messageValue;
    }
    if(noValue == "không chào"){
        if(click >= 2){
            messageValue = "chào nhau đi";
            messageElement.innerText = messageValue;
        }
    }


        
    if(noValue == "gì"){
        conten__btn__no.style.marginLeft =  '0px';
        messageValue = "lạnh lùng vậy !";
        messageElement.innerText = messageValue;
        conten__btn__yes.innerText = ""
        conten__btn__no.innerText = ""
        setTimeout(function(){
            messageValue = "cơ mà to noi cau dung de y nha ..";
            messageElement.innerText = messageValue;
            conten__btn__yes.innerText = "ô kê, nói đi"
            conten__btn__no.innerText = "ừm"
        }, 1000);

    }
    if(noValue == "ừm"){
        conten__btn__yes.innerText = ""
        conten__btn__no.innerText = ""
        setTimeout(function(){
            messageValue = "to thich cau";
            messageElement.innerText = messageValue;
            conten__btn__yes.innerText = "rồi sao nứa"
            conten__btn__no.innerText = "ừmm"
        }, 1000);

    }
    if(noValue == "ừmm"){
        conten__btn__yes.innerText = ""
        conten__btn__no.innerText = ""
        setTimeout(function(){
            messageValue = "cậu làm bạn gái tớ nha!";
            messageElement.innerText = messageValue;
            conten__btn__yes.innerText = "cậu chắc chưa"
            conten__btn__no.innerText = "đợi tớ 30p"
        }, 1000);

    }
    if(noValue == "đợi tớ 30p"){
        conten__btn__yes.innerText = ""
        conten__btn__no.innerText = ""
        setTimeout(function(){
            messageValue = "oki cạu";
            messageElement.innerText = messageValue;
            conten__btn__yes.innerText = "tớ đồngg ý"
            conten__btn__no.innerText = ""
        }, 1000);
        setTimeout(function(){
            messageValue = "...";
            messageElement.innerText = messageValue;
            conten__btn__yes.innerText = "tớ đồngg ý"
            conten__btn__no.innerText = "..."
        }, 2000);

    }
    if(noValue == "tớ đồngg ý"){
        conten__btn__yes.innerText = ""
        conten__btn__no.innerText = ""
        setTimeout(function(){
            messageValue = "tớ cảm ơn cạu";
            messageElement.innerText = messageValue;
            conten__btn__yes.innerText = ""
            conten__btn__no.innerText = ""
        }, 1000);
        setTimeout(function(){
            messageValue = "yêu cậu";
            messageElement.innerText = messageValue;
            conten__btn__yes.innerText = ""
            conten__btn__no.innerText = ""
        }, 2000);
        setTimeout(function(){
            
            todongy();
        }, 3000);

    }
    
})
