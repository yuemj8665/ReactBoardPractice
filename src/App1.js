import React,{ Component } from 'react';

class App1 extends Component {
    state = {
        boards: [
            {
                brdno: 1,
                brdwriter: 'Lee SunSin',
                brdtitle: 'If you intend to live then you die',
                brddate: new Date()
            },
            {
                brdno: 2,
                brdwriter: 'So SiNo',
                brdtitle: 'Founder for two countries',
                brddate: new Date()
            }
        ]
    }

    render() {
        const { boards } = this.state
        const list = boards.map(function (row) {
            return row.brdno + " " +row.brdwriter;
        });
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default App1;

/**
 * 코드를 살펴보면 state 변수를 가장 먼저 선언하였다 [라인 4].
state 변수는 게시판 데이터를 배열로 가지는 boards 배열을 구성원(Json)으로 가지고 있다.
boards는 글번호(brdno), 작성자(brdwriter), 글제목(brdtitle), 작성일자(brddate)로 구성되고 2개의 데이터가 등록되어 있다 [라인 7~16].
데이터 베이스로 보면 4개의 필드와 2개의 행이 있는 것이다.

이 데이터(state)를 render()에서 출력한다 [라인 21~33].
render()는 React에서 화면을 생성하기 위해 실행하는 이벤트이다.
App 컴포넌트(Component)에 있는 state [라인 4]을 render()에서 사용하기 위해 this.state로 지정한다 [라인 22].
this는 자바스크립트에서 자기 자신(Component)을 의미한다.
this.state에 있는 것 중에서 하나를 가지고 올 때 사용하는 것이 대괄호({})로 state에 있는 데이터(boards)를 boards에 저장한다 [라인 22].
대괄호({})는 state에 변수가 많을 때 편하게 사용하는 코드로 다음과 같이 사용해도 된다.
    const { boards } = this.state;
    const boards = this.state. boards;
출처: https://forest71.tistory.com/187?category=683254 [SW 개발이 좋은 사람] 
*/
