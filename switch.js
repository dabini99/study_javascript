// if문을 switch문으로 변환하기 
//switch문은 하나만 사용하기!
let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }
/* -------------------------------------------------------------------------- */
//switch문 작성

switch(a){
  case 0 :
    alert(0)
    break;

  case 1 :
    alert(1)
    break;

  case 2 :
  case 3 :
    alert(2,3)
    break;
}

/* -------------------------------------------------------------------------- */
const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime = LATE_NIGHT;
// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

switch(thisTime){
  case MORNING :
    console.log('뉴스 기사 글을 읽는다.');
    break;

  case LUNCH :
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;

  case DINNER :
    console.log('동네 한바퀴를 조깅한다.');
    break;

  case NIGHT :
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;

  case LATE_NIGHT :
  case DAWN :
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
}

/* -------------------------------------------------------------------------- */
//if 문으로 바꿔보기

















/* -------------------------------------------------------------------------- */
//해답
// let a = +prompt('a?', '');

// switch (a) {
//   case 0:
//     alert( 0 );
//     break;

//   case 1:
//     alert( 1 );
//     break;

//   case 2:
//   case 3:
//     alert( '2,3' );
//     break;
// }