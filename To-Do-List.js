const todolist=[{
    name:'make dinner',
    duedate:'2024-05-05'
},{
    name:'coding',
    duedate:'2024-05-05'
},{
    name:'walking',
    duedate:'2024-05-05'
}];
renderTodolist();

function renderTodolist(){
    let todolistHTML='';
todolist.forEach(function(todoobject,index){
    const {name , duedate} = todoobject;   //destructuring
    const html=`
        <div>${name}</div>
        <div> ${duedate}</div>
        <button onclick="
            todolist.splice(${index},1);
            renderTodolist();
        " class="delete-input">Delete</button>
    `;
    todolistHTML+=html;
})
// for(let i=0;i< todolist.length;i++){
//     const todoobject=todolist[i];
//     // const name=todooject.name;
//     // const duedate=todooject.duedate;
//     const {name , duedate} = todoobject;   //destructuring
//     const html=`
//         <div>${name}</div>
//         <div> ${duedate}</div>
//         <button onclick="
//             todolist.splice(${i},1);
//             renderTodolist();
//         " class="delete-input">Delete</button>
//     `;
//     todolistHTML+=html;
// }


document.querySelector('.js-div')
    .innerHTML=todolistHTML;
}

function addtodo(){
    const inputelement = document.querySelector('.js-input');
    const name=inputelement.value;

    const dateinputelement=document.querySelector('.js-date');
    const duedate=dateinputelement.value;

    todolist.push({name,duedate});
 

    inputelement.value=' ';
    renderTodolist();
}