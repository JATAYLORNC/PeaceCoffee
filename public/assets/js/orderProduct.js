$(document).ready(function() {
  
  console.log("javascript file link is correct");

  // When the signup button is clicked, we validate the email and password are not blank
  $("#order-button").on("submit", function(event) {

    alert("button reference is correct");

    event.preventDefault();

    alert("page did not reload");
    
    var UserId = $(this).data("id");

    var orderData = {
      UserId: UserId
    };
  
    var productId=[];
    var productOrderData = {};

    $('th').each(function(product){
      var id = $(product).data('pid');

      if(id) {
        productId.push(id);
      }
    });

    for(i=0; i=productId.length; i++) {

      var poundOrdered = $("#p" + i).val();

      if(poundOrdered != null) {

        productOrderData[i] = {
          productId: i, 
          pounds: poundOrdered    
        }

      }

      orderData.productData = productOrderData;
    }

    placeOrder(orderData);

  })

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function placeOrder(orderData) {
    $.post("/api/order", userData)
    .then(function(data) {

      window.location.replace(data);
      // If there's an error, handle it by throwing up a bootstrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
