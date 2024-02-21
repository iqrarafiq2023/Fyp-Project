import { User } from "../models/userSchema.js";
import { RescueAnimal } from "../models/rescueAnimalSchema.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
export const getAllUser = async (req, res) => {
    try {
        const users = await User.find({},{password:0})
        console.log(users);
        if (!users || users.length === 0) {
            return res.status(404).json({
                success: false,
                message: "user not found",
            });
        }
        return  res.status(200).json({
            success: true,
            users,
        });

    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: "error in adminController",
        });
    }
}

// Get ALL Rescue Request

export const getAllRescueRequest = catchAsyncErrors(async (req, res) => {
    try {
        const rescueAnimal = await RescueAnimal.find();
        console.log("kiya msla hai", rescueAnimal)
        if (!rescueAnimal || rescueAnimal.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Yaayy. no Injured Animal found",
            });
        }
        res.status(200).json({
            success: true,
            rescueAnimal,
          });
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: "error in getAllRescueRequest Controller",
        });
    }
   
 
  });


 export const deleteUser = async(req,res) => { 
    try {
        const id = req.params.id;
        await User.deleteOne({_id: id})
        return  res.status(200).json({
            success: true,
            message: "User deleted Successfully",
        });

    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: "error in adminController(Delete USer)",
        });
    }
 }

 // delete user
// export const deleteUser = async (req, res) => {
//     if (req.body.userId === req.params.id || req.body.isAdmin) {
//       try {
//         const user = await User.findByIdAndDelete(req.params.id);
//         res.status(200).json("Account has been deleted successfully");
//       } catch (error) {
//         return res.status(500).json(error);
//       }
//     } else {
//       return res.status(403).json("You can only delete your account");
//     }
//   };