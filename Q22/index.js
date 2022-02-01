function afterSubmit(event){
   const txtCon = document.getElementById("txtRes");

   txtCon.innerText = "Form Submited Succesfully!!";

   event.preventDefault();

}
