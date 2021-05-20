## React로 CRUD 게시판 만들기
==
### 1. 참고주소
1. [**리액트를 사용하여 CRUD 게시판을 만들자**](https://forest71.tistory.com/183)  
1.1. [**리액트를 사용하여 CRUD 게시판을 만들자 github**](https://github.com/gujc71/react_board)

### 2. 주절주절
    프론트엔드도 공부하기 위해서 요즘 말이 많은 React를 공부하기로 했다.
    백엔드만 해서는 결코 좋은게 없을것

### 3. TO DO List
    1. 참고주소에 있는 리액트 정주행
    2. 내가 가지고있는 board 프로젝트와 연동 할 방법을 검색해보자.


### 4. Error 확인 및 해결법 History
####4.1.1. 컴파일 에러(1)
    Failed to compile.
    src\App1.js
    Line 37:16:  'App1' is not defined  no-undef
    Search for the keywords to learn more about each error.
####4.1.2 에러 해결 방법
    class 이름을 잘못 지정했었다..
    파일 이름만 App1.js고, class App 라고 적고 App1을 못 찾는건 당연하지..
    이런 사소한 실수가 없어야 속도가 빨라질 것.
    앞으로는 주의해서 코딩 해야겠다.

####4.2.1. App5.js 글 타이틀 클릭 시 에러(2)
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
####4.2.2 에러 해결 방법
    2021-05-20... 아직 해결 못함. 깃허브에 있는거 그대로 집어넣었는데도 문제가 있다.





