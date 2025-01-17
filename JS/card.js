$.get('JSON/store.json').done((data) =>{
    
    $('#container').html('');
    
    data.products.forEach((a,i) => {
        var card = `<div class="product-card" draggable="true">
        <img src="img/${a.photo}" alt="상품이미지" draggable="false">
        <div class="product-Info">
        <h5 class="name">${a.title}</h5>
        <p class="company">${a.brand}</p>
        <h6><span class="price">${a.price}</span>원</h6>
        </div>
        <button class="btn btn-danger add-Cart">담기</button>
        </div>`


        $('#container').append(card);

    });

     
});
