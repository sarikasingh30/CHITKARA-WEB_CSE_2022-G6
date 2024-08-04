const btn = document.querySelector('.btn');
const newtask = document.querySelector('.newtask');
const taskList = document.querySelector('.tasklist');

async function getTodos(){
    try{
        let {data}=await axios.get("/gettodos")
        data.forEach((el)=>{
            let li=document.createElement("li")
            li.innerHTML=`<span>${el.id} - ${el.name}</span>
            <div class="btnGroup">
                <button class="upBtn">↑</button>
                <button class="downBtn">↓</button>
                <button class="deleteBtn">❌</button>
            </div>
            `



            li.classList.add("item")
            taskList.appendChild(li)
        })
    }
    catch(err){
        console.log(err)
    }
}
getTodos()

// btn.addEventListener("click",(e)=>{
//     e.preventDefault()
//     try{
//         let taskName=newtask.value
//         axios.post("/addtodos",{


//         })
//     }catch(err){

//     }
// })