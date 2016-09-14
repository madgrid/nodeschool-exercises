
import React from 'react';

export default class TodoBox extends React.Component {
    render() {
        return (
        <div className="todoBox">
            <h1>Todos</h1>
            <TodoList data={this.props.data}/>
            <TodoForm />
        </div>
        );
    }
}

class TodoList extends React.Component {
    // Write code here
    render() {
        var todo = this.props.data.map(function (obj) {
            return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>
        });
        return (
            <div className="todoList">
                <table style={{border: "2px solid black"}}>
                    <tbody>
                        {todo}
                    </tbody>
                </table>
            </div>
        );
    }
}

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Checked: false};
    }

    handleChange(e) {
        this.setState({Checked: e.target.Checked});
    }

    render() {
        return (
            <tr>
                <td style={{border: "1px solid black"}}>
                    <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
                </td>
                <td style={style.tableContents}>{this.props.title}</td>
                <td style={style.tableContents}>{this.props.children}</td>
            </tr>
        );
    }
}

Todo.propTypes = {
    title: React.PropTypes.string.isRequired
};

class TodoForm extends React.Component {
    render() {
        return (
            <div className="todoForm">
                I am a TodoForm.
            </div>
        );
    }
}

let style = {
    tableContents: {
        border: "1px solid black"
    }
}
