// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  //

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      // devour: $("#ca").val().trim(),
      // sleepy: $("[name=sleepy]:checked").val().trim()
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
      
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

//   $(".devour-burger").on("click", function(event) {
// {/* <form action="/action_page.php">
// First name: <input type="text" name="FirstName" value="Mickey"><br>
// Last name: <input type="text" name="LastName" value="Mouse"><br>
// <input type="submit" value="Submit">
// </form>

// <p>Click the "Submit" button and the form-data will be sent to a page on the server called "/action_page.php".</p> */}

//         var id = $(this).data("id");
  

  //   $(".delete-cat").on("click", function(event) {
  //     var id = $(this).data("id");

  //     // Send the DELETE request.
  //     $.ajax("/api/cats/" + id, {
  //       type: "DELETE"
  //     }).then(
  //       function() {
  //         console.log("deleted cat", id);
  //         // Reload the page to get the updated list
  //         location.reload();
  //       }
  //     );
  //   });
});
