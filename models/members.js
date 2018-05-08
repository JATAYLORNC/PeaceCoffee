

module.exports = function(sequelize, DataTypes) {
 //define the members data model
 var members = sequelize.define("members", {
    
    company: {
		type: DataTypes.STRING,
        validate: {
        len: [1, 100]
        }  
    },

    last_name: {
		type: DataTypes.STRING,
        validate: {
        len: [1, 50]
        }  
    },

    first_name: {
		type: DataTypes.STRING,
        validate: {
        len: [1, 50]
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

    address: {
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

    membership_start_date: {
		type: DataTypes.DATE
    },
    
    membership_paid_date: {
		type: DataTypes.DATE
    },

    membership_renewal_date: {
		type: DataTypes.DATE
    },

    membership_end_date: {
		type: DataTypes.DATE
    }
},{

timestamps: false
});


members.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    members.belongsTo(models.User, {
      foreignKey: {allowNull: false}
    }),
    members.hasMany(models.order_summary, {
        onDelete: "cascade"
      }),
    members.hasMany(models.products, {
    onDelete: "cascade"
    })
  };

  return members;
};
