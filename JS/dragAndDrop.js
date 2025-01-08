// https://velog.io/@uuujinnn/%EB%93%9C%EB%9E%98%EA%B7%B8-%EC%95%A4-%EB%93%9C%EB%A1%AD%EC%9C%BC%EB%A1%9C-HTML-%EC%9A%94%EC%86%8C-%EC%98%AE%EA%B8%B0%EA%B8%B0

let dragElement = document.querySelector('#product-card');
let dropPoint = document.querySelector('#wish-List');

// 1. mouseup 이벤트 사용 및 X,Y 좌표값 => e.clientX,Y 값 변수 저장
// 클릭여부 변수에 저장 후
// 2. 마우스가 #drag-Zone 안 이면서 클릭여부가 true 일 때 요소 추가
// 2.5 요소 추가되면 hidden 클래스 추가해서 드래그 안내 없애기
// 3. 이미 요소가 있다면 수량이 올라갈 것

dragElement.addEventListener("dragstart", (e) => {
    console.log(1);
    e.dataTransfer.setData("text/select", e.target.id);
});

dropPoint.addEventListener("dragenter", () =>{
    console.log(2);
    document.querySelector('#drag-Zone').classList.add('hidden');

});

dropPoint.addEventListener("dragover",(e) => {
e.preventDefault();
});

dropPoint.addEventListener("drop", (e) =>{
e.preventDefault();

const id = e.dataTransfer.getData("text/select");

const dragableElement = document.getElementById(id);
console.log(dragableElement);
dropPoint.appendChild(dragableElement);
});

