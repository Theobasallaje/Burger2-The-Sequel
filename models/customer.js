module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
      // Giving the Customer model a name of type STRING
      name: DataTypes.STRING
    });
  
    // Customer.associate = function(models) {
    //   // Associating Customer with Burgers
    //   // When an Customer is deleted
    //   Customer.hasOne(models.Burger)
    // };
  
    return Customer;
  };
  