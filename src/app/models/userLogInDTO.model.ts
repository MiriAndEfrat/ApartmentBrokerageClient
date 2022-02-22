export class UserLogInDTO{
    identityNumber!:string ;
    password!:string;
    constructor(identityNumber:string, password:string) {
        this.identityNumber=identityNumber;
        this.password=password;
    }
}