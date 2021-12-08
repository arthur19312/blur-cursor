import BlurCurser from "./blurCurser";

class curserAgent{
    curser;
    constructor(){
        this.createSingleCurser = this.getSingleton(this.createBlurCurser);
    }

     createBlurCurser(){
        const curserDom = document.createElement("div") 
        curserDom.className = "curser-dom"
        const curserWrapper = document.createElement("div") 
        curserWrapper.className = "curser-wrapper"
        curserWrapper.appendChild(curserDom)
        return curserWrapper;
    }
    
     getSingleton(fn){
        let result;
        return function(){
           return result || (result = fn.apply(this,arguments));
        }
    }

    update(e){
            console.log(e)
            this.curser.clientX = e.clientX;
            this.curser.clientY = e.clientY;
    }
    
    
    init(){
        this.curser = this.createSingleCurser();
        document.body.appendChild(this.curser);
        window.addEventListener("mouseMove",this.update)
    }

    destroy(){
        window.removeEventListener("mouseMove",this.update)
    }
}

export default curserAgent;