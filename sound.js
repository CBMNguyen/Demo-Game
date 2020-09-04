class sound{
    constructor(fileName){
        this.fileName = fileName;
        this.audio = new Audio('sounds/' + fileName);
        this.loaded = false;
        this.audio.addEventListener('canplaythrough',() => this.loaded = true);
    }

    start(onEndCallBack){
        if(this.loaded){
            this.audio.play();
            if(typeof onEndCallBack == 'function'){
                this.audio.onended = onEndCallBack;
        }
        }
    }

    stop(){
        this.audio.pause();
    }
}