export default [
  {
    title: 'MVC, MVP, MVVM',
    robot: 'MVC, MVP, MVVM 프로그램을 잘 섞어서 처리를 해도 잘 동작한다. 하지만 분리하지 않고 프로그램을 짠다면 규모가 커질 시 유지보수도 힘들 뿐더러 협업시에 많은 어려움이 있다. 이러한 이유를 포함해 많은 이유가 있지만 결론적으로는 관리를 효율적으로 함에 있어서 다음의 패턴들을 이용한다. 다음 설명을위해 공통적으로 사용하는 용어의 의미 Model 데이터를 가진 객체 View 사용자에게 보여지는 UI MVC(Model View Controller)',
    route: 'posts/1',
  },
  {
    title: 'REST API 알아보기',
    robot: 'REST API 알아보기이 글에서는 REST API 가 무엇인지 알아보겠습니다. 목차 API 란? REST API 역사 REST 구성 REST 특징 REST API 디자인 가이드 HTTP Method의 알맞은 역할 HTTP 응답 상태 코드 API 란? API 는 Application Programming Interface 의 약자입니다. Interface 란? Interface 의 용어도 많이 접해볼 수 있는데   (예를들면 GUI, CLI) 간단히, 어떤 두개의 시스템 사이에 상호 작용할 수 있도록 접목시켜주는 하드웨어, 소프트웨어, 조건, 규약 등을 인터페이스라고 합니다.',
    route: 'posts/2',
  },
  {
    title: 'Blocking I/O 와 NonBlocking I/O, Synchronous 와 Asynchronous',
    robot: 'Blocking I/O 와 NonBlocking I/O, Synchronous 와 Asynchronous 동기(Synchronous)와 비동기(Asynchronous) 그리고 블로킹과 논블로킹의 차이를 알아본다. 많이 보게되는 단어들인데 이 용어들에 대해 정리해서 말을 할 수 없었기에 공부를 하기로 했다. 아래의 참고문서를 보며 정리를 했다. Blocking I/O / NonBlocking I/O Blocking I/O 호출된 함수가 자신의 작업을 모두 끝낼때까지 제어권을 가지고 있어 호출한 함수가 대기하도록 만듦 NonBlocking I/O 호출된 함수가 바로 return 해서 호출한 함수에게 제어권을 주어 다른 일을 할 수 있게 함',
    route: 'posts/3',
  },
  {
    title: 'Process 와 Thread 의 차이',
    robot: 'Process 와 Thread 의 차이 Process 와 Thread 의 차이를 설명해주세요 신입이나 인턴의 기술면접 단골질문 중 하나인데 제대로 개념이 잡혀있지않다면 당황할 수 밖에 없다. 당황하기 싫어서 해당 글에서 정리를 해보려고한다. 먼저 개념부터 정리해보면 프로세스(Process) 란? 프로세스란 운영체제로부터 자원을 할당받는 작업 의 단위 쓰레드(Thread) 란? 프로세스가 할당받은 자원을 이용하는 실행 의 단위 하나의 프로세스가 실행되면 기본적으로 하나의 스레드가 생성이되는데 이를 메인스레드 라고 한다',
    route: 'posts/4',
  },
];
