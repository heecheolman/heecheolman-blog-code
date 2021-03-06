export default [
  {
    title: '타입스크립트에 들어가며',
    robot: 'Typescript 동적타입언어인 자바스크립트에서는 타입에러를 만나는경우가 많은데 타입스크립트를 이용하여 컴파일단계에서 미리 타입체크를 하여 타입오류를 최소화 할 수 있고, 클래스기반 언어에 익숙한 개발자들에게 좀 더 친숙하게 다가갈 수 있기에 공부를 시작한다. Typescript 란? "Typescript is a typed superset of Javascript that compiles to plain Javascript" - 타입스크립트 공식 홈페이지 소개란 해석해보면 타입스크립트는 순수 자바스크립트로 컴파일되는 자바스크립트의 슈퍼셋이다.',
    route: 'posts/1',
  },
  {
    title: '타입스크립트 기본타입',
    robot: 'Typescript - basic types 타입스크립트의 기본타입들을 살펴봅니다. 목차 Boolean Number String Array Tuple Enum Any Void Null과 Undefined Never 참고문헌 Boolean true 또는 false 를 값으로 갖습니다. Number Javascript 와 동일하게 타입스크립트도 부동소수점을 갖습니다.String 작은따옴표(\'\') 또는 큰따옴표("") 로 감싸 표현할 수 있습니다. Template Literal 을 이용하려면 백틱(``) 으로 감싸면 됩니다.',
    route: 'posts/2',
  },
  {
    title: '타입스크립트 인터페이스',
    robot: '타입스크립트 인터페이스 기존에 자바스크립트에는 인터페이스라는 개념이 없었습니다. 하지만 타입스크립트를 이용해 인터페이스를 사용할 수 있게 됐습니다. 인터페이스라는 용어에 대해서 한번 짚고 넘어갈 필요가 있습니다. 인터페이스란 간단하게 어떠한 두개의 시스템 사이에 상호작용할 수 있게 해주는 조건, 규약 같은 것입니다. 실생활에서 예를들어 \'타이핑\' 이라는 인터페이스가 있다고 친다면, 키보드의 K 를 누르면 알파벳 \'K\' 가 모니터에 출력된다.',
    route: 'posts/3',
  },
  {
    title: '타입스크립트 클래스',
    robot: '타입스크립트 클래스 자바스크립트는 애초에 프로토타입기반을 이용해 상속을 구현합니다. 하지만 이는 클래스기반 프로그래머들에게 익숙하지 않을 수 있습니다. ES6 에 존재하는 class 키워드를 이용해 구현할 수 있습니다. 타입스크립트도 이와 동일하게 class 키워드를 이용합니다. 목차 클래스 키워드 생성자 상속 오버라이드 접근제어자 public protected private readonly 매개변수 프로퍼티 static 추상 클래스 Deep dive into Class 클래스 키워드 ES6 를 다루어보셨다면 기존에 생각했던 것과 동일합니다.',
    route: 'posts/4',
  },
  {
    title: '타입스크립트 함수',
    robot: '타입스크립트 함수 타입스크립트의 함수(Functions) 에 대해 알아봅니다. ES6와 작성하는 방법은 크게 다르지 않습니다. 좀 더 타입에 대해 명확해졌을 뿐입니다. 목차 함수작성Default Parameter Optional Parameter Rest Parameter Union Type Overloading this 함수작성  타입스크립트에서 함수작성하는 방법을 살펴보면 ES6와 크게 다르지않습니다. 매개변수의 타입과 return 타입에 대해 정해줄 뿐입니다',
    route: 'posts/5',
  },
  {
    title: '타입스크립트 제네릭',
    robot: '타입스크립트 제네릭 자바스크립트에는 없지만 타입스크립트에 있는 제네릭(Generics)을 알아보겠습니다. 클래스나 함수의 목적중 하나는 \'재사용성\'에 있습니다. 이 제네릭을 이용하게되면 재사용성이 한층 더 증가합니다. 일종의 \'틀\' 이라고 생각하시면 됩니다. 타입스크립트에서 제네릭을 어떻게 쓰는지에대해 알아보도록 하겠습니다. 목차 기존의 문제점 클래스에서의 제네릭 함수에서의 제네릭 제약조건 마무리 기존의 문제점 예를들어 number, text, operator(연산자) 각 종류별로 버튼들이 존재할 때 이 버튼들을 담으려',
    route: 'posts/6',
  },
];
