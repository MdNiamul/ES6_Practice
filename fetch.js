// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json())
// .then((json) => console.log(json));


// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json())
// .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json())
// .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json())
// .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.jason())
// .then(data => {
//     console.log(data)
// })

// const handleloadData = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then (data => {
//         console.log(data)
//     })
// }

// const LoadUser = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         displayUser(data)
//     })
// }

// const displayUser = (users) => {
//     for(let i=0; i<users.length; i++){
//         const user = user[i]
//         console.log(user)
        
//     }
//     // console.log(users[0])
// }

// const displayUser = (users) => {
//     for(user of users)
//         console.log(users)
        
//     }
    // console.log(users[0])

    // const loadShowUser = () => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(res => res.json())
    //     .then(data => {
    //         // console.log(data)
    //         ShowUser(data)
    //     })
    // }

    // const ShowUser = (users) => {

    //     const  userContainer = document.getElementById('users');
    //     for(const user of users ){
    //         console.log(user.name)
    //        const li = document.createElement("li");
    //        li.innerText = user.name;
    //        userContainer.appendChild(li);
    //     }
    // }

    // const loadName = () => {
    //     fetch("")
    //     .then(res => res.json())
    //     .then(data => {
    //     })
    // }

    // const nameContainer = document.getElementById('users')
    

   // ***************/ ApI theek call korar jonne system and and name  ***************/

// const loadName =()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         showUser(data)
//     })
// }

// const showUser = (users) => {
//     const userContainer = document.getElementById('users');

//     for(const user of users){
//         console.log(user.name)
//         const li=document.createElement("li");
//         li.innerText = user.name;
//         userContainer.appendChild(li);
//     }
// }

// const loadName =()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => {
//         showUser(data)
//     })
// }

// const showUser =(users)=>{
//     const usercontent = document.getElementById('users');

//     for(const user of users){
//         console.log(user.name)
//         const li=document.createElement('li');
//         li.innerText=user.name;
//         usercontent.appendChild(li);
//     }
// }

// function LoadPost() {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(res => res.json())
//         .then(data => {
//             displayPost(data)
//         })
// }
 
// const displayPost=(posts)=>{
    
//     for(const post of posts){
//         console.log(post.title)
        
//     }
// }

const handlePost = () =>{
   fetch("https://jsonplaceholder.typicode.com/posts")
   .then(res=>res.json()) 
   .then(data => {
    displayPost(data)
   })
}

const displayPost = (posts) => {
    const postContainer = document.getElementById("postContainer");
    
    for(const post of posts){
        const div = document.createElement('div');
        div.innerHTML = `
        
        `
    }
}
handlePost()

