const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let x, y;

    if (e.type === 'mousemove') {
        x = e.offsetX;
        y = e.offsetY;
    } else if (e.type === 'deviceorientation' || e.type === 'devicemotion') {
        x = e.gamma;
        y = e.beta;
    }

    if (this !== e.target) {
        const rect = e.target.getBoundingClientRect();
        x = x + rect.left;
        y = y + rect.top;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = ` 
        ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7 ),
        ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7 ),
        ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7 ),
        ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7 )
    `;
}

hero.addEventListener('mousemove', shadow);
window.addEventListener('deviceorientation', shadow);
window.addEventListener('devicemotion', shadow);
