#

##디렉토리구조
```
/index.html
/app
	/login
    /board
	./app.js
	./main.js
	./routes.js
	./config.js
/common
	/directive
	/model
	/service
/lib
	/angular
	/require
```

##angularjs_1.2
- IE8에서 angular 폴리필을 써서 지원 가능.

##angularjs_1.3
- IE8에서 전혀 사용할수 없음.
- html5 css3 폴리필등으로 해결되지 않음

##requirejs
- js를 비동기로 로드 할 수 있다.
- js의 로딩순서를 보장한다.
- 미사용시 js 모듈 및 리소스를 명시 순서로 다운로드 하기 때문에 로드가 느릴 수 있다.

##angularjs 플러그인
angular-animate
- 에니메이션 효과를 쉽게 제작할 수 있도록 도와준다.

angular-cookies
- 쿠키 라이브러리

angular-csp
- 로컬 app 제작에 필요한 확장 소스 (불필요함.)

angular-loader
- 동기 및 비동기로 리소스를 로드하는 라이브러리
- requirejs로 대체시 불필요함.

angular-mocks
- 목 만들때 편의재공

angular-resource
- RESTfull 처리시 http 요청을 도와준다.

angular-route
- 비동기로 화면을 새로 그릴때 화면 템플릿 및 http 요청을 처리하기위한 모듈
- 웹페이지 웹을 제작하기 위한 필수 플러그인
- 화면 새로고침을 했을때 현재 화면을 확인할 수 있는 back-end 처리가 필요함.

angular-sanitize
- html 페이지에 특수문자를 그대로 출력하기 위한 디렉티브 제공

angular-scenario
- karma(테스트 실행기)에 의하여 테스트 시나라오를 제작할때 시나리오대로 수행할수 있도록 도와준다.

angular-touch
- 모바일 터치

