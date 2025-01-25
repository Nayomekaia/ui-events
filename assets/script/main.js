//* kleur veranderde button*//
let kleur = document.querySelector('a:nth-of-type(1)'); 

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black'];

    let currentColorIndex = 0;

    kleur.addEventListener('click', function() {
      kleur.style.backgroundColor = colors[currentColorIndex];

      currentColorIndex++;

      if (currentColorIndex >= colors.length) {
        currentColorIndex = 0;
      }
    });

  //*hypo effect*//

   let hypo = document.querySelector('a:nth-of-type(2)')
   hypo.addEventListener('click', function() {
    hypo.classList.add('hypo');
  setTimeout(function() {
      hypo.classList.remove('hypo');
 }, block);
  });


//* smiley button*//
let smiley = document.querySelector('a:nth-of-type(3)')

smiley.addEventListener('click', function() {
  smiley.innerHTML = '😁'
  smiley.style.border = 'none'
  smiley.style.fontSize = '45px'
})





//*kleiner button*// 
let kleiner = document.querySelector('a:nth-of-type(4)')
kleiner.addEventListener('click', function() {
  kleiner.style.fontSize = '10px'
})

//*bounce button*//
let bounce = document.querySelector('a:nth-of-type(5)')
bounce.addEventListener('click', function() {
  bounce.style.animation = 'bounce 1s infinite';
})
//*refresh button*//
let refresh = document.querySelector('a:nth-of-type(6)')
refresh.addEventListener('click', function() {
  location.reload()
})


//*glow button*//

let glow = document.querySelector('a:nth-of-type(8)')
glow.addEventListener('click', function() {
  glow.style.boxShadow = '0 0 100px 10px rgba(255, 255, 255, 0.5)';
})

//*zwaaiendehand*//
let zwaaiendehand = document.querySelector('a:nth-of-type(9)')
zwaaiendehand.addEventListener('click', function() {
  zwaaiendehand.innerHTML = '👋'
   zwaaiendehand.style.border = 'none'
   zwaaiendehand.style.fontSize = '50px'
  zwaaiendehand.style.animation = 'wave 1s infinite';
  setTimeout(function() {
    zwaaiendehand.innerHTML = '👋'
  }, 1000);
});

//* word groter als je erop klikt*//
let wordgroter = document.querySelector('a:nth-of-type(10)')
wordgroter.addEventListener('click', function() {
  wordgroter.style.fontSize = '100px'
})


//* ui-event voorbeeld*//
let voorbeeld = document.querySelector('a:nth-of-type(12)')

voorbeeld.addEventListener('click', jumpHandler)
voorbeeld.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  voorbeeld.classList.toggle('jump')

}