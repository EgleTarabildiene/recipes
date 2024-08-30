export class User{
   

    constructor (
        public email:string,
        public id?:number,
        public name?:String,
        
        public password?:String,
        public type?:number,
        public token?:string
    ){
        
    }

    public getTypeName():String{
        switch (this.type) {
            case 0:
                return "Administratorius"
            case 1:
                return "Narys";
            case 2: 
                return "Vartotojas";

        }
        return "Nežinomas";

        
    }

}