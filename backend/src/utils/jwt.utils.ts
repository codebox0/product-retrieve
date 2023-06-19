import Joi from 'Joi'
import {NextFunction, Request, Response } from 'express';

export  const validateSchema = (schema: Joi.Schema) => (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);
    console.log('body: ', req.body)
  if (error) {
      return res.status(400).json(             "Une erreur s'est produite"

          //     {
      //     // error: error.details[0].message
      //     error:"Une erreur s'est produite"
      // }
      );
  }
  next();
}


/**
 * Validate the request params
 * @param schema
 */
export  const validateParamSchemaData = (schema: Joi.Schema) => (req: Request, res: Response, next: NextFunction) =>{
    const { error } = schema.validate({
        SMC: req.body.SMC,
        country: req.body.country,
    });
    if (error) {
        return res.status(400).json(
            // error: error.details[0].message
            "Une erreur s'est produite"
        );
    }
    next();
}