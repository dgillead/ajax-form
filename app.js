$(function() {
  $("#formData").submit(function(e) {

    let url = "http://putsreq.com/Ly0tytjC8430Q0p7Kria";
    let password = $("#pwd").val();
    let confirmPwd = $("#confirmPwd").val();

    if (password === confirmPwd) {
      $.ajax({
             type: "POST",
             url: url,
             data: $("#formData").serialize(),
             success: function(data)
             {
                 $("#formData")[0].reset();
                 window.alert("Thank You!");
             }
           });
    } else {
      alert("Passwords do not match, please try again.")
    }
  e.preventDefault();
  });
});
