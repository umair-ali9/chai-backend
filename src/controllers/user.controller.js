import {asyncHandler} from "../utils/asyncHandler.js";

const regiesterUser = asyncHandler( async (req, res) => {
    res.status(200).json({
        message: "ok"
    })
} )

export {regiesterUser}