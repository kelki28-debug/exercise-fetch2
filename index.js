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
        let img = document.createElement('img');
        console.log(flag.flag)
        img.setAttribute('src', flag.flag);
        li.appendChild(img);
        ul.appendChild(li)

    })
}))
