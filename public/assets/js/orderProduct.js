$(document).ready(function() {

  // When the signup button is clicked, we validate the email and password are not blank
  $("#order-button").on("click", function(event) {

    event.preventDefault();
    
    var UserId = $(this).data("id");

    var orderData = {
      UserId: UserId
    };
  
    var productId=[];
    var productOrderData = {};

    $('tr').each(function(product){

      var id = $(this).attr("data-pid");

      if(id) {
        productId.push(id);
      }
    });

    for(i=0; i<productId.length; i++) {

      var poundReference = i+1
      poundReference = "p" + poundReference;

      var priceReference = i+1
      priceReference = "price" + priceReference

      var productId = i+1;

      var poundOrdered = $("#" + poundReference).val();

      var price = $("#" + priceReference).text();

      if(poundOrdered != null) {

        productOrderData[i] = {
          productId: productId, 
          price: price,
          pounds: poundOrdered    
        }

      console.log(productOrderData);

      }

      orderData.productData = productOrderData;
    }

    console.log(orderData);
    

    placeOrder(orderData);

  })

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function placeOrder(orderData) {

    $.post("/api/order",orderData)
    .then(function(data) {

      // If there's an error, handle it by throwing up a bootstrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
