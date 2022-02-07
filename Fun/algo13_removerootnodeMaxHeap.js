class MaximumHeap{
    constructor(){
        this.values = [null];
    }
    insert(value){ //this is sorting array to get largest value at node 1 or index 1.
        this.values.push(value)
        let currentIdx = this.values.length-1
        let parentIdx = Math.floor(currentIdx/2)
        while(this.values[parentIdx]<this.values[currentIdx]&&currentIdx>1){
            [this.values[parentIdx], this.values[currentIdx]]=[this.values[currentIdx], this.values[parentIdx]];
            currentIdx = parentIdx
            parentIdx = Math.floor(currentIdx/2);
        }
        return this;
    }
    extractMax(){
        [this.values[1], this.values[this.values.length-1]]=[this.values[this.values.length-1], this.values[1]];
        let max = this.values.pop()  //here we extract out the largest node
        let currentIdx = 1;
        let childIdx = '';
        while(this.values[currentIdx]<this.values[currentIdx*2]||this.values[currentIdx]<this.values[(currentIdx*2+1)]){
            if(this.values[currentIdx*2]>this.values[currentIdx*2+1]){
                childIdx = currentIdx*2;
                [this.values[currentIdx], this.values[childIdx]]=[this.values[childIdx], this.values[currentIdx]]
                currentIdx = childIdx;
            }
            else{
                childIdx = currentIdx*2+1;
                [this.values[currentIdx], this.values[childIdx]]=[this.values[childIdx], this.values[currentIdx]]
                currentIdx = childIdx;
            }
        }
        console.log(this.values)
        return max;
    }
}


let heap1 = new MaximumHeap()


console.log(heap1.insert(7).insert(5).insert(3).insert(-1).insert(6).insert(100).insert(4).extractMax())