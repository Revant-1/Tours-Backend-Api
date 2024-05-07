import express from "express"
import { getUser, getUsers, updateUser, deleteUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verfiyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req,res,next)=>{
    res.send("hellouser you are looged in")
})


router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
    res.send("hellouser you are looged in and you can delete your account ")
})

router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
    res.send("hello admin you are looged in and you can delete all accounts ")
})

//UPDATE
router.put("/:id",verifyUser ,updateUser)

//DELETE
router.delete("/:id",verifyUser,deleteUser)

//GET
router.get("/:id",verifyUser,getUser )
  
//GET ALL
router.get("/",verifyAdmin, getUsers )


export default router