export default [
  {
    title: '소괄호의 의미와 IIFE',
    robot: '소괄호의 의미 소괄호 () 가 의미하는 바가 무엇인지 알아보고, 즉시실행함수(IIFE)가 무엇인지 알아보도록한다. 함수 선언과 표현 먼저 함수 선언과 표현에대한 차이점을 알아보도록 한다. 함수선언 (Function Declarations) function name (parameter){ statements } name : 함수이름 parameter : 함수의 인자이며 255개까지 인자를 가질 수 있습니다 statements : 함수의 본문을 기술합니다',
    route: 'posts/1',
  },
  {
    title: '이터레이터, 이터러블, 제너레이터',
    robot: '이터레이터, 이터러블, 제너레이터 for forEach() for...in for...of] 심볼(Symbol) 인터페이스(Interface) 이터레이터(Iterator) 이터러블(Iterable) 제너레이터(Generator)] for 배열루프를 순회하기위한 일반적인 방법 for(var i = 0; i < arr.length; i++){ console.log(arr.length); } forEach() arr.forEach(callback[, thisArg]){ } arr : 순회할 배열 callback : 각 요소에 대해 실행할 함수이며, 인수 세개를 가짐 currentValue : 현재처리중인 요소 index : 현재처리중인 index array : forEach() 를 적용중인 배열 thisArg : 선택이며, callback 함수를 실행할 때 this 로서 사용되는 값',
    route: 'posts/2',
  },
  {
    title: '컬렉션',
    robot: '컬렉션 (Collection) Map Set WeakMap WeakSet 왜 WeakMap 과 WeakSet은 Iterable 하지 않은가? 메모리 누수? 일반적인 Object 도 key 와 value 의 쌍을 계속 추가할 수 있는 일종의 컬렉션이다. 하지만 몇가지 문제들이 있다. 기본적으로 Object 는 Object 의 Key 는 문자열과 Symbol만이 사용될 수 있고, [Symbol.iterator] 를 추가하지않는 한 이터러블하지 않다. ES6 컬렉션은 사용자의 데이터와 빌트인(built-in) 메서드의 이름이 충돌되지 않기 위해 설계되었다. 즉, 컬렉션의 key는 빌트인 메서드들과 분리되어있기 때문에 컬렉션 내의 멤버 데이터를 드러내지 않는다. 이러한 이유로 직접적으로 obj.[key] obj.key 를 이용해 접근이 불가하다.',
    route: 'posts/3',
  },
  {
    title: '프로토타입',
    robot: '프로토타입 (Prototype) 워밍업 자바스크립트는 프로토타입 기반 언어라고 불린다. 그렇다면 프로토타입이 무엇인지 파헤쳐봐야 재밌어지지 않을까 싶다. prototype 이라는 단어의 뜻 부터 알고 시작하도록 하자! prototype : 원형, 본형, 원작 자바스크립트는 사실 객체지향이다? Java, C++ 등 다른 언어는 class 라는 개념이 있다.',
    route: 'posts/4',
  },
  {
    title: '상속',
    robot: '상속 (Inheritance) 자바스크립트는 클래스기반 언어가 아니기때문에 상속(Inheritance)이라는 기능이 없다. 하지만 프로토타입을 이용해서 상속을 구현할 수 있다. ES6부터 추가된 class 라는 문법이 있지만 이는 문법이 추가된 것이지 클래스 기반으로 바뀌었다는 의미는 아니다. 자바스크립트에서는 두가지의 상속방법이 존재한다. Classical 방식 Prototypal 방식 classical 방식은 new 연산자를 통해 마치 JAVA 의 객체 생성방식과 비슷해 classical 방식이라 한다. prototypal 방식은 Object.create() 메서드를 이용해 객체를 생성하고 확장하는 방식이다.',
    route: 'posts/5',
  },
  {
    title: '클래스',
    robot: '클래스 (Class) 자바스크립트는 ES6부터 클래스를 도입했다. 하지만 다른언어의 클래스와는 다르다. 상속에 대해 문법적으로 보기 편하게 만든것일 뿐이다. 이를 Syntactic Sugar 라고 한다. 클래스 정의 (Class declarations) 클래스는 함수이므로 함수 표현식과 함수 선언식을 사용하는것처럼 사용가능하다. class Person{} console.log(typeof Person); // function class 는 다른 함수처럼 호이스팅(hoisting) 을 지원하지 않는다. const p = new Person(); // error! Person is not defined class Person{} 일반함수처럼 함수 표현식이 가능하며 이를 클래스표현식이라 한다. 이름은 선택적으로 가질 수 있다.',
    route: 'posts/6',
  },
  {
    title: 'BOM 과 DOM 이란?',
    robot: 'Javascript Javascript 는 4가지로 세분화할 수 있다 분류\t설명 자바스크립트 Core문법\t기본문법, 데이터타입, 조건문 등이 포함 자바스크립트 Core라이브러리\t내장함수들이 포함되어있음, Date, Math 등 자바스크립트 DOM\t노드(node), 스타일, 속성, 이벤트 등을 다룰 수 있는 다양한 기능 포함 자바스크립트 BOM\t브라우저와 관련된 Window, Navigator, Location, History, Document, Screen 객체가 포함 BOM (Browser Object Model) BOM(브라우저 객체 모델) 은 브라우저와 컴퓨터 스크린에 접근 할 수 있는 객체의 모음. window 객체를 통해 접근 가능',
    route: 'posts/7',
  },
  {
    title: 'bind, call, apply 그리고 this',
    robot: 'bind, call, apply bind() .bind(thisArg[, arg1[, arg2[,...]]]) bind() 의 역할은 새로운 함수를 만든다. 이 함수의 실행 문맥은 .bind()의 첫번째 인자로 받은게 된다. 바인딩함수는 미리 정의해둔 this 값으로 함수를 생성할 수 있기 때문에 매우 유용하다. call() .call(thisArg[,arg1[,arg2[,...]]]) call() 함수는 첫번째 인자로 함수 내부에서 사용할 this로 만들어준다 나머지 parameter 는 메서드에 전달한 인자 목록이다.',
    route: 'posts/8',
  },
  {
    title: '싱글톤 디자인패턴',
    robot: 'Singleton Pattern 싱글톤패턴(singleton pattern) 이란? 싱글톤 패턴은 전체 시스템에서 하나의 인스턴스만 존재하도록 보장하는 객체 생성패턴이다. 동일 클래스로 new 를 해도 인스턴스 하나만 존재한다는 것이다. 특징 객체 자체에는 접근이 불가능해야함 객체에 대한 접근자(비공개 멤버: 클로저)를 사용해 실제 객체를 제어할 수 있다. 객체는 단 하나만 만들어지며, 해당 객체를 공유함 다음과 같은 객체 리터럴도 싱글톤 패턴이다. var obj = { a: \'foo\', b: function(){} } 이렇게 하게되면 비공개상태 및 함수를 정의할 수 없다.',
    route: 'posts/9',
  },
  {
    title: '자바스크립트와 이벤트루프',
    robot: '자바스크립트와 이벤트 루프 자바스크립트는 단일쓰레드 기반 언어이다. 이 뜻은, 동시에 하나만 처리할 수 있다는 말이다. 하지만 웹 브라우저는 애니메이션기능이 실행되면서 이벤트 효과도 받고, Node.js 기반의 웹서버는 동시에 여러개의 HTTP 요청을 처리하기도하는데 이것을 가능하게 해주는것이 이벤트 루프 이다. ECMAscript 에는 이벤트 루프가 없다 ECMAscript 의 스펙을 자세히 보면 이벤트 루프에 관한 내용이 없다. 사실 이벤트루프를 지원해주는 것은 브라우저나, Node.js 와 같은 자바스크립트 엔진을 구동하는 환경이다.',
    route: 'posts/10',
  },
];
