// form 
function toggleForm(formId) {
<<<<<<< HEAD
  const forms = document.querySelectorAll('.formContainer > div');
  forms.forEach(form => {
    if (form.id === formId) {
      form.classList.remove('hide');
    } else {
      form.classList.add('hide');
    }
  });
}

async function advOpen(data) {
  const { ndealid, taskid } = data.dataset
  const maindropDown = document.querySelector(`.main-dropdown`);
  maindropDown.style.display = `block`;
  maindropDown.innerHTML = ""
  maindropDown.innerHTML = ` <div class="finance-dropdown common_dropdown">
    <form action="">
        <div class="flex">
            <p class="uppercase phead">Advance</p>
            <input type="text" name="amount_got" id="">
        </div>
        <div class="flex">
            <p class="uppercase phead">payment mode</p>
            <select name="" id="">
                <option value="cash">Cash</option>
                <option value="online">Online</option>
            </select>
        </div>
        <div class="flex">
            <p class="uppercase phead">payment status</p>
            <select name="" id="">
                <option value="cash">Received</option>
                <option value="online">Pending</option>
            </select>
        </div>
        <div class="flex">
            <p class="uppercase phead">Date of payment</p>
            <input type="text" name="dateofpay" id="" placeholder="dd/mm/yyyy">
        </div>
        <div class="drop-btn flex">
            <button type="button" class="uppercase" data-dealid=${ndealid}
                data-taskid=${taskid}
                onclick="updataAdvancePay(this, event)">update</button>
            <button type="button" class="uppercase">Cancel</button>
        </div>
    </form>
</div>`

}
function GetIncExp() {
=======
    const forms = document.querySelectorAll('.formContainer > div');
    forms.forEach(form => {
      if (form.id === formId) {
        form.classList.remove('hide');
      } else {
        form.classList.add('hide');
      }
    });
  }
  
 function openDick(){
  document.querySelector(`.main-dropdown`).style.display = `block`;
 }
 
 function GetIncExp() {
>>>>>>> 3d78fad61e066feded06ed172272fea63dc5e594
  let Ctn = document.getElementsByClassName('total_user_data')
  ReqHandler.GET(location.origin + '/admin/finance/get-income-expense').then((res) => {
    if (res.status) {
      Ctn[0].children[0].children[0].innerText = res.data[1][0].total_sum
      Ctn[1].children[0].children[0].innerText = res.data[0][0].cash_sum
      Ctn[2].children[0].children[0].innerText = res.data[0][0].online_sum
    }
  }).catch(err => { console.log('Error(fn-ExpsUpdate):', err); })
}
GetIncExp()