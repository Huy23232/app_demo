import React, { Component, Fragment } from "react";

import {
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Container,
} from "reactstrap";


class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            comment: '',
        };
    }



    componentDidUpdate(prevProps, prevState) {

    }

    click = (e) => {
        let { comment } = this.state;
        let obj = {
            author: 'Tuan',
            content: comment
        }
        this.props.comments.push(obj)
        this.setState({
            comment: '',
        })

    }

    onChangeComment = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    delete = (e, id, i) => {
        this.props.deleteComment(id, i)
    }

    render() {
        let { author, content, comments} = this.props;

        return (

                    <div className="item">
                        <div className="item-title">{author}</div>
                        <div className="item-content">{content}</div>
                        <div className="item-count">
                            <div style={{ width: '80%' }}>10 like</div>
                            <div style={{ textAlign: "right" }}>0 comment</div>
                        </div>
                        <div className="item-options">
                            <div className="hover" style={{ width: '50%', cursor: 'pointer' }}>Like </div>
                            <div className="hover" style={{ width: '50%', cursor: 'pointer' }}>Bình luận</div>
                        </div>
                        <div className="comment">
                            <div className="comment-item">
                                <div className="comment-item-title">Long</div>
                                <div className="comment-item-content">Search for the keywords to learn more about each warning.
                                    To ignore, add // eslint-disable-next-line to the line before.</div>
                            </div>
                            {comments.map((c, i) => {
                                return (
                                    <div className="comment-item">
                                        <div className="comment-item-title">{c.author}</div>
                                        <div className="comment-item-content">
                                            <div style={{ width: '80%'}}>{c.content}</div>
                                            <div style={{width: '20%'}} onClick={e => this.delete(e, this.props.id, i)}>Xóa</div>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                        <div className="item-input">
                            <Input style={{ backgroundColor: 'lightgray' }} value={this.state.comment} type="text" placeholder="Viết bình luận..." onChange={this.onChangeComment} />
                            <Button onClick={this.click} style={{ marginLeft: '5px' }}>Gửi</Button>
                        </div>
                    </div>
        );
    }
}
export default Comment;
