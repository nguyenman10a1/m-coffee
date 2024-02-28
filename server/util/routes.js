const Router = require("express");
const orders = require("@controllers/ordersController");
const users = require("@controllers/usersController");

const router = Router();

router.get("/orders", orders.getAll);
router.post("/orders", orders.create);
router.delete("/orders/:id", orders.destroy);
router.get("/orders/:id", orders.getOne);
router.get("/orders/:id/read", orders.read);
router.put("/orders/:id/update", orders.update);

router.get("/users", users.getAll);
router.get("/users/:id", users.getUser);

module.exports = router;
