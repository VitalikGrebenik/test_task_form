import {makeObservable, observable, action} from 'mobx'

class dataLoginStore {

    email?:string;
    password?:string;

    constructor() {}
    dataEmail(email: string){
        this.email = email
    }

    dataPassword(password: string){
        this.password = password
    }
}

export default dataLoginStore