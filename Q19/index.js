function afterSubmit(event) {
  event.preventDefault();

  const txtCon = document.getElementById("txtRes");

  const pwd = $(".pwd").val();
  const conPwd = $(".conPwd").val();

  console.log(pwd, conPwd);

  if (pwd === conPwd) {
    txtCon.innerText = "Password Matched";
    txtCon.style.color = "green";
  } else {
    txtCon.innerText = "Both the passwords are different";
    txtCon.style.color = "red";
  }

}
