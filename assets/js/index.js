"use strict"



// async function getData() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/comments");
//     const datas = await response.json();
//     let str = "";
//     let tBody = document.querySelector("tbody")
//     datas.forEach(data => {
//         str +=
//             `<tr>
//             <td>${data.id}</td>
//             <td>${data.name}</td>
//             <td>${data.email}</td>
//         </tr>`


//         tBody.innerHTML = str;

//     });

// }


//getData();

async function getFullData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const datas = await response.json();
    let str = "";
    let tBody = document.querySelector("tbody")
    datas.forEach(data => {
        str +=
            `<tr>
            <td>${data.userId}</td>
            <td>${data.id}</td>
            <td>${data.title}</td>
            <td>${data.body}</td>
           </tr>`

        tBody.innerHTML = str;

    });

   
}

getFullData();
