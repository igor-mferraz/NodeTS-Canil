import { Request, Response } from "express";
import { createMenuObj } from '../helpers/createMenuObj';


export const home = (req: Request, res: Response) => {
    res.render('pages/page',{
        menu: createMenuObj('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    })
}

export const dogs = (req: Request, res: Response) => {
    res.render('pages/page',{
        menu: createMenuObj('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        }
    })
}

export const cats = (req: Request, res: Response) => {
    res.render('pages/page',{
        menu: createMenuObj('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        }
    })
}

export const fishes = (req: Request, res: Response) => {
    res.render('pages/page',{
        menu: createMenuObj('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        }
    })
}
