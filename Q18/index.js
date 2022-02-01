const btn = $(".btnCon");
const body = $("body");

btn.click((e) => {
  const btnVal = $(event.target).attr('class');
  console.log($(event.target).attr('class'));

  body.css("background-color", btnVal);
});
