import React, { Component, Fragment, useState, useEffect } from "react";

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
function Comment1(props) {
    const [id, setID] = useState()
    const [comment, setComment] = useState()
    const [countComment,setCountComment] = useState(0)
    const [like,setCountLike] = useState(0)
    const { author, content, comments } = props
        function click(e) {
            let obj = { 
                author: 'Tuan',
                content: comment
            }
            comments.push(obj)
            setComment("")
            setCountComment(countComment+1)
        }
        function onChangeComment(e) {
            let comment = e.target.value
            setComment(comment)
        }
        function deleteComment(e, id, i){
            props.deleteComment(id, i)
            setCountComment(countComment-1)
        }
        function countLike()
        {
            setCountLike(like+1)
        }
        useEffect(()=>{
            if(like==2)
            {
                setCountLike(like-1)
            }
        })
    return (
        <div className="item">
            <div className="item-title">{author}</div>
            <div className="item-content">{content}</div>
            <div className="item-count">
                <div style={{ width: '80%' }}>{like} like</div>
                <div style={{ textAlign: "right" }}>{countComment} comment</div>
            </div>
            <div className="item-options">
                <div className="hover" style={{ width: '50%', cursor: 'pointer' }} onClick={()=>countLike()}>Like </div>
                <div className="hover" style={{ width: '50%', cursor: 'pointer' }}>Bình luận</div>
            </div>
            <div className="comment">
                <div className="comment-item">
                    <div className="comment-item-title">Long</div>
                    <div className="comment-item-content">Search for the keywords to learn more about each warning.
                        To ignore, add // eslint-disable-next-line to the line before.</div>
                </div>
                {comments.map((c, i) => {
                    console.log(comments,'comment');
                    return (
                        <div className="comment-item">
                            <div className="comment-item-title">{c.author}</div>
                            <div className="comment-item-content">
                                <div style={{ width: '80%' }}>{c.content}</div>
                                <div style={{ width: '20%' }} onClick={e => deleteComment(e, props.id, i)}>Xóa</div>
                            </div>

                        </div>
                    )
                })}
            </div>
            <div className="item-input">
                <Input style={{ backgroundColor: 'lightgray' }} value={comment} type="text" placeholder="Viết bình luận..." onChange={onChangeComment} />
                <Button onClick={click} style={{ marginLeft: '5px' }}>Gửi</Button>
            </div>
        </div>
    )

}
export default Comment1;