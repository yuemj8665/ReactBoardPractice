import React, { Component } from 'react';

class App5 extends Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
    }
    state = {
        maxNo: 3,
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

    handleSaveData = (data) => {
        let boards = this.state.boards;
        if(data.brdno === null || data.brdno === '' || data.brdno === undefined){
            this.setState({
                maxNo: this.state.maxNo+1,
                boards: boards.concat({
                    brdno: this.state.maxNo,
                    brddate: new Date(),
                    brdwriter: data.brdwriter,
                    brdtitle: data.brdtitle
                })
            });
        }
        else{
            this.setState({
                boards: boards.map(row => data.brdno === row.brdno ? {...data}:row)
            });
        }
    }
    handleRemove = (brdno) => {
        this.setState({
            boards: this.state.boards.filter(row => row.brdno !== brdno)
        })
    }
    handleSelectRow = (row) => {
        this.child.current.handleSelectRow(row);
   }
    
    render() {
        const { boards } = this.state;
        return (
            <div>
                <BoardForm onSaveData={this.handleSaveData} ref={this.child}/>
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
                                (<BoardItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />)
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

class BoardItem extends React.Component {
    handleRemove = () => {
        const { row, onRemove } = this.props;
        onRemove(row.brdno);
    }
    handleSelectRow = () => {
        const { row, onSelectRow } = this.props;
        onSelectRow(row);
    }

    render() {
        console.log(this.props.row.brdno);
        return (
            <tr>
                <td>{this.props.row.brdno}</td>
                <td><a href={()=>false} onClick={this.handleSelectRow}>{this.props.row.brdtitle}</a></td>
                <td>{this.props.row.brdwriter}</td>
                <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
                <td><a href={()=>false} onClick={this.handleRemove}>X</a></td>
            </tr>
        );
    }
}

class BoardForm extends Component{
    state = {
        brdwriter:'',
        brdtitle:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSelectRow = (row) => {
        this.setState(row);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSaveData(this.state)
        this.setState({
            brdno:'',
            brdwriter:'',
            brdtitle:''
        });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input placeholder="title" name="brdtitle" value={this.state.brdtitle} onChange={this.handleChange}></input>
                <input placeholder="name" name="brdwriter" value={this.state.brdwriter} onChange={this.handleChange}></input>
                <button type="submit">Save</button>
            </form>
        );
    }
}

export default App5;

/**
 * 값을 입력받아서 저장하는 글 쓰기 기능을 구현
 * 글쓰기에서는 그림과 같이 글 제목과 작성자를 입력하고 저장(save) 버튼을 누르면 입력한 내용이 baords 배열에 저장되도록 구현한다.
 * 글쓰기 기능을 구현하기 위해서는 HTML 컨트롤과 이벤트가 React와 연동되는 방법을 알아야 한다.
 * React(특히 이 예제)에서 가장 어려운 부분이라고 생각하니 코드의 의미에 대해서 제대로 이해하고 넘어가야 한다.
 * 
 * 
 * 글쓰기 기능을 구현할 BoardForm 컴포넌트를 생성하고 [라인 21],

글쓰기에서 사용할 state 변수와 handleChange, handleSubmit 이벤트 핸들러를 작성하였다.
1 라인에 선언된 state는 App 컴포넌트에서 사용하는 state 이고, 22 라인에서 선언한 state는 BoardForm내부에서 사용하는 state이다.
state는 컴포넌트 내부에서 사용할 변수로 이름이 고정되어 있다.

두 이벤트 핸들러는 화살표(=>) 함수로 작성하였다.
화살표 함수가 아닌 전통적인 함수로 작성하면 bind등의 제법 복잡한 처리를 해야 한다.
handleChange는 사용자가 값을 입력할 때 마다(onChange 이벤트) 입력하는 값을 받아서 state 변수에 각 컨트롤의 이름(brdtitle, brdwriter)으로 저장한다 [라인 24].
handleChange핸들러의 e는 자바스크립트의 change 이벤트에서 파라미터로 넘어오는 Event를 의미하고 e.target은 현재 이벤트가 발생한 개체,
즉 값을 입력하는 입력상자를 의미한다.
두 개의 입력상자가 각각 brdtitle, brdwriter로 지정되어 있기 때문에 [라인 39, 40] 각각의 이름으로 변수가 생성되어 사용자가 입력한 값이 저장된다.
입력 받는 값이 글 제목(brdtitle)과 작성자(brdwriter)이므로, brdtitle, brdwriter로 저장된다.

즉,
    state = {
        brdtitle: 값,
        brdwriter: 값
    }
으로 저장된다.
저장시 "this.state.brdwriter=값" 이나 "this.state[brdwriter]=값" 으로 저장하지 않고 setState 함수를 사용하여 저장한다 [라인 25].
React의 규칙이니 준수해야 하고, 이렇게 하지 않으면 웹 브라우저 콘솔 등에 경고가 출력된다 (다음 그림과 전후 설명 참조).

라인 39 와 40 에서 입력 상자와 handleChange를 연결하였다.
연결시 handleChange에 this를 붙여 사용하는데, 컴포넌트 내의 변수나 함수(이벤트 핸들러)를 참조할 때에는 this를 붙여야 한다.

handleSubmit은 Form 태그가 값을 서버로 전송할 때 발생하는 이벤트를 처리하기 위한 핸들러이다 [라인 38].
즉, 사용자가 값을 입력하고 저장할 때 발생한다.
실제로 서버로 보낼 것이 아니기 때문에 preventDefault로 이벤트를 중지한다 [라인 22].
그리고 onSaveData 함수를 호출하여 데이터를 저장한다.

onSaveData()는 BoardForm 컴포넌트에 있지 않고 [라인 32],
부모인 App 컴포넌트에 있기 때문에 this.props.onSaveData()로 사용한다 [라인5, 15].
onSaveData()는 부모로 부터 파라미터(this.props)로 받았다 [라인 15].
부모로부터 받은 것은 값이든 함수이든 항상 props를 사용해야 한다 [라인 32].
그리고 저장할 값은 stae에 있으니 함수를 호출하면서 this.state를 넘겨준다 [라인 32].

부모 (호출하는) App 컴포넌트에서는 값을 입력 받을 적당한 위치에 BoardForm 컴포넌트를 생성한다 [라인 15].
컴포넌트의 생성은 HTML 태그처럼 <BoardForm/>로 작성하면 된다.
BoardForm를 생성하면서 파라미터로 handleSaveData() 함수를 onSaveData()라는 이름으로 넘겨준다.
이것을 자식(호출받는) BoardForm에서는 this.props.onSaveData()로 호출한다 [라인 32].
호출 받은 부모의 handleSaveData()에서는 setState를 이용하여 [라인 6] state에 있는 baords배열에 값을 추가(concat)한다 [라인 7].
baords배열에 concat으로 추가하고 이것을 baords라는 이름으로 저장하는 방식으로 작성한다.

저장시 글 번호(brdno)와 작성일자(brddate)을 생성한다[라인 7].
작성일자는 자바스크립트 Date 클래스로 현재 날짜를 입력하고, 글 번호는 state에 추가한 변수 maxNo의[라인 2] 값을 사용한다.
기본적으로 baords에 데이터 2 건이 있으므로 maxNo은 3의 값을 가지고 있고, 글을 추가한 후에 1 증가(++) 한 값(다음 글번호)을 저장한다.

출처: https://forest71.tistory.com/187?category=683254 [SW 개발이 좋은 사람]
*/
