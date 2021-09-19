// const body = document.querySelector('body');

// function updateTag() {
//     const image = new Image();
//     //image객체가 생성되어 속성들을 추가할수 있음
//     image.src = `img/target.png`;
//     body.appendChild(image);
//     div.innerHTML =`
//     (${window.screen.width},  ${window.screen.height})
//     `;
//     const div = new div();
// }

// window.addEventListener('resize',() => {
//         // 사이즈가 변경 될 때마다 콜백함수 호출
//     updateTag();
// })
// // 페이지가 처음 로딩이 되면 실행될 메서드
// updateTag();

const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    vertical.style.left = `${x}px`;
    horizontal.style.top = `${y}px`;

    target.style.left = `${x}px`;
    target.style.top = `${y}px`;

    tag.style.left = `${x}px`;
    tag.style.top = `${y}px`;

    tag.innerHTML = `${x}px,${y}px`;
    // tag.innerHTML =`${x} , ${y}`
})