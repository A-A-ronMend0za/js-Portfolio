var emailIcon = $("#email");

emailIcon.click(function () {
  navigator.clipboard.writeText("aaronmendoza.denver@gmail.com");
  alert("email copied to clipboard");
});
