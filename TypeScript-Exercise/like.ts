export{Like}

class Like{
    
    private _initialCount:number =0;
    private _likeButton:boolean = false;

    clickLike(){
        if(this._likeButton && this._initialCount>0) {
            this._initialCount --;
        }else if(!this._likeButton){
            this._initialCount++;
        }
        this._likeButton = !this._likeButton;
    }

    set initialCount(_initialCount:number){
        if(_initialCount>=0) this._initialCount = _initialCount;
    }

    get initialCount(){
        return this._initialCount;
    }

    get likeButton(){
        return this._likeButton;
    }
    
}