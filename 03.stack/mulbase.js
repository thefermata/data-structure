function Stack() {
    this.dataStore = []; // 스택 요소를 저장하는 배열
    this.top = 0;       // 스택탑 정보를 유지하며 생성자에서 0으로 초기화
    this.push = push;   // 요소 추가, 추가시 top을 증가 시켜 새로운 top으로 가리키도록 한다.
    this.pop = pop;    // 요소 삭제, top을 감소시켜 탑 위치를 변경
    this.peek = peek;  // 현재 위치요소에 접근해서 반환
    this.clear = clear;
    this.length = length;
}

function push(ele) {
    this.dataStore[this.top++] = ele;
}

function pop() {
   return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top-1];
}
function length() {
    return this.top;   // top을 반환하여 stack에 데이터가 얼마나 저장되어 있는지 알 수 있다.
}
function clear() {
    this.top = 0;   // 스택의 전체 요소 삭제
}


function mulBase(num, base){
    var s = new Stack();
    do {
        s.push(num%base);
        num = Math.floor(num/=base);
        console.log(s.dataStore)
    } while (num>0)

    var converted = '';
    // 입력한 거꾸로 꺼내야 함.
    while(s.length>0) {
        converted += s.pop();
    }
    console.log(converted)
    return converted;
}

var newnum = mulBase(125,8);
console.log(newnum)