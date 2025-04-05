const express=require("express");
const router=express.Router();
const {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}=require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);

//get- get all contact
//post-create contact
router.route("/").get(getContacts).post(createContact);

//get-get a contact
//put-update contact
//delete a contact
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports=router;