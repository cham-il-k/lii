export default class  InputManager {
    observers = []
    subscribe(fn) {
        this.observers.push(fn)
    } 
    unsubscribe(fn) {
        this.observers.filter(subscriber => subscriber !== fn)
    }
    broadCast(action, data) {
        this.observers.forEach(subscriber => (subscriber(action, data) ))
    }
    handleInputKeys(e) {
        e.preventDefault()
        switch(e.keyCode) {
            case 37 ://left
                this.broadCast('move',{x:-1, y:0});
                break;
            case 38 ://UP
                this.broadCast('move',{x:0, y:-1});
                break;
            case 39: //right    
                this.broadCast('move',{x:1, y:0});
              break;
              case 40: //down    
              this.broadCast('move',{x:0, y:1});
                break;
              default:
                  break;  
        }
    }
    // add manager to document
    bindKeys() {
        document.addEventListener('keydown',this.handleInputKeys)
    }
    unbindKeys() {
        document.removeEventListener('keydown', this.handleInputKeys)
    }
}