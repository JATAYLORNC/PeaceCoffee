module.exports = function(sequelize, DataTypes) {
 //define the suppliers data model
 var supplier = sequelize.define("supplier", {
    
    supplier_business_name: {
		type: DataTypes.STRING,
        validate: {
        len: [1, 100]
        }  
    },

    contact_first_name: {
		type: DataTypes.STRING,
        validate: {
        len: [1, 50]
        }  
    },

    contact_last_name: {
		type: DataTypes.STRING,
        validate: {
        len: [1, 50]
        }  
    },

    street_address: {
		type: DataTypes.STRING,
        validate: {
        len: [1, 100]
        }  
    },

    city: {
		type: DataTypes.STRING,
        validate: {
        len: [1, 50]
        }  
    },

    state: {
		type: DataTypes.STRING,
        validate: {
        len: [1, 2]
        }  
    },

    zip: {
		type: DataTypes.STRING,
        validate: {
        len: [1, 8]
        }  
    },

    business_phone: {
		type: DataTypes.STRING,
        validate: {
        len: [1, 15]
        }  
    },

    fax_number: {
		type: DataTypes.STRING,
        validate: {
        len: [1, 15]
        }  
    },

},{

timestamps: false
});


supplier.associate = function(models) {
    
    supplier.belongsTo(models.products, {
      foreignKey: {
      allowNull: false
      }
    }),
    supplier.belongsTo(models.User, {
        foreignKey: {
        allowNull: false
        }
      })

  };

  return supplier;
};
