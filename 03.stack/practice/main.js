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

function checkPref(equ) {

    var s = new Stack();
    var rs = new Stack();
    for(var i=0;i<equ.length;i++) {
        s.push(equ[i]);
    }
    for(var i=equ.length-1;i>0;i--) {
        rs.push(equ[i]);
    }



    // 반복으로 (를 찾고, 찾아진 순간에 거꾸로 pop을 이용하여 뒤에서 부터 ) 가 있는지 체크. 있으면 pop처리, 
    // 없으면 위치를 반환.
    // 있으면 true를 반환.

    // stack구조이니까 조회를 맨 마지막에서 부터 한다는 고려하에
    // ) 가 나오는 순간. 앞에서 부터 ( 있는지 체크. 있으면 넘어가고
    // 끝까지 없으면 )의 위치를 반환.

    while(rs.length()>0) {
        var val = rs.pop();
        console.log(val)
        console.log(equ)
        if (val == '(') {

            while(s.length()>0) {
                var sval = s.pop();
                if(sval == ')') {
                    break;
                } else {
                    console.log('11111111')
                    
                }
                console.log(sval)
            }
            break;
        }
       // if ()
        /*if (s.peek() == ')') {
            return;
        }*/
    }
    console.log("end")
    return 1;
}

console.log(checkPref('2.3+23/12+(3.14159*24'));