import facilitatorModel from "../models/facilitatorModel.js";

const falitatorController ={
    createNewFacilitator : async(req,res)=>{
        try {
         const newFacilitator = await facilitatorModel.create(req.body)
         res.status(201).json({
            message:"facilitator created successfully!!!",
            facilitator:newFacilitator
         })

        } catch (error) {
            console.log(error.message)
            res.status(500).json({
                message:"Error creating facilitor"
            })
            
        }
    },
    getAllFacilitator : async (req,res)=>{
        try {
            const getFacilitator = await facilitatorModel.find()
            res.status(200).json({
            message:"facilitator retrieved successfully!!!",
            facilitator:getFacilitator
         }) 
        } catch (error) {
            console.log(error.message)
            res.status(500).json({
                message:"Error getting all facilitator"
            })
        }

    },
    getFacilitatorById:async(req,res)=>{
        const retrievedFacilitator = await facilitatorModel.findById(req.params.id);
      try {
      
            res.status(200).json(retrievedFacilitator)
        }
      catch (error) {
        res.status(500).json({
            message:"Erorr getting facilitator by Id"
        })
      }
    },
    getFacilitatorByEmail:async(req,res)=>{
        
        try {
            const retrievedFacilitator = await facilitatorModel.findOne({email:req.params.email});
                res.status(200).json(retrievedFacilitator)
            }
         
        catch (error) {
          res.status(500).json({
              message:"Error getting facilitator by Id"
          })
        }
      },

    updateFacilitator: async(req,res)=>{
        const updatedFacilitator = await facilitatorModel.findByIdAndUpdate(req.params.id, {set:req.body},{set:true});
        try {
                res.status(200).json(updatedFacilitator)
                facilitator:updatedFacilitator
            }
            
        catch (error) {
            res.status(500).json({
                message:"Error updating facilitator"
            }) 
        }

    },
    deleteFacilitator: async(req,res)=>{
        const id =req.params.id;
            const deletedFacilitator = await facilitatorModel.findByIdAndDelete(id);
        try {
                res.status(200).json(deletedFacilitator)
            }
            
         catch (error) {
            res.status(500).json({
                message:"Error deleting students"
            }) 
        }

    }

}
export default falitatorController