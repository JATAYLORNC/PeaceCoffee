$(function() {

  // When the signup button is clicked, we validate the email and password are not blank
  $("#order-button").on("click", function(event) {

    event.preventDefault();
    
    var UserId = $(this).data("id");

    var orderData = {
      UserId: UserId
    };
  
    var productId=[];
    var productOrderData = {};

    console.log(productOrderData);

    $('tr').each(function(product){

      var id = $(this).attr("data-pid");

      if(id) {
        productId.push(id);
      }
    });

    console.log(productOrderData);


    for(let i=0; i<productId.length; i++) {

      var ref="#" + i;

      var pid = $(ref).attr('data-pid');

      poundReference = "#p" + pid;
      var poundOrdered = $(poundReference).val();

      priceReference = "#price" + pid;
      var price = $(priceReference).text();

      $(poundReference).val(0);

      // if(poundOrdered != null) {

        productOrderData[i] = {
          productId: pid, 
          price: price,
          pounds: poundOrdered    
        }
      // }
    }

      orderData.productData = productOrderData;
    

    placeOrder(orderData);

  })

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function placeOrder(orderData) {
    console.log(orderData);

    $.post("/api/order",orderData)
    .then(function(data) {

      window.location.replace("/members");

      // If there's an error, handle it by throwing up a bootstrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
