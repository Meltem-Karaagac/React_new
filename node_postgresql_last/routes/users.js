// var express = require("express");
// var router = express.Router();
// const usersController = require("../controllers/usersController");

// /*  /users */

// router.get("/", usersController.get_users);

// router.get("/add", usersController.show_add_user_form);
// router.post("/add", usersController.add_user);

// router.get("/:id/delete", usersController.delete_user);

// module.exports = router;
var express = require("express");
var router = express.Router();
const usersController = require("../controllers/usersController");
/*  /users */
router.get("/", usersController.get_users);
router.get("/add", usersController.show_add_user_form);
router.post("/add", usersController.add_user);
router.get("/:id/delete", usersController.delete_user);
router.get("/:id/edit", usersController.get_user);
router.post("/:id/edit", usersController.edit_user);
module.exports = router;