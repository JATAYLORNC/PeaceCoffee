module.exports = function(sequelize, DataTypes) {
 //define the products data model
 var products = sequelize.define("products", {
    product_name: {
		type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1, 100]
        }  
    },

    pounds: {
		type: DataTypes.INTEGER,
		allowNull: false
    },
    
    price_per_pound: {
		type: DataTypes.DECIMAL(5,2),
		allowNull: false
    },
    
    scheduled_reorder_date: {
		type: DataTypes.DATE,
    }
},{

timestamps: false
});

products.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    products.hasMany(models.supplier, {
      onDelete: "cascade"
    }),
    products.hasMany(models.order_summary, {
      onDelete: "cascade"
    }), 
    products.belongsTo(models.members, {
      foreignKey: {
      allowNull: false
      }
    })
  };

    return products;
};
