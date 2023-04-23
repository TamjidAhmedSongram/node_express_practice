import { Router } from "express";
const router = Router();
router.route("/").get((req,res)=>{
    res.status(200).json({message:"Got all the message"})
})
router.route("/:id").get((req,res)=>{
    res.status(200).json({message:`Got the message for ${req.params.id} id`})
})
router.route("/").post((req,res)=>{
    res.status(201).json({message:"Creating the message"})
})
router.route("/:id").put((req,res)=>{
    res.status(200).json({message:`Updated the message for ${req.params.id}`})
})
router.route("/:id").delete((req,res)=>{
    res.status(200).json({message:`Deleted the message for ${req.params.id}`})
})

export default router