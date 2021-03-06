export default [
  {
    title: 'Angular Introduction',
    robot: '앵귤러는 SPA 개발을 위한 구글의 오픈소스 자바스크립트 프레임워크입니다. 앵귤러의 철학중 하나는 "One framework. Mobile & Desktop" 으로 하나의 프레임워크로 모바일과 데스크탑을 개발할 수 있다는 것입니다.',
    route: 'posts/1',
  },
  {
    title: 'Angular 프로젝트 시작하기',
    robot: '앵귤러 프로젝트를 시작하기 앞서 Angular CLI 를 설치하도록 합니다. CLI 는 Command Line Interface 의 약자로 명령어를 통해 앵귤러 프로젝트를 생성, 실행, 빌드할 수 있습니다.',
    route: 'posts/2',
  },
  {
    title: 'Angular 컴포넌트 - 작성, 호출, 등록',
    robot: '컴포넌트 기반 프레임워크인 앵귤러에서 컴포넌트 작성은 가장 기본이 됩니다. 여기서는 컴포넌트를 작성, 호출, 등록 방법을 알아보겠습니다.',
    route: 'posts/3',
  },
  {
    title: 'Angular 데이터 바인딩',
    robot: '웹앱을 구축할 때 뷰와 모델의 분리가 필수인데 데이터바인딩을 통해 뷰와 모델을 \'연결\' 시켜줍니다. 앵귤러는 7가지의 데이터 바인딩을 제공하는데 바인딩의 흐름을 알아보고 또 종류별로 알아보도록 하겠습니다.',
    route: 'posts/4',
  },
  {
    title: 'Angular 빌트인 디렉티브, 템플릿 참조변수, 세이프 네비게이션 연산자',
    robot: '디렉티브는 DOM 의 모양이나 동작을 관리하기 위한 명령입니다. ~~ 를 해라 라고 시키는것입니다. Angular 는 3가지 유형의 디렉티브가 있습니다. 컴포넌트 디렉티브 : 컴포넌트의 \'템플릿\'을 표시하기 위한 디렉티브 어트리뷰트 디렉티브 : HTML 요소의 어트리뷰트와 같이 사용하여 요소의 모양이나 동작을 제어 (ngClass, ngStyle) 구조 디렉티브 : DOM 요소를 반복생성(ngFor), 조건에 의한 추가제거(ngIf, ngSwitch)를 통해 DOM 레이아웃 변경 그리고 템플릿 참조변수와 세이프 네비게이션 연산자를 알아보겠습니다.',
    route: 'posts/5',
  },
  {
    title: 'Angular 컴포넌트 상태 공유',
    robot: '앵귤러 컴포넌트를 중심으로 웹앱이 만들어집니다. 때문에 컴포넌트는 재사용성이 높게끔 작성하는것이 좋습니다. 다시말해, 다른 컴포넌트와의 결합도를 낮게 유지하면서 상태 정보를 교환할 수 있어야합니다.',
    route: 'posts/6',
  },
  {
    title: 'Angular 부모 컴포넌트에서 자식 요소로의 접근',
    robot: '부모 컴포넌트에서 자식 컴포넌트에 접근이 필요한 경우가 있는데, 이 때 템플릿 참조 변수를 사용해 접근할 수 있다.',
    route: 'posts/7',
  },
  {
    title: 'Angular 컴포넌트와 스타일',
    robot: '컴포넌트는 독립된 스타일 정보를 갖습니다. 때문에 A 컴포넌트에서 작성한 스타일과 B 컴포넌트에서 작성한 스타일 클래스가 겹치더라도 서로 영향을 주지 않습니다. 이 섹션에서는 컴포넌트와 스타일에 관련된 주제를 다루겠습니다.',
    route: 'posts/8',
  },
  {
    title: 'Angular 디렉티브',
    robot: '디렉티브(Directive) 는 DOM 의 모양이나 동작 등의 모든것을 관리하기 위한 명령입니다. 이 섹션에서는 디렉티브에 대해 자세히 살펴보겠습니다.',
    route: 'posts/9',
  },
  {
    title: 'Angular 파이프',
    robot: '데이터형식중에서는 익숙한 형태가 아닐 수 있습니다. 때문에 익숙한 형태로 바꾸어 보여주는것이 편합니다. 하지만 그 데이터 자체를 변형시켜서 보여주기에는 side effect 가 발생할 수 있으므로 화면에 표시되는 형식만 변경하고 싶을 때 사용하는 것이 파이프입니다.',
    route: 'posts/10',
  },
  {
    title: 'Angular LifeCycle',
    robot: '컴포넌트와 디렉티브는 생명주기를 갖습니다. 즉 컴포넌트와 디렉티브가 생성하고 소멸되기까지의 과정들을 말하고 Angular에 의해 관리됩니다. 이 장에서는 앵귤러가 관리하는 생명주기에 대해 알아보고 각 라이프사이클별로 어떤역할을 하는지 알아보겠습니다.',
    route: 'posts/11',
  },
  {
    title: 'Angular 서비스',
    robot: '컴포넌트는 뷰(view) 를 생성하고 관리하는것이 주된 역할입니다. 컴포넌트를 만들 때 주 관심사(뷰를 관리) 이외의 서버 통신 등과 같은 기능들이 들어가있다면 독립적이지 못하게됩니다. 때문에 서비스로 따로 빼는것이 컴포넌트의 재사용성을 높여줍니다. 이 장에서는 서비스에 대해서 알아보겠습니다.',
    route: 'posts/12',
  },
  {
    title: 'Angular 리액티브 프로그래밍과 RxJS',
    robot: '앵귤러 CLI 를 사용해 생성한 프로젝트는 RxJS 가 포함되어있고 RxJS 는 리액티브 프로그래밍 패러다임입니다. 리액티브 프로그래밍에 관해 그리고 RxJS 를 살펴보겠습니다.',
    route: 'posts/13',
  },
  {
    title: 'Angular HTTP 통신',
    robot: '대부분의 웹 애플리케이션에서 HTTP 통신은 필수입니다. HttpClient 클래스를 통해 HTTP 요청 API와 인터셉터를 제공합니다. 이 섹션에서는 http 통신에 대해서 다뤄보겠습니다.',
    route: 'posts/14',
  },
  {
    title: 'Angular 폼과 유효성 검증',
    robot: '웹 애플리케이션에서 폼은 사용자의 입력을 받는 인터페이스 입니다. HTML 표준 입력폼을 사용해도되지만 단점과 한계(submit 누르면 페이지전환, 세밀한 유효성검사의 어려움 등)가 있습니다. 그리고 Angular 폼을 사용하여도 애플리케이션이 복잡해지면 테스트도 힘들어집니다.',
    route: 'posts/15',
  },
  {
    title: 'Angular 모듈',
    robot: '앵귤러의 모듈(NgModule) 은 관련이 있는 구성요소(컴포넌트, 디렉티브, 파이프, 서비스 등)를 하나의 단위로 묶는 메커니즘을 말합니다. 이 장에서는 모듈에 대해 다뤄보겠습니다.',
    route: 'posts/16',
  },
  {
    title: 'Angular 라우팅과 네비게이션',
    robot: '라우팅과 네비게이션에 들어가기전에 Angular, React, Vue 와 같은것들이 왜 생겨났는지에 대해 알아 볼 필요가 있습니다. 현재 모바일로 인터넷을 접속하는 일이 많아지고, 웹이 더이상 \'문서\'에 국한되지않고 마치 네이티브 앱처럼 하나의 애플리케이션으로 자리잡고 있습니다. 사용자와의 인터랙션들이 많아지고 사용자들을 웹에서도 네이티브 앱처럼 반응성, 트래픽 감소, 속도 등을 느끼고 싶었을 겁니다.',
    route: 'posts/17',
  },
  {
    title: 'Zone.js 와 변경감지',
    robot: '앵귤러에서 데이터 바인딩을 할 때 브라우저에서 뷰로 데이터를 전달할 때는 이벤트를 통해 전달하게 되므로 데이터가 변경됨을 알 수 있습니다. 하지만 반대로 데이터가 변경되었음을 알고 뷰에서 바뀌는 것은 자바스크립트 자체 기능에는 없는데 이것을 가능하게 해주는것이 Zone.js 입니다.',
    route: 'posts/18',
  },
  {
    title: '변경감지 전략',
    robot: 'OnChanges 는 @Input 멤버변수의 레퍼런스가 변경될 때만 호출이 된다고 하였는데, 데이터의 레퍼런스가 변경되지 않았음에도 어쨌든 컴포넌트의 데이터가 변경되었는지 확인을 하는 작업을 수행합니다.',
    route: 'posts/19',
  },
  {
    title: '<ng-template> 과 동적 뷰',
    robot: '먼저, <template> 의 태그를 알아보자면 미리 정의해 둔 HTML 을 필요한 시점에 동적으로 인스턴스화해 출력을 삽입할 수 있는 표준적인 방법 입니다. 즉, DOM 트리에는 존재하지만 인스턴스화를 통해 화면에 출력이 된다는 것입니다.',
    route: 'posts/20',
  },
  {
    title: 'ElementRef, ViewRef, ComponentRef, ViewContainerRef',
    robot: '역할 특정 엘리먼트를 기반으로 작동해야 하는 어떤 기능에 대해 대상 엘리먼트를 지정해주는 역할을 합니다. 특징 다양한 환경(플랫폼)에서 실행될 수 있는것을 염두에 둔 추상화된 객체, 플랫폼에 따라 nativeElement 는 다른 객체가 됩니다. 생성자에 주입되는 ElementRef 는 루트 엘리먼트 다른 플랫폼에서도 실행될 가능성을 염두에 둔 부분이기 때문에 Renderer2 의 메서드를 이용하여 처리하는것이 좋습니다.',
    route: 'posts/21',
  },
  {
    title: '구조적 디렉티브 활용',
    robot: '*ngFor 문법은 아래의 형태로 변환됩니다. 눈여겨볼 점은 다음과 같습니다. ngFor 디렉티브 [ngForOf] 어트리뷰트의 list 속성 바인딩 ngFor 와 ngForOf 가 selector 에 정의되어있고, ngForOf 에 데이터바인딩이 됩니다. 그리고 ngForOf 는 NgIterable<T> 타입으로 정의되고 있습니다.',
    route: 'posts/22',
  },
  {
    title: '쿼리스트링을 저장하자',
    robot: '앵귤러 라우팅을 공부하고 적용하다가 쿼리스트링을 저장하고 이에 대한 활용방안에 대해 적어보려합니다. query string 쿼리스트링은 url 의 마지막에 ? 를 붙여 일종의 데이터를 붙여넣는 방식입니다. 예를들어 http://localhost:4200/users?page=1&type=admin',
    route: 'posts/23',
  },
  {
    title: 'Angular 의존성 주입 (Dependency Injection)',
    robot: '앵귤러에서 사용되는 의존성 주입 방법이 여러가지 있는데 하나씩 살펴봅니다.',
    route: 'posts/24',
  },
];
