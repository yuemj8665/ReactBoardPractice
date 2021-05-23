## React로 CRUD 게시판 만들기
==
### 1. 참고주소
1. [**리액트를 사용하여 CRUD 게시판을 만들자**](https://forest71.tistory.com/183)  
1.1. [**리액트를 사용하여 CRUD 게시판을 만들자 github**](https://github.com/gujc71/react_board)

### 2. 주절주절
    프론트엔드도 공부하기 위해서 요즘 말이 많은 React를 공부하기로 했다.
    백엔드만 해서는 결코 좋은게 없을것
    
    2021-05-21 완료
    하지만 뭔가 부족학 한 것 같다. JSX 기초분법도 모르면서 각각의 함수 옵션도 모르고 쓰는게 몇개 있었다.
    그 목록은 To do List에 정리 할 것.

### 3. TO DO List
    1. 참고주소에 있는 리액트 정주행
    2. 내가 가지고있는 board 프로젝트와 연동 할 방법을 검색해보자.
    
    ★ 모르는 함수 정리 (2021-05-21)
    1. shouldComponentUpdate
    shouldComponentUpdate()가 false를 반환하면 render()는 호출되지 않습니다.

    shouldComponentUpdate()를 사용하면 현재 state 또는 props의 변화가 컴포넌트의 출력 결과에 영향을 미치는지 여부를 React가 알 수 있습니다. 기본 동작은 매 state 변화마다 다시 렌더링을 수행하는 것이며, 대부분의 경우 기본 동작에 따라야 합니다.

    shouldComponentUpdate()는 props 또는 state가 새로운 값으로 갱신되어서 렌더링이 발생하기 직전에 호출됩니다. 기본값은 true입니다. 이 메서드는 초기 렌더링 또는 forceUpdate()가 사용될 때에는 호출되지 않습니다.

    이 메서드는 오직 성능 최적화만을 위한 것입니다. 렌더링을 방지하는 목적으로 사용할 경우 버그로 이어질 수 있습니다. shouldComponentUpdate()의 내용을 직접 작성하는 대신에 PureComponent를 사용하는 것이 좋습니다. PureComponent는 props와 state에 대하여 얕은 비교를 수행하고, 해야 할 갱신 작업을 건너뛸 확률을 낮춥니다.

    이 메서드를 직접 작성할 자신이 있다면, **this.props와 nextProps, 그리고 this.state와 nextState를 비교한 뒤 false를 반환하는 것으로 React가 갱신 작업을 건너뛰게 만들 수 있습니다.** 여기서 false를 반환하는 것이 자식 컴포넌트들이 각자가 가진 state의 변화에 따라 다시 렌더링을 수행하는 것을 막는 것은 아니라는 점에 주의하시길 바랍니다.

    shouldComponentUpdate() 내에서 깊은 동일성 검사를 수행하거나 JSON.stringify()를 사용하는 것을 권하지 않습니다. 아주 비효율적이며 성능을 떨어트릴 수 있습니다.

    현재, shouldComponentUpdate()가 false를 반환할 경우 UNSAFE_componentWillUpdate(), render(), 그리고 componentDidUpdate()는 호출되지 않습니다. 나중에는 shouldComponentUpdate()를 엄격한 지시자가 아닌 힌트로서 다루게 될 것이고, false의 반환을 반환하더라도 컴포넌트가 계속해서 다시 렌더링을 수행할 것입니다.

    -> shouldComponentUpdate()는 리액트의 생명주기 중, render()가 호출되기 전에 오류 발생 요인을 잡아서 True, False를 리턴시킨다.
    해당 리턴으로 내가 원하는 상황에서 render()를 호출시킬 수 있다. java로 말하자면 try,catch처럼 사용가능한 것 같음.

    2. const, let, var의 차이
    (https://gist.github.com/LeoHeo/7c2a2a6dbcf80becaaa1e61e90091e5d)



### 4. Error 확인 및 해결법 History

4.1.1. 컴파일 에러(1)

    Failed to compile.
    src\App1.js
    Line 37:16:  'App1' is not defined  no-undef
    Search for the keywords to learn more about each error.
4.1.2 에러 해결 방법

    2021-05-20
    class 이름을 잘못 지정했었다..
    파일 이름만 App1.js고, class App 라고 적고 App1을 못 찾는 건 당연하지..
    이런 사소한 실수가 없어야 속도가 빨라질 것.
    JAVA는 .java 파일 이름과 class이름이 다르면 바로 경고표시 띄워서 알기 편했지만,
    VSCode라 그런건지, 아니면 js가 원래 그런건지 알아채지 못하고 많은 시간을 소모했다.
    앞으로는 주의해서 코딩 해야겠다.

4.2.1. App5.js 글 타이틀 클릭 시 에러(2)

    App5.handleSelectRow
    C:/Users/MJMJ/react_board/src/App5.js:47
    44 |      })
    45 |  }
    46 |  handleSelectRow = (row) => {
    > 47 |      this.child.current.handleSelectRow(row);
        | ^  48 | }
    49 |  
    50 |  render() {
    View compiled
    BoardItem.handleSelectRow
    C:/Users/MJMJ/react_board/src/App5.js:82
    79 |    }
    80 |    handleSelectRow = () => {
    81 |        const { row, onSelectRow } = this.props;
    > 82 |        onSelectRow(row);
        | ^  83 |    }
    84 | 
    85 |    render() {
    View compiled
4.2.2 에러 해결 방법

    2021-05-20
    아직 해결 못함. 깃허브에 있는거 그대로 집어넣었는 데도 문제가 있다.

    2021-05-21 새벽
    기존 코드에 계속 덧 대는 구조로 강의가 진행하다보니 이전 단계의 파일을 복사-붙여넣기로 파일을 만들었다.
    그러다보니 중간에 비어있는 공간이 있었고, 에러 메세지는 해당 부분을 찍어주지 않기때문에 오류를 어디서찾는지 시간을 많이 소모하였다.
    시간이 조금 걸리겠지만 처음부터 하나하나 보고 치는게 좋을 것 같다.


### 5. 기타



