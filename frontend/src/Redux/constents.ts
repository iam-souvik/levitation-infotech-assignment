export interface IFormUser {
    _id?:string,
    name: string,
    phonenum: string,
    email: string,
    files: Array<string> | File[],
    address1: string,
    address2: string,
    city: string,
    state: string,
    pincode: string,
    country: string,
    geolocation: string,
    selectedOptions: string[],
    createdAt?: string,
    updatedAt?: string
}


export interface IUser {
    _id?:string,
    name: string,
    email: string,
    password: string,
    createdAt?: string,
    updatedAt?: string
}

export type TFormUserInitialState = {
    users: Array<IFormUser>,
    loading: boolean,
    error: boolean
}

export type TAuthInitialState = {
    user: IUser | {},
    loading: boolean,
    error: string
}