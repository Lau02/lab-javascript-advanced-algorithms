class StackDataStructure {
    constructor() {
        this.stackControl = [];
        this.MAX_SIZE = 8;
    }

    isEmpty() {
        if (this.stackControl.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    canPush() {
        if (this.stackControl.length < this.MAX_SIZE) return true;
        else {
            return false;
        }

    }

    push(el) {
        if (this.stackControl.length === this.MAX_SIZE) {
            return "Stack Overflow";
        } else {
            this.stackControl.push(el);
            return this.stackControl;
        }
    }

    pop() {
        if (this.isEmpty()) {
            return 'Stack Underflow';
        } else {
          return  this.stackControl.pop();
            
        }
    }

}