export class User{
   

    constructor (
        public email:string,
        public id?:number,
        public name?:string,
        public password?:string,
        public type?:number,
        public token?:string,
        public img?:string
    ){
        
    }

    public getTypeName():String{
        switch (this.type) {
            case 0:
                return "Admin"
            case 1:
                return "User";
            case 2: 
                return "Viewer";

        }
        return "Nežinomas";

        
    }

}