
var connection = require('./connection.js');


var orm = {
  selectAll: function (callback) {
    connection.query('SELECT * FROM burgers', function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  insertOne: function (burger_name, callback) {
    connection.query('INSERT INTO burgers SET ?', {
      burger_name: burger_name,
      // devour: false,
    }, function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  updateOne: function (id, callback) {
    connection.query('UPDATE burgers SET ? WHERE ?',
      [{ devour: true }, { id: id }], function (err, result) {
        if (err) throw err;
        callback(result);
      });
  }
};
// Export the ORM object in module.exports.
module.exports = orm;