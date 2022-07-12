const marioImg = document.querySelector('.marioImg');
const pipeImg = document.querySelector('.pipeImg');   
const nowPoint = document.querySelector('.nowPoint span');
const bestPoint = document.querySelector('.bestPoint span');

const best = JSON.parse(localStorage.getItem('bestPoint')) || 0;
bestPoint.innerHTML = Math.trunc(best);


const jump = (e)=>{
    e.code === 'Space' && marioImg.classList.add('jump');

    setTimeout(()=>{marioImg.classList.remove('jump')}, 500)
}

let point = 0;
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

        point > best && localStorage.setItem('bestPoint', point);

        clearInterval(loop);
    }

    point += 0.1;
    nowPoint.innerText = Math.trunc(point);
},10)

document.addEventListener('keydown', jump);