import Joi from 'Joi'

export interface PriceDto {
    SMC:                  string    //   Code produit sur lequel s'applique le prix
    country:              string    //   Pays dans lequel s'applique le prix
    currency:             string    //   Devise du prix
    amount:               Number    //   Montant
    begin_date:           string    //   Date à laquelle le prix est appliqué
    end_date:             string    //   Date à laquelle le prix n'est plus appliqué
}

export type priceInput = {
    SMC:                  String    //   Code produit sur lequel s'applique le prix
    country:              String    //   Pays dans lequel s'applique le prix
    currency:             String    //   Devise du prix
    amount:               Number    //   Montant
    begin_date:           String    //   Date à laquelle le prix est appliqué
    end_date:             String    //   Date à laquelle le prix n'est plus appliqué
}

export const priceSchema = Joi.object({
    SMC: Joi.string().regex(/^([A-Z0-9]){6}([a-zA-Z]){5}([0-9]){4}$/, 'SMC Id').required(),
    country: Joi.string().required().required(),
    currency: Joi.string().required(),
    amount: Joi.number().required(),
    begin_date: Joi.string().required(),
    end_date: Joi.string(),
});