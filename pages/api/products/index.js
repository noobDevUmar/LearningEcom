import dbConnect from "@/backend/config/dbConnect";
import { newProduct,getAllPoducts } from "@/backend/controllers/productController";
import {createRouter} from 'next-connect'

const router = createRouter();


dbConnect();

router.post(newProduct)
router.get(getAllPoducts)


export default router.handler()
