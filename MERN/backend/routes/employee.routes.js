const mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

let employeeSchema = require("../models/employee");
//create employee
router.route("/add-emp").post(async(req,res,next)=>{
    await employeeSchema
    .create(req.body)
    .then((result)=>{
        res.json({
            data:result,
            message: "new employee added",
            status:200,
        });
    })
    .catch((err)=>{
        return next(err);
    });
});
//Read employee data
router.route("/").get(async(req,res,next)=>{
    await employeeSchema
    .find()
    .then((result)=>{
        res.json({
            data:result,
            message:"All Employee details fetched successfully",
            status:200,
        });

    })
    .catch((err)=>{
        return next(err);
    })

});
module.exports = router;
// Update one employee
router.route("/update-emp/:id").put(async(req,res,next)=>{
    await employeeSchema
    .findByIdAndUpdate(req.params.id,{
        $set:req.body,
    })
    .then((result)=>{
        res.json({
            data:result,
            message:"One Employee details Updated successfully",
            status:200,
        });

    })
    .catch((err)=>{
        return next(err);
    })
// detele one employee
    router.route("/").delete(async(req,res,next)=>{
        await employeeSchema
        .find()
        .then((result)=>{
            res.json({
                data:result,
                message:"one Employee details deleted successfully",
                status:200,
            });
    
        })
        .catch((err)=>{
            return next(err);
        })
    
    });

});
module.exports = router;
