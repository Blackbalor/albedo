var Roles = require("../../models/roleSchema");
var ObjectID = require('mongodb').ObjectID;


exports.addRoles = (req, res, next) => {
  var rolesInfo = req.body;
//   var userId = rolesInfo.UserId;
//   var token = rolesInfo.Token;

  var newRoles = new Roles({
    Role_Id: new ObjectID(),
    Role_Name: rolesInfo.rolename,
    Main_menu: "Not Specified",
    UI_access: rolesInfo.uiAccess,
    SystemAdmin: false,
    APSMaster: false,
    APSDataScreen: false,
    status: 1,
  });

  newRoles.save(function (err, Roles) {
    if (err) res.json({ message: "Error", status: 1 });
    else res.json({ message: "Roles added successfully", status: 0 });
  });
};