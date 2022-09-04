let name = document.getElementById('name');
let price = document.getElementById('price');
let cat = document.getElementById('cat');
let desc = document.getElementById('desc');
let add = document.getElementById('add');
let search = document.getElementById('search');
let catergoy = document.getElementById('catergoy');
let ineer = document.getElementById('ineer');
let productList = [];

name.addEventListener('blur', function(e) {
    if (e.target.value === '') {
        e.target.className = 'error';
    } else {
        e.target.className = '';
    }
});
price.addEventListener('blur', function(e) {
    if (e.target.value === '') {
        e.target.className = 'error';
    } else {
        e.target.className = '';
    }
});
desc.addEventListener('blur', function(e) {
    if (e.target.value === '') {
        e.target.className = 'error';
    } else {
        e.target.className = '';
    }
});

add.addEventListener('click', function() {
    if (add.innerText == 'Add') {
        addNewProduct();
    } else {
        addUpdateProduct();
    }
});

search.addEventListener('keyup', function(e) {
    searchProduct(e);
});

search.addEventListener('blur', function(e) {
    if (e.target.value == '') {
        shoqProducts();
    }
});

catergoy.addEventListener('change', function(e) {
    searchByCatergy(e);
});

function addNewProduct() {
    let product = {
        name: '',
        price: '',
        cat: '',
        desc: '',
    };
    if (name.value == '') {
        name.className = 'error';
    } else {
        name.className = '';
    }
    if (price.value == '') {
        price.className = 'error';
    } else {
        price.className = '';
    }
    if (desc.value == '') {
        desc.className = 'error';
    } else {
        desc.className = '';
    }
    if (name.value !== '' && price.value !== '' && desc.value !== '') {
        product.name = name.value;
        product.price = price.value;
        product.cat = cat.value;
        product.desc = desc.value;
        productList.push(product);
        shoqProducts();
        clearAll();
    }
}

function shoqProducts() {
    let cartona = ``;
    for (let i = 0; i < productList.length; i++) {
        cartona += `
        <tr>
            <td>${productList[i].name}</td>
            <td>${productList[i].price}$</td>
            <td>${productList[i].desc}</td>
            <td>${productList[i].cat}</td>
            <td>
                <button class="update" onclick='updateProduct(${i})'>Update</button>
            </td>
            <td>
                <button class="delete" onclick='deleteProduct(${i})'>Delete</button>
            </td>
        </tr>
        `;
    }
    ineer.innerHTML = cartona;
}

function clearAll() {
    name.value = '';
    price.value = '';
    desc.value = '';
}

function deleteProduct(e) {
    productList = productList.filter((product, index) => index !== e);
    shoqProducts();
}

function updateProduct(e) {
    let find = productList.filter((product, index) => index === e);
    name.value = find[0].name;
    price.value = find[0].price;
    desc.value = find[0].desc;
    cat.value = find[0].cat;
    add.innerText = 'Update';
    productList = productList.filter((product, index) => index !== e);
}

function addUpdateProduct() {
    let product = {
        name: '',
        price: '',
        cat: '',
        desc: '',
    };
    if (name.value == '') {
        name.className = 'error';
    } else {
        name.className = '';
    }
    if (price.value == '') {
        price.className = 'error';
    } else {
        price.className = '';
    }
    if (desc.value == '') {
        desc.className = 'error';
    } else {
        desc.className = '';
    }
    if (name.value !== '' && price.value !== '' && desc.value !== '') {
        product.name = name.value;
        product.price = price.value;
        product.cat = cat.value;
        product.desc = desc.value;
        productList.push(product);
        shoqProducts();
        clearAll();
        add.innerText = 'Add';
    }
}

function searchProduct(e) {
    let find = [];
    let cartona = ``;
    if (e.target.value == '') {
        shoqProducts();
    } else {
        find = productList.filter((product) =>
            product.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        for (let i = 0; i < find.length; i++) {
            cartona += `
        <tr>
            <td>${find[i].name}</td>
            <td>${find[i].price}$</td>
            <td>${find[i].desc}</td>
            <td>${find[i].cat}</td>
            <td>
                <button class="update" onclick='updateProduct(${i})'>Update</button>
            </td>
            <td>
                <button class="delete" onclick='deleteProduct(${i})'>Delete</button>
            </td>
        </tr>
        `;
        }
        ineer.innerHTML = cartona;
    }
    console.log(e.target.value);
}

function searchByCatergy(e) {
    let cartona = ``;
    let find = [];
    if (e.target.value == 'all') {
        shoqProducts();
    } else {
        find = productList.filter((product) => product.cat == e.target.value);
        for (let i = 0; i < find.length; i++) {
            cartona += `
        <tr>
            <td>${find[i].name}</td>
            <td>${find[i].price}$</td>
            <td>${find[i].desc}</td>
            <td>${find[i].cat}</td>
            <td>
                <button class="update" onclick='updateProduct(${i})'>Update</button>
            </td>
            <td>
                <button class="delete" onclick='deleteProduct(${i})'>Delete</button>
            </td>
        </tr>
        `;
        }
        ineer.innerHTML = cartona;
    }
}