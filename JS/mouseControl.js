// 1. mouseup 이벤트 사용 및 X,Y 좌표값 => e.clientX,Y 값 변수 저장
// 클릭여부 변수에 저장 후
// 2. 마우스가 #drag-Zone 안 이면서 클릭여부가 true 일 때 요소 추가
// 2.5 요소 추가되면 hidden 클래스 추가해서 드래그 안내 없애기
// 3. 이미 요소가 있다면 수량이 올라갈 것

$("#product-card").mousedown((e) =>{
    console.log(e);
});