import Shelter from "../models/ShelterSchema.js";

//find nearest shelter location

const find_shelter = async (req, res) => {
    try {
        const latitude = req.body.latitude
        const longitude = req.body.longitude

        const shelter_data = await Shelter.aggregate([
            {
                $geoNear:{
                    near:{type:"Point", coordinates:[parseFloat(longitude), parseFloat(latitude)]},
                    key:"location",
                    maxDistance: parseFloat(1000)*1609,
                    distanceField:"dist.calculated", 
                    speherical: true,
                }
            }
        ])

        res.status(200).send({success:true, message:"Shelter has been found", data: shelter_data });

    } catch (error) {
        res.status(400).send({sucess:false, message:error.message});
    }
}