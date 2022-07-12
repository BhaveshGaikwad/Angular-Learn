export{Like}

class Like{
    
    constructor(private _initialCount:number, private _likeButton:boolean){}

    clickLike(){
        this._initialCount += (this._likeButton && this._initialCount>0) ? -1 :(!this._likeButton)? 1:0;
        this._likeButton = !this._likeButton;
    }


    get initialCount(){
        return this._initialCount;
    }

    get likeButton(){
        return this._likeButton;
    }
    
}