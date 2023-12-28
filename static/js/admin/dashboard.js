// ACCORDION
const feature = new DataCall()
document.querySelectorAll(`.accordion-content`).forEach((item, index) =>{
    let header = item.querySelector(".ahead");
    header.addEventListener("click", () => {
        item.classList.toggle("open");
        let description = item.querySelector(".adata");
        let darr= item.querySelector(`.arrow-down`);
        if(item.classList.contains("open")){
            // description.style.height = `${description.scrollHeight}px`;
            description.classList.add(`open`);
            darr.classList.add(`open`);    
        }else{
            // description.style.height = "0px";
            description.classList.remove(`open`);
            darr.classList.remove(`open`);
        }
        removeOpen(index);
    })
})
function removeOpen(index1){
    document.querySelectorAll(`.accordion-content`).forEach((item2, index2) => {
        if (index1 != index2) {
            item2.classList.remove ("open");
            let des = item2.querySelector(".adata");
            des.classList.remove(`open`);
            let arr=item2.querySelector(`.arrow-down`);
            arr.classList.remove(`open`);
        }
    })
}

// EMPLOYEE ACCORDION
document.querySelectorAll(`.assign-to`).forEach((item, index) =>{
    let header = item.querySelector(".eaccordion");
    header.addEventListener("click", async () => {
        console.log(item.dataset)
        const renderId = item.querySelector('#emp-in-np')
        renderId.innerHTML = ''
        const empNp = await feature.GET_POST(`apiv1/employee/${item.dataset.ndealid}/${item.dataset.taskid}`, 'GET');
        empNp.forEach((item) =>{
            const html = `<li class="add-empl"><div style="display:flex; gap:4rem"><span>${item.name}</span> <span style="color: red;" data-ndealid=${item.ndeal_id} data-catid=${item.category_id} data-emid=${item.em_id} onclick="removeEmpNp(this)">remove-</span></div></li>`
            renderId.innerHTML += html
        })
        item.classList.toggle("open");
        let description = item.querySelector(".emp-acc-data");
        let arr = item.querySelector(`.right-arr`);
        if(item.classList.contains("open")){
            // description.style.height = `${description.scrollHeight}px`;
            description.classList.add(`open`);
            arr.classList.add(`open`);    
        }else{
            // description.style.height = "0px";
            description.classList.remove(`open`);
            arr.classList.remove(`open`);
        }
     
    })
})

function closeSubBox() {
    const mainDrop = document.querySelector('.main-dropdown')
    mainDrop.classList.remove('active')  
}


addNewSubtasks = async (param, e)=>{
  e.preventDefault();
  const target = param.dataset
  const addSubtaskNp = new FormData(document.getElementById('all-subtask'));
  console.log(target)
  addSubtaskNp.append('ndeal_id',  Number(target.ndeal_id));
  addSubtaskNp.append('category_id', Number(target.category_id));
  feature.GET_POST('apiv1/addsubtaskto-nproject', 'POST', addSubtaskNp, 'form')
  closeSubBox()
}


addNewEmp = async (param, e) => {
  const exdata = {taskName: "architechture", project: "Hospital Work", assignDate: "20/02/2023" }
  await feature.addNewItemToNp(param, e, 'all-emp', ['ndeal_id', 'category_id'], 'apiv1/add-employee-to-project', closeSubBox, exdata)
}

async function addTaskStatus(target) {
    const dataSet = target.parentNode.dataset
    const body = {status: target.value, dealId: Number(dataSet.ndealid), catId: Number(dataSet.taskid)}
    await feature.DEL_UPD('apiv1/update-task-status', "PUT", body)
}

async function removeEmpNp(data){
   const dataSet = data.dataset;
   const date = new Date().toDateString();
   await feature.DEL_UPD(`apiv1/removeempnp?dealId=${Number(dataSet.ndealid)}&catId=${Number(dataSet.catid)}&emid=${Number(dataSet.emid)}&removeDate=${date}`, 'DELETE');
}



