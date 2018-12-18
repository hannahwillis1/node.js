var mysql = require("mysql");
var prompt = require("prompt");


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hannahmysql1",
  database: "Bamazon"
});

var productChosen = parseInt(result.IDitem);
var productQuantity = parseInt(result.IDqty);


connection.connect(function(err) {
  if (err) {
    console.log("Error");
    return;
  }};

  var startBamBam = function() {
    connection.query("SELECT * FROM Products", function(err, result) {
      if (err) throw err;
      return bamProducts(result);
      
    });
    startBamBam();
  };

  var bambam = {
    properties: {
      IDitem: {
        message: "Search by product ID.",
        pattern: /^[0-9][0-9]$|^[0-9]$/,
        required: true
      },
      IDqty: {
        message: "Please enter purchase quantity",
        pattern: /^[0-9][0-9]$|^[0-9][0-9][0-9]$/,
        required: true
      }
    }
  };


var bamProducts = function(products) {
    console.log("Welcome! Shop Bamazon products here by id.");
    for (var i = 0; i < products.length; i++) {
      var searchResults =
        "item_id: " +
        products[i].item_id +
        "Name: " +
        products[i].product_name +
        "Department: " +
        products[i].department_name +
        "Price: $ " +
        products[i].price +
        "Quantity left in Stock: " +
        products[i].stock_quantity;
      console.log(searchResults);
    }
    productSelection();
  };

 
var productSelection = function() {
    prompt.start();
    console.log("Search by product item id.");

    prompt.get(bambam, function(err, result) {
      if (err) {
        console.log(err);
      }
    }
};
      

     
      var inventoryUpdate = function() {
        connection.query(
          "SELECT * FROM Products WHERE ItemID =" + productChosen,
          function(err, result) {
            if (err) throw err;
            inventoryUpdate();
 
           
            var purchaseQuantity = productQuantity;
            var productStock = result[0].stock_quantity;
            var priceProduct = result[0].price;
            var stockQuantity = productStock - purchaseQuantity;
            var productTotal = priceProduct * purchaseQuantity;

            if (purchaseQuantity > productStock || productStock === 0) {
              console.log(
                "Your order cannot be fulfilled."             );
              productIDchosen();
            } else {
              console.log(
                "Yay! You can buy up to " +
                  result[0].stock_quantity +
                  " of " +
                  result[0].product_name
              );
              console.log(
                "You have " +
                  purchaseQuantity +
                  " " +
                  result[0].product_name +
                  "s at $" +
                  result[0].price +
                  " per item."
              );
              console.log("Your total is $" + productTotal);
            

              connection.query(
                "UPDATE Products SET stock_quantity = " +
                  stockQuantity +
                  " WHERE item_id =" +
                  productChosen,
                function(err, result) {
                  if (err) throw err;
                  connection.query(
                    "SELECT item_id, product_name, department_name, price, stock_quantity FROM products WHERE item_id =" +
                      productChosen,
                    function(err, result) {
                      console.log(result);
                    }})
               
     
var stopBamBam = function() {
    return next(err);
              }