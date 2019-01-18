<div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png" style="width: 100px; height: 100px;">
</div>

# Angular 폼과 유효성 검증
웹 애플리케이션에서 폼은 사용자의 입력을 받는 인터페이스 입니다. HTML 표준 입력폼을 사용해도되지만 단점과 한계(submit 누르면 페이지전환, 세밀한 유효성검사의 어려움 등)가 있습니다. 그리고 Angular 폼을 사용하여도 애플리케이션이 복잡해지면 테스트도 힘들어집니다.

여기서는 앞서 말한 폼들과는 다른 '템플릿 기반 폼'과 '리액티브 폼'에 대해 다뤄보겠습니다.

## 📝 목차
* 템플릿 기반 폼
  * NgForm 디렉티브
    * novalidate
    * ngNoForm
    * 내부에서 벌어지는 일
  * NgModel 디렉티브
  * NgModelGroup 디렉티브
  * NgModel과 양방향 바인딩
  * 템플릿 기반 폼 유효성 검증
  * 템플릿 기반 폼 요약
* 리액티브 폼
  * FormGroup 클래스
    * formGroup 디렉티브
    * FormGroupName 디렉티브 
  * FormControl 클래스 
    * formControlName 디렉티브 
    * 옵저버블 이벤트 스트림 
  * FormArray 클래스 
    * formArrayName 디렉티브
    * 간단한 예제 
  * 리액티브 폼 유효성 검증 
    * Validators 클래스 
  * 사용자 정의 검증기 
  * FormBuilder 

## 템플릿 기반 폼
템플릿 기반 폼은 컴포넌트 템플릿에서 '디렉티브'를 사용하여 폼을 구성하는 방식으로 필드의 형식, 유효성 검증 규칙 모두 템플릿에서 정의합니다. 사용 범위는 비교적 간단한 폼에 사용합니다.

### [NgForm 디렉티브](https://angular.io/api/forms/NgForm)
#### novalidate
```HTML
<form novalidate></form>
```
novalidate 어트리뷰트를 추가하면 HTML표준 폼의 유효성 검증기능을 비활성화 합니다.

#### ngNoForm
```HTML
<form ngNoForm></form>
```
폼 요소에 자동으로 적용되는 NgForm 디렉티브의 적용을 취소하려면 ngNoForm 을 추가합니다.


ngForm 디렉티브가 적용된 템플릿 기반 폼은 `submit`을 할 시 `submit` 이벤트를 인터셉트하여 폼 데이터를 서버로 전송하고 페이지를 전환하는 기본 동작을 막습니다.

즉, `submit`이벤트를 대신하여 NgForm 디렉티브가 방출하는 ngSubmit 을 사용합니다.

```HTML
<form (ngSumbit)="onNgSumbit()" novalidate></form>
```

템플릿 기반 폼에도 템플릿 참조 변수를 사용할 수 있는데 참조변수에 ngForm 을 할당하여 네이티브 DOM 이 아닌 NgForm 인스턴스를 가리키도록 합니다.
```HTML
<form #f="ngForm" (ngSubmit)="onNgSubmit(f)" novalidate></form>
```

#### 내부에서 벌어지는 일
NgForm 인스턴스는 NgForm 디렉티브가 생성하는 인스턴스로서 폼 전체를 관리합니다.
```
NgForm 인스턴스 생성
-> 자신이 적용된 폼 요소의 값 또는 유효성 검증 상태를 추적할 수 있는 기능을 제공하는 FormGroup 인스턴스 생성
-> NgForm 인스턴스의 프로퍼티로 추가
-> FormGroup 이 프로퍼티로 추가된 NgForm 인스턴스를 참조변수가 가리킴
만약 -> 폼 요소의 자식 폼 컨트롤 요소 중 NgModel 디렉티브가 적용된것이 있다면
    -> FormControl 인스턴스를 생성하고 FormGroup 인스턴스의 프로퍼티로 추가
```
즉, 폼 유효성 검사를 할 때 FormControl 인스턴스 중 하나라도 유효하지 않다면 FormGroup 상태는 invalid 상태가 됩니다.

### [NgModel 디렉티브](https://angular.io/api/forms/NgModel)
ngModel 디렉티브를 사용하면 자신이 적용된 폼 컨트롤 요소의 값이나 유효성 검증 상태의 추적기능을 제공하는 FormControl이 생성됩니다. 그리고 템플릿 기반 폼의 기본단위입니다.

ngForm 을 가리키는 템플릿 참조변수의 `value` 프로퍼티를 통해 ngModel로 생성된 FormControl 인스턴스의 값들을 조회할 수 있습니다.
```html
<form #userForm="ngForm" (ngSubmit)="onNgSubmit(userForm)" novalidate>
  <input type="text" name="userid" placeholder="userid" ngModel>
  <input type="password" name="password" placeholder="password" ngModel>
  <button>submit</button>
</form>
```
```ts
...
onNgSubmit(userForm: NgForm) {
  console.log(userForm.value);
  // { id: 'foo', password: 'bar'}
}
```

FormControl 의 key 는 name 어트리뷰트 값이므로 **반드시 name 어트리뷰트를 지정해야합니다.**

FormControl 에도 템플릿 참조변수를 사용할 수 있습니다.
```html
<input type="text" name="userid" ngModel #userid>
<input type="text" name="userid" ngModel #userid="ngModel">
```
위와 같은 경우는 `#userid` 가 네이티브DOM 을 가리키지만 **아래와 같은 경우는 NgModel 인스턴스를 가리킵니다.**
```html
<input type="text" name="userid" ngModel #userid="ngModel">
{{ userid.value }}
{{ userid.valid }}
```
`value` 에는 값, `valid`에는 해당 폼이 유효한지의 여부를 알려줍니다.

### [NgModelGroup 디렉티브](https://angular.io/api/forms/NgModelGroup)
NgModelGroup 디렉티브는 NgForm 과 유사하게 FormGroup 인스턴스를 생성하고 NgModelGroup 디렉티브가 적용된 폼 그룹 요소의 자식 요소 중에서 NgModel 디렉티브가 적용된 요소를 탐색해 FormGroup 인스턴스에 추가합니다.

다시말해 NgModelGroup 으로 폼컨트롤이 그룹화 된다고 생각하면 될 것 같습니다.

```html
<form #userForm="ngForm" (ngSubmit)="onNgSubmit(userForm.value)" novalidate>
  <input type="text" name="userid" placeholder="userid" ngModel>
  <div ngModelGroup="password">
    <input type="password" name="password1" placeholder="password" ngModel>
    <input type="password" name="password2" placeholder="confirm password" ngModel>
  </div>
  <button type="submit">확인</button>
</form>
```
```ts
...
onNgSubmit(user) {
  console.log(user);
  /*
  { userid: '',
    password: {
      password1: '',
      password2: '',
    }
  }
  */

  if (user.password.password1 !== user.password.password2) {
    console.log('패스워드가 일치하지 않습니다.');
  }
}
```

### NgModel과 양방향 바인딩
**양방향 데이터 바인딩** : 뷰와 컴포넌트 클래스의 상태 변화를 상호 반영하는 것

앵귤러는 양방향 바인딩을 지원하지 않습니다. 양방향 바인딩은 프로퍼티바인딩 + 이벤트 바인딩의 축약형 표현일 뿐입니다.
```html
<input type="text" [(ngModel)]="name">
<input type="text" [ngModel]="name" (ngModelChange)="name=$event">
```
`[ngModel]`프로퍼티 바인딩은 컴포넌트 프로퍼티 `name`의 상태 변화를 받아서 업데이트시키고,  
`(ngModelChange)` 이벤트 바인딩은 상태 변화 이벤트를 방출해 `name`의 상태를 업데이트 합니다.

### 템플릿 기반 폼 유효성 검증
NgForm, NgModel, NgModelGroup 디렉티브를 폼 컨트롤에 적용하면 FormGroup 또는 FormControl 인스턴스를 생성하는데 이 둘은 유효성 검증 기능을 제공합니다.

FormGroup과 FormControl 은 [AbstractControl](https://angular.io/api/forms/AbstractControl)을 상속한 클래스입니다.

```ts
abstract class AbstractControl {
  constructor(validator: ValidatorFn, asyncValidator: AsyncValidatorFn)
  // ... 생략
  valid: boolean
  invalid: boolean
  errors: ValidationErrors | null
  pristine: boolean
  dirty: boolean
  touched: boolean
  untouched: boolean
}
```
위는 AbstractControl 추상클래스의 일부를 나타낸 것인데 추려낸 프로퍼티들은 '유효성 검증 상태 프로퍼티'입니다.  
차례로 살펴보자면 다음과 같습니다.

* **errors**: 유효성 검증에 실패한 경우, ValidationErrors 타입의 에러 객체 반환. 성공한 경우 null 반환
* **valid**: 유효성 검증에 성공한 상태일 경우 true
* **invalid**: 유효성 검증에 실패한 상태일 경우 true
* **pristine**: 값을 한 번도 입력하지 않은 상태이면 true
* **dirty**: 값을 한 번 이상 입력한 상태이면 true
* **touched**: focus in 이 한 번 이상 발생한 상태이면 true
* **untouched**: focus in 이 이 한 번도 발생하지 않은 상태이면 true

간단한 예제
```html
<input type="text"
  name="title"
  ngModel
  #title="ngModel"
  pattern="[a-zA-Z0-9]{4,10}"
  required>

<em *ngIf="title.errors?.required && title.touched">title을 입력하시오</em>
<em *ngIf="title.errors?.pattern && title.touched">title은 영문 또는 숫자로 4자리 이상 10이하로 입력</em>

<p>errors: {{ title.errors | json }}</p>
<p>invalid: {{ title.invalid }}</p>
<p>dirty: {{ title.dirty }}</p>
<p>touched: {{ title.touched }}</p>
<p>pristine: {{ title.pristine }}</p>
```

### 템플릿 기반 폼 요약

1. NgForm, NgModel, NgModelGroup 디렉티브를 템플릿 내의 폼 요소 또는 폼 컨트롤 요소에 선언
2. 내부적으로 FormGroup, FormControl의 폼 모델 인스턴스 생성
3. 인스턴스를 폼요소/폼 컨트롤 요소에 바인딩해 값이나 유효성 검증상태 추적

## 리액티브 폼
템플릿 기반 폼은 폼 모델을 직접 정의/생성할 수 없고 접근할 수 없었습니다. 폼 모델에 접근하려면 템플릿 참조 변수에 폼모델을 할당했어야 했습니다.  
리액티브 폼은 컴포넌트 **클래스 내부에서 정의/생성한 폼 모델에 직접 접근** 하여 데이터 모델을 폼 모델에 반영하고 템플릿의 폼 컨트롤 요소의 상태 변화를 **관찰(observe)합니다.** 템플릿 기반 폼보다 비교적 복잡한 경우 사용하는것이 좋습니다. 리액티브 폼을 이용하기 위해서는 `@angular/forms` 패키지의 `ReactiveFormsModule`을 모듈에 추가해줍니다.

```ts
// app.module.ts
...
import { ReactiveFormsModule } from '@angular/forms'; // import

@NgModule({
  ...
  imports: [ ..., ReactiveFormsModule ], // 추가
  ...
})
```
요약하자면, 리액티브 폼은 템플릿이 아닌 컴포넌트 클래스에서 폼 요소의 상태를 관리하는 객체인 '폼 모델'을 구성하는 방식입니다.

### [FormGroup 클래스](https://angular.io/api/forms/FormGroup)
FormGroup 클래스가 생성하는 FormGroup 인스턴스는 자신의 자식인 FormControl 인스턴스나 FormArray 인스턴스를 '그룹화' 하여 관리하는 최상위 컨테이너 입니다. 이 말은 자식의 요소의 일부중 하나라도 유효성 검증이 안된 false 상태일경우 해당 FormGroup은 유효하지 않습니다.

템플릿 기반 폼에서는 NgForm디렉티브를 사용하여 인스턴스를 생성했지만 리액티브 폼에서는 컴포넌트 클래스에 직접 생성하고 프로퍼티 바인딩합니다.

**인스턴스 생성**
```ts
myFormGroup: FormGroup;

ngOnInit() {
  this.myFormGroup = new FormGroup({
    // 자식 폼 모델 인스턴스
  });  
}
```

### [formGroup 디렉티브](https://angular.io/api/forms/FormGroupDirective)
formGroup 디렉티브를 사용해 바인딩합니다.
**바인딩**
```html
<!-- 프로퍼티 바인딩 -->
<form [formGroup]="myFormGroup" novalidate></form>
```
### [FormGroupName 디렉티브](#https://angular.io/api/forms/FormGroupName)
FormGroupName 디렉티브는 FormGroup 인스턴스의 자식 FormGroup 인스턴스의 자식 FormGroup 인스턴스와 폼 컨트롤 요소를 바인딩합니다.
```html
<form [formGroup]="myForm" novalidate>
  <div FormGroupName="formControls"></div>
</form>
```
```ts
ngOnInit() {
  this.myForm = new FormGroup({
    formControls: new FormGroup({})
  })
}
```
myForm 인스턴스의 자식인 폼 컨트롤을 갖습니다.
```
myForm
  ├─ formControls
  ├─ somethingFormGroup
  └─ formControls
      ├─ ...
      └─ ...
```
### [FormControl 클래스](#https://angular.io/api/forms/FormControl)
FormControl 클래스를 이용해 생성한 FormControl 인스턴스는 폼을 구성하는 기본단위입니다. 폼 컨트롤의 값이나 유효성 검사를 파악하고 뷰와 폼 모델을 동기화시킵니다. 템플릿 기반 폼의 NgModel 과 대응됩니다.

```ts
const myFormControl = new FormControl('init value');
```

#### [formControlName 디렉티브](https://angular.io/api/forms/FormControlName)
formControlName 을 사용해 FormControl 인스턴스와 템플릿 폼 컨트롤 요소를 바인딩 합니다.
```HTML
<input type="text" formControlName="myControlName">
```
```ts
myControlName: FormControl = new FormControl('');
```

#### 옵저버블 이벤트 스트림
FormControl은 폼 요소 없이도 사용가능합니다. `input` 요소의 이벤트는 FormControl의 valueChanges 프로퍼티에 의해 옵저버블 스트림으로 변환됩니다.

*formControl 내부*
```
myControls: {
  ...생략
  valueChanges: EventEmitter {_isScalar: false, observers: Array(0), closed: false, isStopped: false, hasError: false, …}
}
```

### [FormArray 클래스](https://angular.io/api/forms/FormArray)
FormArray 클래스가 생성하는 FormArray 인스턴스는 js 의 배열과 유사합니다. 하는 역할은 FormControl 인스턴스들을 그룹화 하여 관리하는데 FormArray는 폼 컨트롤 요소가 동적으로 생성되어 개수가 변할 때 사용합니다.
```ts
const myFormArray = new FormArray([
  new FormControl(''),
  new FormControl(''),
  ...
])
```
#### [formArrayName 디렉티브](https://angular.io/api/forms/FormArrayName)
formArrayName 디렉티브는 FormArray 인스턴스를 DOM 요소에 '바인딩'할 때 사용합니다.
```HTML
<div formArrayName="myArrayName">
  ...
</div>
```

#### 간단한 예제
extend 버튼을 누르면 FormArray 에 폼 컨트롤이 하나 push 되어 관리되어야하는 폼 컨트롤이 증가하는 예제입니다.

```html
<!-- mycomponent.component.html -->
<form [formGroup]="userForm" novalidate>
  <div formArrayName="hobbies">
    <div *ngFor="let hobby of hobbies.controls; let i=index">
      <input type="text" [formControlName]="i">
    </div>
  </div>
</form>

<button (click)="extendHobbies()">extend</button>

<pre>{{ userForm.value | json }}</pre>
<pre>{{ userForm.status }}</pre>
```

```ts
// mycomponent.component.ts
// 생략
export class AppComponent implements OnInit {

  userForm: FormGroup;

  ngOnInit(): void {
    this.userForm  = new FormGroup({
      hobbies: new FormArray([
        new FormControl(''),
        new FormControl(''),
      ])
    });
    console.log(this.userForm);
  }

  extendHobbies() {
    this.hobbies.push(new FormControl(''));
  }

  // getter 를 통한 접근
  get hobbies(): FormArray {
    return <FormArray>this.userForm.get('hobbies');
  }
}
```
getter 를 통해 폼 모델에 접근한것을 확인합니다.

### 리액티브 폼 유효성 검증
템플릿 기반 폼은 템플릿의 폼 컨트롤 요소에 빌트인 검증기(유효성 검사)를 넣습니다. 리액티브 폼은 컴포넌트 클래스 내부의 FormControl 에 검증기를 '추가' 합니다. 그리고 이렇게 추가된 검증기는 FormControl 요소에 변화가 생길때마다 호출됩니다.

사용가능한 빌트인 검증기는 Validators 클래스에 static 메서드로 정의되어있는데 이것을 추가해주면 됩니다.

```ts
// mycomponent.component.ts
import { Validators } from '@angular/forms'; // 임포트
...
this.userForm = new FormGroup({
  userid: new FormControl('', [ // 여러개인경우 배열로 처리
    Validators.required,
    Validators.pattern('[a-zA-Z0-9]{4,10}'),
  ]),
  passwordGroup: new FormGroup({
    password: new FormControl('', Validators.required), // 단일 검증은 그냥 넣어줌
    confirmPassword: new FormControl('', Validators.required),
  }),
});
```

참고해야할 점은 만약 2개이상의 검증이 필요한경우엔 `[]` 배열 요소로 넣어줍니다.

#### [Validators 클래스](#https://angular.io/api/forms/Validators)
```ts
class Validators {
  static min(min: number): ValidatorFn
  static max(max: number): ValidatorFn
  static required(control: AbstractControl): ValidationErrors | null
  static requiredTrue(control: AbstractControl): ValidationErrors | null
  static email(control: AbstractControl): ValidationErrors | null
  static minLength(minLength: number): ValidatorFn
  static maxLength(maxLength: number): ValidatorFn
  static pattern(pattern: string | RegExp): ValidatorFn
  static nullValidator(control: AbstractControl): ValidationErrors | null
  static compose(validators: ValidatorFn[]): ValidatorFn | null
  static composeAsync(validators: AsyncValidatorFn[]): AsyncValidatorFn | null
}
```

### 사용자 정의 검증기
내장되어있는 빌트인 검증기를 사용해도 되지만 직접 만들어서 써야하는 경우도 있습니다. 이럴 경우 사용자 정의 검증기(Custom validators) 를 만들고 사용은 템플릿 기반 폼과 리액티브 기반 폼 모두 사용할 수 있습니다.

재사용성을 위해 외부 클래스로 분리하는것이 일반적입니다.
```
my-project
  ├─ ...
  └─ src
      ├─ ...
      └─ app
          ├─ ...
          └─ validation
```


#### FormGroup 인스턴스 적용시
AbstractControl 을 이용하고 `.get('').value` 을 통해 formControlName 의 값을 가져옵니다.

> AbstractControl 클래스의 get 메서드는 폼 모델의 자식 인스턴스를 검색할 때 사용합니다.

**생성**
```ts
// myvalidator.ts
import { AbstractControl } from '@angular/forms';

export class MyValidator {
  static myValid(form: AbstractControl) {
    // 폼 모델에서 formControlName 의 값을 가져옴
    const formControlName1 = form.get('formControlName1').value;
    const formControlName2 = form.get('formControlName2').value;

    // 검증의 성공 유무에 따른 return 분기
    return
  }
}
```
**사용**
```ts
import { MyValidator } from 'path';

...
export class MyComponent implements OnInit {
  ngOnInit(): void {
    this.userForm = new FormGroup({
      userid: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]{4,10}'),
      ]),
      passwordGroup: new FormGroup({
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required),
      }, PasswordValidator.match), // 두번째 인자로 그룹에 대한 유효성 검사 추가
    });
  }
}
```

#### FormControl 인스턴스 적용시
FormGroup 처럼 AbstractControl 을 사용한다면 `form.value` 로 단일값을 가져옵니다. 또는 FormControl 을 사용할 수도 있습니다.
**생성**
```ts
import { AbstractControl } from '@angular/forms';

export class MyValidator {
  static myValid (form: AbstractControl) {
    const value = form.value; // 값 취득

    // 검증의 성공 유무에 따른 return 분기
    return
  }
}

/**************/
import { FormControl } from '@angular/forms';

export class MyValidator {
  static myValid (form: FormControl) {
    const value = form.value; // 값 취득

    // 검증의 성공 유무에 따른 return 분기
    return
  }
}
```
**사용**
```ts
import { MyValidator } from 'path';

...
export class MyComponent implements OnInit {
  ngOnInit(): void {
    this.userForm = new FormGroup({
      ...
      myKey: new FormControl('', [
        Validators.required,
        MyValidator.myValid, // 추가
      ])
    });
  }
}
```
### [FormBuilder](#https://angular.io/api/forms/FormBuilder)
FormBuilder 를 이용하면 좀 더 편리하게 이용할 수 있습니다. FormBuilder 의존성을 주입하면 다음과 같은 메서드들을 사용할 수 있습니다.

* group(): new FormGroup() 과 대응
* control(): new FormControl() 과 대응
* array(): new FormArray() 와 대응

**사용 예**
```ts
// mycomponent.component.ts

export class MyComponent implements OnInit {
  constructor(
    private fb: FormBuilder // 의존성 주입
  ){ }

  ngOnInit() {
    const userForm = this.fb.group({
      userid: ['', [
        Validators.required,
        Validators.pattern('~~'),
      ]],
      passwordGroup: this.fb.group({ // FormGroup
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, { validator: PasswordValidator.match }), // 옵션 객체를 통해 검증기 추가
      someArray: this.fb.array(['', ''])
    })
  }
}
...
```

**기존과의 차이점**
```ts
// FormBuilder 사용 전
passwordGroup: new FormGroup({
  password: new FormControl('', Validators.required),
  confirmPassword: new FormControl('', Validators.required)
}, PasswordValidator.match),

// FormBuilder 사용 후
passwordGroup: this.fb.group({
  password: ['', Validators.required],
  confirmPassword: ['', Validators.required]
}, { validator: PasswordValidator.match }),
```


## 참고문서
* [Angular Essentials - 이웅모](https://book.naver.com/bookdb/book_detail.nhn?bid=13761643)
