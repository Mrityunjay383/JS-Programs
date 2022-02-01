function afterSubmit(event) {
    event.preventDefault();

  const txtCon = document.getElementById("txtRes");

  const userName = $(".userName").val();
  const pwd = $(".pwd").val();

  console.log(userName, pwd);
  if(userName != "Mrityunjay"){
    txtCon.innerText = "Incorrect UserName";
    txtCon.style.color = "red";
  }else if(pwd != "banasthali"){
    txtCon.innerText = "Incorrect Password";
    txtCon.style.color = "red";
  }else{
    txtCon.innerText = "Login Succesfull!!";
    txtCon.style.color = "green";
  }

}
