$(function() {
  $("#formData").submit(function(e) {

    let url = "http://putsreq.com/Ly0tytjC8430Q0p7Kria";

    $.ajax({
           type: "POST",
           url: url,
           data: $("#formData").serialize(),
           success: function(data)
           {
               alert(data);
           }
         });

    e.preventDefault();
  });
});
