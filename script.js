
let sentBtn = document.querySelector('.sentBtn') 
let user = {} 
let userList=[] 

sentBtn.addEventListener('click', function () { 
   let name = document.querySelector('.name') 
   let phone = document.querySelector('.phone') 
   let job = document.querySelector('.job') 

   user.name = name.value 
   user.phone = phone.value 
   user.job = job.value 
   console.log(user);
   localStorage.setItem('list' ,JSON.stringify(user) )
  //  userList = JSON.parse(localStorage.getItem('list')) 
  //  userList.push(user) 
  //  localStorage.setItem('list',JSON.stringify(userList))
}) 
let showBtn = document.querySelector('#showBtn') 
 
showBtn.addEventListener('click', function () { 
   let listFromDataBase = JSON.parse(localStorage.getItem('list')) 
   let info = document.querySelector('.info') 
   console.log(listFromDataBase);
   info.innerHTML = '' 
   for (let key in listFromDataBase) { 
      info.insertAdjacentHTML('afterbegin', `<h1>${listFromDataBase[key]}</h1>`) 
   } 
})
// let info = JSON.stringify(userList)
// localStorage.setItem('info', userList) 
// localStorage.getItem('info', userList)

//  localStorage.setItem('name.value' , user )

info.filter(function(item){
   if(item.age < 18){
       return(item.name);
   }
})