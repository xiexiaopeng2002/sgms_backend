import { Router } from "express";
import Ajv, {JSONSchemaType} from "ajv"
import db from "../db";

const ajv = new Ajv()

const personRoute = Router();

personRoute.post("/:schoolId/tel/:newTel", async (req, res) => {
    const result = await db.person.update({
        where: {
            schoolId:req.params.schoolId
        },
        data: {
            tel:req.params.newTel
        }
    // type Params = {
    //     name: string, schoolId: string, tel: string, newTel:string
    // }
    // const schema: JSONSchemaType<Params> = {
    //     type: "object",
    //     properties: {
    //         name: {
    //             type: "string",
    //             minLength: 2
    //         },
    //         schoolId: {
    //             type: "string",
    //             minLength: 10,
    //             maxLength: 10
    //         },
    //         tel:{
    //             type: "string"
    //         },
    //         newTel:{
    //             type: "string"
    //         }
    //     },
    //     required: ["name", "schoolId", "tel","newTel"]
    // }
    // const validator = ajv.compile(schema)
    // if(validator(req.params)) {
    //     try {
    //         const result = await db.person.update({
    //             data: req.params
    //         })
    //         res.send(result)
    //     } catch(err) {
    //         console.log(JSON.stringify(err))
    //         res.status(500).send({
    //             err: "Failed to change tel."
    //         })
    //     }
    // } else {
    //     res.status(400).send({
    //         err: "Invalid input data."
    //     })
    // }
    })
})

export default personRoute