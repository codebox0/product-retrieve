import Joi from 'Joi'

export interface SearchDto {
    SMC: string,
    country: string
}

export interface searchProductDto {
    style: string,
    material: string,
    color: string,
}

export interface SearchDto {
    SMC: string,
    country: string
}

export interface searchProductDto {
    style: string,
    material: string,
    color: string,
}

export type searchInput = {
    SMC: String,
    country: String
}

export type searchProductInput = {
    style: String,
    material: String,
    color: String,
}

export const searchSchema = Joi.object({
    SMC: Joi.string().regex(/^([A-Z0-9]){6}([A-Z0-9]){5}([0-9]){4}$/, 'SMC Id').message('SMC Id is not valid'),
    country: Joi.string().min(0).max(60),
}).or('SMC', 'country');

export const searchProductSchema = Joi.object({
    style: Joi.string().min(0).max(6).regex(/^([A-Z0-9]){6}}$/, 'style Id').required(),
    material: Joi.string().min(0).max(5).regex(/^([a-zA-Z]){5}$/, 'Material Id').required(),
    color: Joi.string().min(0).max(4).regex(/^([0-9]){4}$/, 'Color Id').required(),
}).and('style', 'material', 'color');
