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



// 비디오  대여상점 시스템
var movies = [
    '1 The Shawshank Rdemption',
    '2 The Godfather',
    '3 The Godfather: Part 2',
    '4 Pulp Fiction',
    '5 The Good, the Bad and the Ugly',
    '6 12 Angry Man',
    '7 Schindlers List',
];

// 판매중인 영화 목록을 출력
function displayList(list) {
    for(var i=0;i<list.dataStore.length;i++) {
        list.pos = i;
        
        if(list.getElement() instanceof Customer) {  // instanceof 연산자를 이용해 Customer 객체인지 확인
            console.log(list.getElement()['movie']);
        } else {
            console.log(list.getElement())
        }
    }
}

// 고객 리스트를 관리하는 Customer객체, 빌린 사람 이름과 빌린 영화 이름
function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}

// 고객 리스트
var customers = new List();

// 고객 대여하는 기능, 대여가 가능하다면 영화목록에서 해당영화를 삭제하고 고객리스트로 추가한다.
// 리스트 클래스의 contains를 활용하여 영화를 이용할 수 있는 상태인지 확인
function checkOut(name, movie, filmList, customerList) {
    if(filmList.contains(movie)) {
        var c = new Customer(name, movie);
        customerList.append(c);
        filmList.remove(movie);
    } else {
        console.log('not availaber.')
    }
}

function returnVideo(name, movie, filmList, customerList) {
    console.log(customerList.dataStore)
    if(customerList.contains(movie)) {
        console.log('rerere')
    } else {
        console.log('not return')
    }
}


// 리스트로 관리하기
var movieList = new List();
for(var i=0; i<movies.length;++i) {
 movieList.append(movies[i]);
}

console.log("available")
displayList(movieList)

checkOut('khm','2 The Godfather', movieList, customers); // 한사람이 대여해감

console.log('remain available')
displayList(movieList)

returnVideo('khm','2 The Godfather', movieList, customers);

console.log('return')
displayList(movieList)