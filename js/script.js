const marioImg = document.querySelector('.marioImg');
const pipeImg = document.querySelector('.pipeImg');   

const jump = (e)=>{
    e.code === 'Space' && marioImg.classList.add('jump');

    setTimeout(()=>{marioImg.classList.remove('jump')}, 500)
}

const loop = setInterval(()=>{
    const pipePosition = pipeImg.offsetLeft;
    const marioPosition = +window.getComputedStyle(marioImg).bottom.replace('px', ' ');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipeImg.style.animation = 'none';
        pipeImg.style.left = `${pipePosition}px`;

        marioImg.style.animation = 'none';
        marioImg.style.bottom = `${marioPosition}px`;

        marioImg.src= './images/game-over.png'
        marioImg.style.width = '75px';
        marioImg.style.marginLeft = '50px';

        clearInterval(loop);
    }
},10)

document.addEventListener('keydown', jump);