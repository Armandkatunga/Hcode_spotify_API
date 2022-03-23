const Task = require('../models/index')
const getAllTasks =async (req, res)=> {

    try{
      const tasks = await Task.find({})
      res.status(200).json({tasks})
    }catch(error){
        res.status(500).json({msg:error})

    }

    
}

const createTasks = async (req,res)=>{
    try{
    const task = await Task.create(req.body)
    res.status(201).json({task})
    }catch (error){
        res.status(500).json({msg:error})
    }
}

const getTasks = async (req,res)=>{

    try{
        const {id:taskID} = req.params
        const taskes = await Task.findOne({_id:taskID});
        if(!taskes){
            return res.status(404).json({msg:`No item can not move ${taskID}`})
        }
        res.status(200).json({taskes})

    }catch (error){
        res.status(500).json({msg:error})

    }

    
}

const updateTasks = async (req,res)=>{
    try{
        const {id:taskID} = req.params;
        const task = await Task.findByIdAndUpdate({_id:taskID},req.body,{
            new: true,
            runValidators: true
        })
        if(!task){
            return res.status(404).json({msg:`o item can not move: ${taskID}`})
        }

    res.status(200).json({})
    }catch (error){
        res.status(500).json({msg:error})

    }

   
}

const deleteTasks = async (req,res)=>{
    try{
        const {id:taskID} = req.params;
        const taskes = await Task.findOneAndDelete({_id:taskID});
        if(!taskes){
            return res.status(404).json({msg:`o item can not move {taskID}`})
        }
        res.status(200).json({taskes})

    }catch (error){
        res.status(500).json({msg:error})

    }
}
module.exports = {

    getAllTasks,createTasks,getTasks,updateTasks,deleteTasks
}