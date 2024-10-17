import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { CreateSatisfiedWasteReqOrderSchema, SatisfiedWasteReqOrderSchema } from '../schema';
import{ z } from 'zod';

const prisma = new PrismaClient();

export const createOrder = async (req: Request, res: Response) => {
    try {
        
        const { amount, mobile, address, city, state, pincode } = req.body;
        const{ id } = req.params;

        const userId = req.cookies.userId;

        const validateOrder = CreateSatisfiedWasteReqOrderSchema.parse({
            amount,
            mobile,
            address,
            city,
            state,
            pincode,
            satisfiedWasteReqId: id,
            userId
        })

        const newOrder = await prisma.satisfiedWasteReqOrder.create({
            data: {
                mobile: validateOrder.mobile,
                address: validateOrder.address,
                city: validateOrder.city, 
                state: validateOrder.state,
                pincode: validateOrder.pincode,
                userId: validateOrder.userId,
                amount: validateOrder.amount, 
                satisfiedWasteReqId: validateOrder.satisfiedWasteReqId 
            }
        })

        return res.status(201).json({
            message: "Ordered Successfully!!",
            newOrder
        })
    }
    catch (error: any) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                message: "Validation Error",
                errors: error.errors
            });
        }
        res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
}

export const getOrders = async (req: Request, res: Response) => {
    try {
        const allOrders = await prisma.satisfiedWasteReqOrder.findMany();

        const validateOrder = SatisfiedWasteReqOrderSchema.array().parse(allOrders);

        res.status(200).json({
            message: "All orders are:",
            validateOrder
        })
    }
    catch(err){
        console.log(err);
    }
}

export const getOrderById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const gettingOrderById = await prisma.satisfiedWasteReqOrder.findFirst({
            where: {
                id
            }
        })

        const validateOrder = SatisfiedWasteReqOrderSchema.parse(gettingOrderById)

        res.status(200).json({
            message: "Order is: ",
            validateOrder
        })
    }
    catch (error: any) {
        res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
}

export const updateOrder = async (req: Request, res: Response) => {
    try {

        const {id} = req.params;
        const {status} = req.body;

        const changingStatus = await prisma.satisfiedWasteReqOrder.update({
            where:{
                id: id
            },
            data: {
                status
            }
        })

        res.status(200).json({
            message: "Status Changed Successfully!",
            changingStatus
        })
    }
    catch (error: any) {
        res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
}