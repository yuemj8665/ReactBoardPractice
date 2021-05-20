import React, { Component } from 'react';

class App2 extends Component {
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
                {
                    boards.map(function (row) {
                        return row.brdno + row.brdwriter;
                    })
                }
            </div>
        );
    }
}

export default App2;

/**
 * 이전(App1)과 동일하게 글 번호와 작성자를 묶어서 출력하는 코드이다.
자바스크립트 코드 위치가 바뀌었고 대괄호({})를 사용한다.
데이터를 출력하는 코드는 render와 return 사이보다 return의 HTML 사이에서 많이 사용한다.

출처: https://forest71.tistory.com/187?category=683254 [SW 개발이 좋은 사람]
*/
