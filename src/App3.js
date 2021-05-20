import React, { Component } from 'react';

class App3 extends Component {
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
        const { boards } = this.state;
        return (
            <div>
                <table border="1">
                    <tbody>
                        <tr align="center">
                            <td width="50">No.</td>
                            <td width="300">Title</td>
                            <td width="100">Name</td>
                            <td width="100">Date</td>
                        </tr>
                        {
                            boards.map(row =>
                                (<BoardItem key={row.brdno} row={row} />)
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

class BoardItem extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.row.brdno}</td>
                <td>{this.props.row.brdtitle}</td>
                <td>{this.props.row.brdwriter}</td>
                <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
            </tr>
        );
    }
}

export default App3;

/**
 * 테이블(table) 태그로 게시판 리스트처럼 출력하기
 * Div 태그를 사용하는것이 좋지만 CSS설정 등의 불필요한 코드 작성이 필요해 간단하게 Table 태그를 사용하여 작성한다.
 *
 * 기존 코드에 테이블 테그를 사용하여 리스트 헤드 [라인 7~14]를 작성한다.
그리고, boards에 있는 데이터를 행(tr)으로 출력하도록 작성하였다 [라인 16~18].
다만, 각 행을 BoardItem이라는 컴포넌트를 이용하여 출력하게 작성한다 [라인 27].

BoardItem 컴포넌트에 row라는 변수로 boards의 행(row)을 하나씩 지정해서 넘겨주고 [라인 17]
BoardItem 컴포넌트에서는 이 row를 this.props로 받아서 사용한다.

+주의
컴포넌트 자신이 사용하는 것은 state이고, 부모로부터 받은 것은 props이다. 이 개념을 잘 이해하면 React의 주요 개념 절반을 이해한 것이다.
BoardItem 컴포넌트를 사용하는 것은 React의 특징으로 React에서는 모든 기능을 컴포넌트로 구현하여 사용한다.

이상으로 글 리스트 기능을 구현하면서 React의 컴포넌트 개념을 사용하였다.
React는 기능을 세분화해서 컴포넌트로 구현하는 특징이 있다.
그리고, 부모(호출하는) 컴포넌트가 자식(호출 받는) 컴포넌트에 값을 넘겨주고 받는 방법을 정리하였다.

출처: https://forest71.tistory.com/187?category=683254 [SW 개발이 좋은 사람]
*/
