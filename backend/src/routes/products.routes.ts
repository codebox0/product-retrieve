import {Router} from 'express'
import {getAllProducts} from '../controllers/product/all'
import {get} from '../controllers/product/get'
import {validateParamSchemaData, validateSchema} from '../utils/jwt.utils'
import {searchSchema} from "../dtos/input";


const router = Router()


router.get('/', getAllProducts)
router.get('/find', validateParamSchemaData(searchSchema), get)
router.post('/find', validateParamSchemaData(searchSchema), get)

export default router