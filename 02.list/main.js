// 리스트 ADT를 이용한 List 클래스 구현
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // 리스트 요소를 저장할 빈 배열
    //this.clear = clear;
    this.find = find;
    this.toString = toString;
    //this.insert = insert;
    this.append = append;
    this.remove = remove;
   // this.front = front;
   // this.end = end;
   // this.prev = prev;
   // this.next = next;
    this.length = length; // 길이 반환
   // this.currPos = currPos;
   // this.moveTo = moveTo;
  //  this.getElement = getElement;
  //  this.contains = contains;

}

function find(ele) {
    for(var i=0; i<this.dataStore.length; ++i){
        if(this.dataStore[i] == ele) {
            return i;
        }
    }
    return -1;
}

function append(ele) {
    this.dataStore[this.listSize++] = ele;
}

function remove(ele) {
    var idx = this.find(ele);
    if(idx > -1){
        this.dataStore.splice(idx,1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

var names = new List();
names.append('A');
names.append('b');
names.append('C');
console.log(names.toString());
names.remove('b');
console.log(names.toString());