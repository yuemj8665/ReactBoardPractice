import React, { Component } from "react"

import BoardForm from './App6_BoardForm'
import BoardItem from './App6_BoardItem'

class App6 extends Component {

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
        ],
        selectedBoard: {}
    }

    handleSaveData = (data) => {
        if (!data.brdno) { // new insert, 기존에 brdno가 없다면
            this.setState({
                maxNo: this.state.maxNo + 1,
                boards: this.state.boards.concat({
                    brdno: this.state.maxNo,
                    brddate: new Date(),
                    ...data
                }),
                selectedBoard: {}
            })
        }
        else { // update 그 외의 경우, 그러니까 기존에 brd번호가 존재한다면
            this.setState({
                boards: this.state.boards.map(row => data.brdno === row.brdno ? { ...data } : row),
                selectedBoard: {}
            })
        }
    }

    handleRemove = (brdno) => { // 글 삭제 시
        this.setState({
            boards: this.state.boards.filter(row => row.brdno !== brdno)
        })
    }

    handleSelectRow = (row) => { // 글 선택 시
        this.setState({
            selectedBoard: row
        })
    }

    render() {
        const { boards, selectedBoard } = this.state;

        return (
            <div>
                <BoardForm selectedBoard={selectedBoard} onSaveData={this.handleSaveData} />
                <table boarder='1'>
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

export default App6;