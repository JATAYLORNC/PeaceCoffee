$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var companyInput = $("#company");
  var lastNameInput = $("#lname");
  var firstNameInput = $("#fname");
  var phoneInput = $("#bphone");
  var faxInput = $("#fax");
  var addressInput = $("#address");
  var cityInput = $("#city");
  var stateInput = $("#state");
  var zipInput = $("#zip");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    var memberData = {
      company: companyInput.val().trim(),
      last_name: lastNameInput.val().trim(),
      first_name: firstNameInput.val().trim(),
      business_phone: phoneInput.val().trim(),
      fax_number: faxInput.val().trim(),
      address: addressInput.val().trim(),
      city: cityInput.val().trim(),
      state: stateInput.val().trim(),
      zip: zipInput.val().trim(),
    }

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, memberData);
    emailInput.val("");
    passwordInput.val("");

  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, memberData) {
    $.post("/api/signup", {
      email: email,
      password: password
    }).then(function(data) {

      postMemberData(memberData);

      window.location.replace(data);
      // If there's an error, handle it by throwing up a bootstrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});

function postMemberData(memberData) {
  $.post("/api/member", memberData).then(function(data) {
    
    // If there's an error, handle it by throwing up a bootstrap alert
  }).catch(handleLoginErr);
}
