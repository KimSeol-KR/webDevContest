$.get('JSON/store.json').done((data) =>{
    
    $('#container').html('');
    
    data.products.forEach((a,i) => {
        var card = `<div id="product-card" draggable="true">
        <img src="img/${a.photo}" alt="상품이미지" draggable="false">
        <div id="product-Info">
        <h5 id="name">${a.title}</h5>
        <p id="company">${a.brand}</p>
        <h6><span id="price">${a.price}</span>원</h6>
        </div>
        <button id="add-Cart" class="btn btn-danger">담기</button>
        </div>`


        $('#container').append(card);

    });
})
