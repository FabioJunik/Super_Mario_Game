const marioImg = document.querySelector('.marioImg')

const jump = (e)=>{
    e.code === 'Space' && marioImg.classList.add('jump');

    setTimeout(()=>{marioImg.classList.remove('jump')}, 500)
}

document.addEventListener('keydown', jump);