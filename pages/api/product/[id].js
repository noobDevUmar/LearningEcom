import dbConnect from "@/backend/config/dbConnect";
import { getSingleProduct } from "@/backend/controllers/productController";
import {createRouter} from 'next-connect'

const router = createRouter();


dbConnect();


router.get(getSingleProduct)


export default router.handler()
