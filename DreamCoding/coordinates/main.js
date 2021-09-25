const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');


// document와 img가 모두 준비된 상태가 바로 load 상태
// script defer상태에서 getBoundingClientRect를 받아오지 못하는 경우에는 아래처럼 load상태에서 동작하도록 처리해준다
addEventListener('load', () => {
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;

    document.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;


        //top, left로 animation을 주면 layout부터 다시 그리게 되어 몹시 비효율적이다.
        // 위 방식을 csstriggers에서 확인할 수 있듯이 translate를 이용하는 방식으로 바꾸어주면 훨씬 효율적이다. 

        vertical.style.transform = `translateX(${x}px)`;
        horizontal.style.transform = `translateY(${y}px)`;
        // vertical.style.left = `${x}px`;
        // horizontal.style.top = `${y}px`;

        target.style.transform = `translate(${x-targetHalfWidth}px,${y-targetHalfHeight}px)`;
        // target.style.left = `${x}px`;
        // target.style.top = `${y}px`;

        tag.style.transform = `translate(${x}px,${y}px)`;
        // tag.style.left = `${x}px`;
        // tag.style.top = `${y}px`;

        tag.innerHTML = `${x}px,${y}px`;
        // tag.innerHTML =`${x} , ${y}`
    })
})