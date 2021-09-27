const express = require('express')
const router = express.Router()
const {Post} = require('../models/post')
const mongoose = require('mongoose')

router.get('/', async (req, res)=>{
    const postList = await Post.find()

    if(!postList) return res.json({success: false})
    res.send(postList)
})

router.get('/:id', async (req, res)=>{
   
    const post = await Post.findById(req.params.id)

    if(!post) return res.json({success: false})
    res.send(post)
})

router.post('/', async (req, res)=>{
    let newPost = new Post({
        name: req.body.name,
        count: req.body.count
    })

    newPost = await newPost.save()
    if(!newPost) {
        return res.json({success: false})
    }
    res.send(newPost)
})


router.delete('/:id', async (req, res)=>{
    const post = await Post.findByIdAndDelete(req.params.id)
    if(!post) return res.send({success: false})
    res.send(post)
})

router.put('/:id', async (req, res)=>{
    const post = await Post.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        count: req.body.count
    },
    {new:true})

    if(!post) return res.json({success: false})
    res.send(post)
})

module.exports = router