let todo=document.getElementById("info");
let tasklist=document.getElementById("tasklist");
 function add()
{
    tasklist.innerHTML=tasklist.innerHTML+`
    <div class="new">
       ${todo.value}
       <button class="del"><i class="fa fa-trash"></i></button>
    </div>`
    let tasks=document.getElementsByClassName("del");
    for(i=0;i<tasks.length;i++)
    {
        tasks[i].onclick=function (){
            console.log(this)
            console.log(this.parentNode)
            this.parentNode.remove()
        }
    }
    todo.value=""
}