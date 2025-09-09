let main = document.querySelector("main");
let user = document.querySelector(".user");
let post = document.querySelector(".post");
let loader = document.querySelector(".loader");

async function getdata(){
   loader.style.display = "flex";
   try{
      let res = await fetch('https://jsonplaceholder.typicode.com/users')
      let data = await res.json()
      main.innerHTML = data.map(item => {
      return `<div class="content">
         <h3>${item.name}</h3>
      </div>`;
      }).join('');
   }catch(error){
   console.log('error' + error);
   } finally{
      loader.style.display = "none";
   }
}

getdata();

async function getDataPosts(){
   loader.style.display = "flex";
   try{
      let res = await fetch('https://jsonplaceholder.typicode.com/posts')
      let data = await res.json()
      main.innerHTML = data.map(item => {
      return `<div class="content">
         <h3>${item.title}</h3>
      </div>`;
      }).join('');
   }catch(error){
    console.log('error' + error);
   } finally{
      loader.style.display = "none";
   }
}
async function getDataUsers(){
   loader.style.display = "flex";
   try {
      let res = await fetch('https://jsonplaceholder.typicode.com/users')
      let data = await res.json()
      main.innerHTML = data.map(item => {
      return `<div class="content">
                <h3>${item.name}</h3>
             </div>`;
      }).join('');
   } catch (error) {
      concole.log('error' + error);
   } finally{
      loader.style.display = "none";
   }
}


post.addEventListener('click', getDataPosts);
user.addEventListener('click', getDataUsers);









