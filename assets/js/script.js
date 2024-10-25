var emailIcon = $("#email");

emailIcon.click(function () {
  navigator.clipboard.writeText("aaronmendoza.denver@gmail.com");
  alert("copied to clipboard");
});

var cert = $("#cert");

cert.hover();
