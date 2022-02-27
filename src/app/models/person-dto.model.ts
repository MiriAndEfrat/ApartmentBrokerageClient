
// export interface PersonDTO{
//     id:number;
//     identitynumer:string;
//     identityId:number;
//     streetId:number;
//     password:string;
//     firstName:string;
//     lastName:string;
//     phone1:string;
//     phone2:string;
//     phone3:string;
//     fax:string;
//     email:string;
//     buildingNumber:number;
//     floor:number;
//     mailBox:number;
//     userType:number[]
//     token:string;
// }

export class PersonDTO{
   
    constructor(id:number=0,identitynumer:string="",identityId:number=0,streetId:number=0,password:string="",firstName:string="",lastName:string="",
        phone1:string="",phone2:string="",phone3:string="",fax:string="",email:string="",buildingNumber:number=0,floor:number=0,mailBox:number=0,userType:number[]=[]) {
        this.id=id;
        this.identitynumer=identitynumer;
        this.identityId=identityId;
        this.streetId=streetId;
        this.password=password;
        this.firstName=firstName;
        this.lastName=lastName;
        this.phone1=phone1;
        this.phone2=phone2;
        this.phone3=phone3;
        this.fax=fax;
        this.email=email;
        this.buildingNumber=buildingNumber;
        this.floor=floor;
        this.mailBox=mailBox;
        this.userType=userType;
    }
        id:number;
        identitynumer:string;
        identityId:number;
        streetId:number=1;
        password:string;
        firstName:string;
        lastName:string;
        phone1:string;
        phone2:string;
        phone3:string;
        fax:string;
        email:string;
        buildingNumber:number;
        floor:number;
        mailBox:number;
        userType:number[]
        token:string="";
    }