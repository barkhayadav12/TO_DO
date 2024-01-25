document.querySelector(".btn").onclick=function(){
    if(document.querySelector(".input").value.length==0){
        alert("Please add a task!")
    }
    else{
        document.querySelector(".content").innerHTML+=
        `
        <div class="task">
        <span id="taskname">${document.querySelector(".input").value}</span>
        <button id="delete">
        <i class="far fa-trash-alt"></i>
        </button></div>`;

        let currentTask=document.querySelectorAll("#delete");
        for(let i=0; i<currentTask.length; i++){
            currentTask[i].onclick=function(){
                this.parentNode.remove();
            }  
    }
   let task=document.querySelectorAll(".task");
   for(let i=0;i<task.length;i++){
    task[i].onclick=function(){
        this.classList.toggle("completed");
    }
   }
   document.querySelector(".input").value="";


    }
}