import BlurCurser from "./blurCurser";

class curserAgent{
    curser:any;
    private createSingleCurser: () => any;
    constructor(){
        this.createSingleCurser = this.getSingleton(this.createBlurCurser);
    }

     createBlurCurser(){
        const curserDom = window.document.createElement("div")
        curserDom.className = "curser-dom"
        const curserWrapper = document.createElement("div")
        curserWrapper.className = "curser-wrapper"
        curserWrapper.appendChild(curserDom)
        return curserWrapper;
    }

     getSingleton(fn: { (): HTMLDivElement; apply?: any; }){
        let result: any;
        return function(){
           return result || (result = fn.apply(this,arguments));
        }
    }

    update(e: any){
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
