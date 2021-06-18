var cards = $(".memory-card")
var hasFlipCard = false
var firstCard;
var secondCard;

function flipCard() {
    $(this).addClass("flip")
    var data = $(this).data("framework")

    if (!hasFlipCard) {
        firstCard = $(this)
        hasFlipCard = true

    } else {
        hasFlipCard = false
        secondCard = $(this)
        if (firstCard.data("framework") === secondCard.data("framework")) {
            firstCard.off('click', flipCard)
            secondCard.off('click', flipCard)
            console.log(firstCard.data("framework"))
            console.log(secondCard.data("framework"))

        }else{
          setTimeout(function(){
            firstCard.removeClass('flip')
            secondCard.removeClass('flip')
          },400)
            
        }
    }


}
cards.on('click', flipCard)