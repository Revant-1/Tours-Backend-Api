import express, { Router } from "express"
// import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js";
import { countByCity, createHotel, deleteHotel, getHotel, getHotels, updateHotel, countByType, getHotelRooms } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verfiyToken.js";

const router = express.Router();

//CREATE
router.post("/",verifyAdmin, createHotel)

//UPDATE
router.put("/:id",verifyAdmin, updateHotel)


//DELETE
router.delete("/:id",verifyAdmin, deleteHotel)

//GET
router.get("/find/:id",getHotel )
  
//GET ALL
router.get("/",getHotels )

router.get("/countByCity", countByCity);

router.get("/countByType", countByType);

router.get("/room/:id", getHotelRooms);

export default router