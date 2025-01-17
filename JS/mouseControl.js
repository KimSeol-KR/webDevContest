// 1. mouseup 이벤트 사용 및 X,Y 좌표값 => e.clientX,Y 값 변수 저장
// 클릭여부 변수에 저장 후
// 2. 마우스가 #drag-Zone 안 이면서 클릭여부가 true 일 때 요소 추가
// 2.5 요소 추가되면 hidden 클래스 추가해서 드래그 안내 없애기
// 3. 이미 요소가 있다면 수량이 올라갈 것

// 드래그 이벤트 처리
$(document).ready(function() {
    let draggedItem = null;

    // 드래그 시작: product-card를 드래그할 때
    $('.product-card').on('dragstart', function(e) {
      draggedItem = this; // 현재 드래그된 요소를 저장
      $(this).css('opacity', 0.5); // 드래그 중 투명도를 낮춤
    });

    // 드래그 종료: 드래그가 끝났을 때
    $('.product-card').on('dragend', function(e) {
      $(this).css('opacity', 1); // 드래그 종료 후 원래 상태로 돌아옴
    });

    // 드래그 오버: #wish-List로 드래그된 항목이 들어갈 때
    $('#wish-List').on('dragover', function(e) {
      e.preventDefault(); // 기본 동작(드롭)을 허용하도록 설정
      $(this).css('border', '2px dashed #00f'); // 드래그 중인 항목을 나타내기 위해 테두리 추가
    });

    // 드래그 종료: #wish-List에 항목을 드롭할 때
    $('#wish-List').on('dragleave', function(e) {
      $(this).css('border', 'none'); // 드래그 영역을 떠날 때 테두리 제거
    });

    // 항목을 드롭: #wish-List에 카드가 드롭되었을 때
    $('#wish-List').on('drop', function(e) {
      e.preventDefault(); // 기본 동작 방지
      $('#drag-Zone').addClass('hidden');
      $(this).css('border', 'none'); // 드래그 영역 테두리 제거

        
      $('#wish-List').addClass('wide');

      // 드롭된 항목을 wish-List에 추가
      let productCard = $(draggedItem).clone(); // 드래그된 카드를 복사해서 추가
      $('#wish-List').append(productCard); // 복사된 카드를 wish-List에 추가
    });
  });


