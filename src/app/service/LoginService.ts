import { Injectable } from '@angular/core';


@Injectable()
export class LoginService{
    
    loginCredentials:Object;

    constructor(){
        //replace this with httpService call to the backend
        this.loginCredentials={
            'user1':'user1',
            'user2':'user2',
            'user3':'user3',
            'user4':'user4'
        }
    }

    /**
     * Logs out the currentuser
     * @param username 
     */
    logout(username:String):boolean{
        return true;
    }

    /**
     * Returns true if the username and password is in the database
     * @param username 
     * @param password 
     */
    login(username:string,password:string):boolean{
        //replace this with httpService call to the backend
        let returnedPassword=this.loginCredentials[username];
        return (returnedPassword)?returnedPassword===password:false;
    }
}