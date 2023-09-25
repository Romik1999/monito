import axios from "axios";

interface IData {
    id: number,
    slug: string,
    title: string,
    imgSrc?: string,
    genderId?: number,
    colorId?: number,
    size?: string,
    categoryId?: number,
    createdAt?: string,
    updatedAt?: string,
    category?: {
        slug: string,
        title: string
    },
    gene?: string,
    age?: string,
    price?: string
}
export const TodoService = {
    async getAll (){
        return axios.get<IData[]>('http://localhost:5000/products')
    },
    async getById (id: string){
        return axios.get<IData>(`http://localhost:5000/products/${id}`)
    }
}