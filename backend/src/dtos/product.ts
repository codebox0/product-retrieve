import Joi from 'Joi'

export interface ProductDto{
    style: string,                  // Type de produit (sac, manteau, etc)
    material: string,               // Matière du produit
    color: string,                  // Couleur du produit
    sizes: Array<string>,           // Tailles du produit
    name: string,                   // Nom du produit
    description?: string,           // Description du produit
    images?: Array<string>,         // Images du produit
    sellable_retail?: boolean,       // Est-ce que le produit peut être vendu en magasin
    sellable_ecom?: boolean,         // Est-ce que le produit peut être vendu en ligne
    sellable_in?: Array<string>,    // Pays dans lesquels le produit peut être vendu
}

export type productInput = {
    style: String,                  // Type de produit (sac, manteau, etc)
    material: String,               // Matière du produit
    color: String,                  // Couleur du produit
    sizes: Array<String>,           // Tailles du produit
    name: String,                   // Nom du produit
    description?: String,           // Description du produit
    images?: Array<String>,         // Images du produit
    sellable_retail?: String,       // Est-ce que le produit peut être vendu en magasin
    sellable_ecom?: String,         // Est-ce que le produit peut être vendu en ligne
    sellable_in?: Array<String>,    // Pays dans lesquels le produit peut être vendu
}

export const productSchema = Joi.object({
    style: Joi.string().alphanum().min(0).max(6).required(),
    material: Joi.string().min(0).max(5).regex(/^([a-zA-Z]){5}$/, 'Material Id').required(),
    color: Joi.string().min(0).max(4).regex(/^([0-9]){4}$/, 'Color Id').required(),
    sizes: Joi.array().items(Joi.string()).required(),
    name: Joi.string().required(),
    description: Joi.string(),
    images: Joi.array().items(Joi.string()),
    sellable_retail: Joi.string(),
    sellable_ecom: Joi.string(),
    sellable_in: Joi.array().items(Joi.string()),
});

export const productSchemaValid = Joi.object({
    style: Joi.string().alphanum().min(0).max(6).required(),
    material: Joi.string().min(0).max(5).regex(/^([a-zA-Z]){5}$/, 'Material Id').required(),
    color: Joi.string().min(0).max(4).regex(/^([0-9]){4}$/, 'Color Id').required(),
    sizes: Joi.array().items(Joi.string()).required(),
    name: Joi.string().required(),
    description: Joi.string().min(1),
    images: Joi.array().items(Joi.string()).min(1),
    sellable_retail: Joi.boolean(),
    sellable_ecom: Joi.boolean(),
    sellable_in: Joi.array().items(Joi.string()),
});

