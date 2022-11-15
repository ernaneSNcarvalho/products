import {Product} from  '../models/Product';
import {Request, Response} from 'express';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const createProduct = async (req: Request, res: Response) => {
    let {name, stock, price} = req.body;
    let newProduct = await Product.create({name, stock, price});
    res.json({newProduct})
}

export const getProducts = async (req: Request, res: Response) => {
    let list = await Product.findAll();
    res.json({list})
}