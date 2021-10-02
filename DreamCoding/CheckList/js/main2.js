const items = document.querySelector('.items');
const addBtn = document.querySelector('.footer_button');
const input = document.querySelector('.footer_input');


function onAdd() {
    // 배우는 과정에서는
    // 1. 2. 3. 4. 5. 주석을 먼저 달고 
    // 코딩
    // 실력이 쌓이면 코드를 보면 어떤 작동을 하는지 알 수 있기 때문에
    // 주석은 지우는 것이 좋다

    // 추후에 주석은 
    // 1. 어떤 함수인지 
    // 2. 언제 사용해야 하는지 
    // 3. 왜(의도) 이렇게 작성했는지 등에 사용한다.

    // 1. 사용자가 입력한 텍스트를 받아오기 
    const text = input.value;
    if (text === '') {
        // add 버튼을 누르는 순간
        // focus는 input에 있다가 add 버튼으로 옮겨온다
        // input에focus를 남아있게 하려면 아래 코드를 ★추가★ 
        input.focus();
        return;
    }

    // console.log(text);
    // 2. 새로운 아이템 만들기  (텍스트 + 삭제 버튼)
    const item = createItem(text);
    

    // 3. items 컨테이너 안에 새로 만든 아이템 추가
    items.appendChild(item);

    // 4. 새로 추가된 항목이 보이는 곳으로 화면 설정(스크롤링)
    //★ 다시 해보기
    item.scrollIntoView({ behavior: "smooth", block: 'center' });


    // 5. input 초기화 됨과 동시에 포커스 주기
    input.value = '';
    input.focus();

}

function createItem(text) {

    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item_row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const itemName = document.createElement('span');
    itemName.setAttribute('class', 'item_name');
    itemName.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item_delete');
    deleteBtn.innerHTML = '<i class="fas fa-minus"></i>';
    // ★ 다시 해보기
    deleteBtn.addEventListener('click', () => {
        // 삭제 할 아이템이 어떤 아이템인지 알 수 있는 방법
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
        items.removeChild(itemRow);
    });


    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item_divider');

    item.appendChild(itemName);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);

    return itemRow;
}
addBtn.addEventListener('click', () => {
    onAdd();
})

input.addEventListener('keypress', (event) => {
    // 영어는 되고 한글은 안됨 ?.?
    console.log('key');
    if (event.key === 'Enter') {
        onAdd();
    }
    // if (${ e.key } === 'Enter') {
    //    
    // }
});