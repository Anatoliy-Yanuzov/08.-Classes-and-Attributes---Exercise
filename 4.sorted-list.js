class List {
    constructor() {
        this.arr = [];
        this.size = 0;
    }

    add(el) {
        this.arr.push(el);
        this.arr.sort((a, b) => a - b);
        this.size++;
        return this.arr;
    }

    remove(index) {
        if (index >= 0 && index < this.arr.length) {
            this.arr.splice(index, 1);
            this.arr.sort((a, b) => a - b);
            this.size--;
            return this.arr;
        }
    }

    get(index) {
        if (index >= 0 && index < this.arr.length) {
            return this.arr[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
