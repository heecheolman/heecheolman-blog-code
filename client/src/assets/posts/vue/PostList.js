export default [
  {
    title: 'Vue.js 라이프사이클 이해하기',
    robot: 'Vue.js 라이프사이클 이해하기 Vue.js 의 라이프사이클은 크게 4가지로 나뉜다. Creation Mounting Updating Destruction 위의 그림은 Vue.js 의 라이프사이클 다이어그램이다. 빨간색폰트가 컴포넌트에서 사용할 수 있는 함수들이다. Creation : 컴포넌트 초기화 컴포넌트들을 초기화하는 단계이며 서버렌더링에서 지원되는 단계이다. 클라이언트나 서버 렌더 단에서 처리해야 일이 있으면 이 단계에서 진행한다. 아직 Component가 DOM 에 추가되기 전이므로 DOM에 접근할 수 없다.',
    route: 'posts/1',
  },
  {
    title: 'vue-template 종류 알아보기',
    robot: 'vuejs-templates Boilerplate 란? boilerplate 는 반복되며 자주 쓰이는 것들에 대해 미리 개발환경설정을 구성해놓은 일종의 템플릿 개념이다. front-end 개발을 하다보면 babel, webpack 등 많이 쓰이는 모듈들 또는 빌드 설정들, 폴더구조들을 반복적으로 설정하게되는데 이를 미리 만들어 놓는것이다. 이렇게 자동화를 해놓으면 갖다 쓰기만 하면돼서 개발환경구축에 시간과 비용을 단축시킬 수 있다. $vue list 해당 명령어를 통해 공식적인 뷰 템플릿의 리스트들을 확인할 수 있다.',
    route: 'posts/2',
  },
  {
    title: 'vue-webpack-template 의 빌드 파헤치기',
    robot: 'vue-webpack-template 의 빌드 파헤치기 vue의 webpack 보일러플레이트의 빌드를 알아보기위해 작성하였습니다. 틀린 부분도 많을것이지만 차차 알아가며 수정을 하도록 하겠습니다. 먼저, test 는 포함하지 않았습니다. 폴더 구조 vue 의 빌드과정을 알아보기위해 build 와 config 폴더를 세부적으로 알아보도록 하겠습니다.',
    route: 'posts/3',
  },
];
