let ul = document.querySelector('.list ul');


const endPoint = 'https://restcountries.eu/rest/v2/all';
const options = {
    method:'GET'
}

fetch(endPoint,options)
.then((response => response.json()))
.then((result =>{
    result.map(flag =>{
        let li = document.createElement('li');
        let p = document.createElement('p')
        let text = document.createTextNode(flag.name)
        let img = document.createElement('img');
        img.setAttribute('src', flag.flag);
        p.appendChild(text)
        li.appendChild(img);
        li.appendChild(p)
        ul.appendChild(li)

    })
}))
