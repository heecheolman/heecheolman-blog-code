export const postgroup1 = [
  {
    title: 'Angular 의존성 주입 (Dependency Injection)',
    robot: '앵귤러에서 사용되는 의존성 주입 방법이 여러가지 있는데 하나씩 살펴봅니다.',
    route: 'angular/posts/24',
  },
  {
    title: '쿼리스트링을 저장하자',
    robot: '앵귤러 라우팅을 공부하고 적용하다가 쿼리스트링을 저장하고 이에 대한 활용방안에 대해 적어보려합니다. query string 쿼리스트링은 url 의 마지막에 ? 를 붙여 일종의 데이터를 붙여넣는 방식입니다. 예를들어 http://localhost:4200/users?page=1&type=admin',
    route: 'angular/posts/23',
  },
];

export const postgroup2 = [
  {
    title: '구조적 디렉티브 활용',
    robot: '*ngFor 문법은 아래의 형태로 변환됩니다. 눈여겨볼 점은 다음과 같습니다. ngFor 디렉티브 [ngForOf] 어트리뷰트의 list 속성 바인딩 ngFor 와 ngForOf 가 selector 에 정의되어있고, ngForOf 에 데이터바인딩이 됩니다. 그리고 ngForOf 는 NgIterable<T> 타입으로 정의되고 있습니다.',
    route: 'angular/posts/22',
  },
  {
    title: 'ElementRef, ViewRef, ComponentRef, ViewContainerRef',
    robot: '역할 특정 엘리먼트를 기반으로 작동해야 하는 어떤 기능에 대해 대상 엘리먼트를 지정해주는 역할을 합니다. 특징 다양한 환경(플랫폼)에서 실행될 수 있는것을 염두에 둔 추상화된 객체, 플랫폼에 따라 nativeElement 는 다른 객체가 됩니다. 생성자에 주입되는 ElementRef 는 루트 엘리먼트 다른 플랫폼에서도 실행될 가능성을 염두에 둔 부분이기 때문에 Renderer2 의 메서드를 이용하여 처리하는것이 좋습니다.',
    route: 'angular/posts/21',
  },
];
