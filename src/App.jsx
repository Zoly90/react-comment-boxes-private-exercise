import React, {Component} from 'react';

class App extends Component {

    constructor(props)   {
        super(props);
        this.state = {editing: true};
    }

    add()   {
        this.setState({editing: true});
    }

    edit()  {
        this.setState({editing: true});
    }

    save()  {
        var enteredValue = this.refs.newText.value;
        this.props.updateCommentText(enteredValue, this.props.index);
        this.setState({editing: false});
    }

    remove()  {
        this.props.deleteFromBoard(this.props.index);
    }

    renderNormal()  {
        return (
            <div className="commentContainer">
                <div className="commentText">{this.props.children}</div>
                <button onClick={this.edit.bind(this)} className="buttonPrimary">Edit</button>
                <button onClick={this.remove.bind(this)} className="buttonRemove">Remove</button>
            </div>
        );
    }

    renderForm() {
        return (
            <div className="commentContainer">
              <textarea ref="newText" defaultValue={this.props.children}></textarea>
              <button onClick={this.save.bind(this)} className="buttonSave">Save</button>
            </div>
        );
    }

    render()    {
        if(this.state.editing) {
            return this.renderForm();
        }   else    {
            return this.renderNormal();
        }
    }
}

class Board extends Component{
    constructor(props)   {
        super(props);
        this.state = {commentList: [
            /*'Leave your comment',
            'Suck it up ',
            'Let-s write some code'*/
            ]
        }
    }

    addComment(text)    {
        var currentArray = this.state.commentList;
        currentArray.push(text);
        this.setState({commentList: currentArray});
    }

    removeComment(i) {
        var currentArray = this.state.commentList;
        currentArray.splice(i, 1);
        this.setState({commentList: currentArray});
    }

    updateComment(text, i) {
        var currentArray = this.state.commentList;
        currentArray[i] = text;
        this.setState({commentList: currentArray});
    }

    eachComment(text, i)   {
        return (
            <App key={i} index={i} updateCommentText={this.updateComment.bind(this)} deleteFromBoard={this.removeComment.bind(this)}>
                {text}
            </App>
        )
    }

    render()    {
        return(
            <div>
                <button onClick={this.addComment.bind(this, 'Default text')}>Add new</button>
                <div className="board">
                    {
                        this.state.commentList.map(this.eachComment.bind(this))
                    }
                </div>
            </div>
        );
    }
}


export default Board;
