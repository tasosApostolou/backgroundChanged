let bgColor = undefined
$(document).ready(function(){
    $('#btn').on('click', function(){
        bgColor = getRandomBg()
        showBgColor()
    })

})
function getRandomBg(){
    const letters = ['A','B','C','D','F']
    const digits = ['0', '1', '2', '3','4','5','6','7','8','9']
    const hex = [...letters, ...digits]

    let color = '#'
    for(let i=1; i<=6; i++){
let randomHex= Math.floor(Math.random()*hex.length)
color += hex[randomHex]
    }

    return color
}

function showBgColor(){
   $('#clr-hex').html(bgColor)
    document.body.style.backgroundColor=bgColor
    $('body').css({background : bgColor})
}