// 리스트 ADT를 이용한 List 클래스 구현
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // 리스트 요소를 저장할 빈 배열
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length; // 길이 반환
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;

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

function insert(ele, afterEle) {
    var tgIdx = this.find(afterEle);
    if(tgIdx>-1){
        this.dataStore.splice(tgIdx,1, ele);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore.length = 0;
    this.listSize = 0;
}

function contains(ele) {
    for(var i =0; i<this.dataStore.length; ++i){
        if(this.dataStore[i] == ele) {
            return true;
        }
    }
    return false;
}

// 현재 위치를 리스트의 첫번째 요소로 결정
function front() {
    this.pos = 0;
}
// 현재 위치를 리스트의 마지막 요소로 결정 
function end() {
    this.pos = this.listSize -1;
}
// 현재 위치를 한 요소 뒤로 이동
function prev() {
    if(this.pos > 0) {
        --this.pos;
    }
}
// 현재 위치를 한 요소 앞으로 이동
function next() {
    if(this.pos<this.listSize-1) {
        ++this.pos;
    }
}
// 리스트의 현재 위치를 반환
function currPos() {
    return this.pos;
}
// 현재 위치를 지정된 위치로 이동
function moveTo(pos) {
    this.pos = pos;
}

//현재 위치의 요소를 반환
function getElement(){
    return this.dataStore[this.pos];
}


var names = new List();
names.append('A');
names.append('b');
names.append('C');
names.append('d');
names.append('e');
names.append('f');

names.front();
console.log(names.getElement())

names.next();
console.log(names.getElement())

names.next();
names.next();
names.prev();
console.log(names.getElement())
