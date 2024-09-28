// api/routes/pin.js
import Express from "express";
import { checkAuthorisation, validateToken } from "../middleware";
import { addNewPin, getPin, updateUserPin, deleteUserPin } from "../controller";

const PinRouter = new Express.Router();

// Create a new pin
PinRouter.post("/", validateToken, addNewPin);
// Update a pin
PinRouter.put("/:id", validateToken, checkAuthorisation, updateUserPin );
// Get a pin
PinRouter.get("/:id", validateToken, getPin);
// Delete a pin
PinRouter.delete("/:id", validateToken, checkAuthorisation, deleteUserPin);

export default PinRouter;