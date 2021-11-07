const makeurl = () => {
    
    const givenUrl = document.getElementById('urltext');
    const givenurltext = givenUrl.value;
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://${givenurltext}`;
    // fetch(url)
    // .then(response => response.json())
    // .then(data => display(data));
    const displayqr = display(url,givenUrl);
    
}

const display = (data,inputfield) => {
    const parentdiv = document.getElementById('image-container');
    parentdiv.innerHTML = '';
    const div = document.createElement('div');
    div.innerHTML = `
        <h3 class="text-success"> ${inputfield.value}</h3>
    `
    inputfield.value = '';
   
    const div2 = document.createElement('div');
    const img = document.createElement('img');
    img.src = data;
    div2.appendChild(img);
    parentdiv.appendChild(div);
    parentdiv.appendChild(div2);
}

const clearfield = () => {

    const area = document.getElementById('image-container');
    area.innerHTML = '';
}