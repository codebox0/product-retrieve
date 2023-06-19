import {Router} from 'express'
import {getAllPrices} from '../controllers/price/all'
import {get} from '../controllers/price/get'
import {validateParamSchemaData, validateSchema} from '../utils/jwt.utils'
import {idSchema} from '../dtos/id'

const router = Router()

router.get('/', getAllPrices)
router.get('/:id', validateParamSchemaData(idSchema), get)

export default router