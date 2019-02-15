export const postgroup1 = [
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

export const postgroup2 = [
  {
    title: '<ng-template> 과 동적 뷰',
    robot: '먼저, <template> 의 태그를 알아보자면 미리 정의해 둔 HTML 을 필요한 시점에 동적으로 인스턴스화해 출력을 삽입할 수 있는 표준적인 방법 입니다. 즉, DOM 트리에는 존재하지만 인스턴스화를 통해 화면에 출력이 된다는 것입니다.',
    route: 'angular/posts/20',
  },
  {
    title: '변경감지 전략',
    robot: 'OnChanges 는 @Input 멤버변수의 레퍼런스가 변경될 때만 호출이 된다고 하였는데, 데이터의 레퍼런스가 변경되지 않았음에도 어쨌든 컴포넌트의 데이터가 변경되었는지 확인을 하는 작업을 수행합니다.',
    route: 'angular/posts/19',
  },
];
