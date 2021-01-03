import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService{

    static todoMap:{[key:string]:Array<string>}={
        //replace it with http call to the back-end
        'user1':new Array(),
        'user2':new Array(),
        'user3':new Array(),
        'user4':new Array()
    };

    /**
     * Gets the to-do list of given user
     * @param user 
     */
    static getToDoList(user:string):Array<string>{
        //replace it with http call to the back-end
        return this.todoMap[user];
    }
}