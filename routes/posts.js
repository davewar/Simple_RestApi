const express = require('express')
const router = express.Router()

const Post = require('../models/Posts')


// postman.com//

// all
router.get("/", async (req, res)=>{

    try{

        const posts = await Post.find({})
            res.json({posts})


    }
    catch (err){

         res.json({message: err})

    }


    res.send("post page ...")
})

//add
router.post("/", async (req, res)=>{
    //   console.log(req.body);

        const post = new Post({
            title: req.body.title,
            desc:  req.body.desc
        })

try{
    const savedPost = await post.save()  
   
    res.json(savedPost)

} catch(err){
        console.log("err dw", err);
        res.json({message: err})
    }



})

//get by id
router.get("/:id", async (req, res)=>{
    // console.log(req.params);
    try{

             const post =  await Post.findById(req.params.id)
            res.json(post)
    }
    catch (err){
        console.log(err);
         res.json({message: err})

    }
   

})

//delete
router.delete("/:id", async (req, res)=>{
        try{

             const post = await Post.deleteOne({'_id': req.params.id })
            res.json({message: "deleted" })
    }
    catch (err){
        console.log(err);
         res.json({message: err})

    }
   
})    

// amend
router.patch("/:id", async (req, res)=>{
        try{

             const updatedpost = await Post.updateOne({'_id': req.params.id }, {$set:{title: req.body.title}})
            res.json({updatedpost })
    }
    catch (err){
        console.log(err);
         res.json({message: err})

    }
   
})    

module.exports = router