async function getData() {
    return await axios.get('http://the19am.com/uph/json/?p=restaurant');
}

$('#menu').ready(async function () {
    let datas = await getData();
    console.log(datas)
    datas.data.forEach((data, idx) => {
        if (idx == 1) {
            $(`#menu`).append(`
                <div class="col-4 p-4 text-center" style="color: #808f87">
                    <img class="w-100" src="img/makanan/gambar${idx}.jpg" style="border: 1px solid red">
                    <h6 class="font-thin pt-3">${data.nama_produk}</h6>
                    <div class="mx-auto" style="border-top: 1px solid #808f87; width: 150px; height: 20px"></div>
                    <p style="font-size: 12px">${data.desc}</p>
                    <h5 class="font-thin">
                        <del>${data.price}</del>&nbsp${data.price*9/10}
                    </h5>
                </div>
            `)
        } else {
            $(`#menu`).append(`
                <div class="col-4 p-4 text-center" style="color: #808f87">
                    <img class="w-100" src="img/makanan/gambar${idx}.jpg">
                    <h6 class="font-thin pt-3">${data.nama_produk}</h6>
                    <div class="mx-auto" style="border-top: 1px solid #808f87; width: 150px; height: 20px"></div>
                    <p style="font-size: 12px">${data.desc}</p>
                    <h5 class="font-thin">
                       ${data.price}
                    </h5>
                </div>
            `)
        }

    })
})

$('#sale').ready(async function () {
    let datas = await getData();
    console.log(datas)
    datas.data.forEach((data, idx) => {
        if (idx < 4) {
            $('#sale').append(`
                <div class="card card-rounded shadow-sm m-0 mx-2">
                    <img class="card-img-top  w-75 mt-3 ml-4" src="asset/prd-pic.jpg" alt="Card image cap">
                    <div class="card-body">
                        ${data.nama_produk}<br><br>
                        <span class="prd-price">Rp. ${data.price*9/10}</span>
                    </div>
                </div>
            `)
        }

    })
})