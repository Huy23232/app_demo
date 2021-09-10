import React, { Component, Fragment } from "react";
import Comment1 from "./Comment1";
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

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: '',
        data: [],
        comment: '',
    };
  }

  componentDidMount() {
    fetch('https://60ebfed7e9647b0017cddfbd.mockapi.io/post')
    .then(response => response.json())
    .then(data => {
        data.map(d => {
            d.comments = []
        });
        this.setState({ data })
        console.log('data', data);
    });
  }

  click = (e, id) => {
    let data = this.state.data;
    let obj = {
        author: 'Tuan',
        content: this.state.comment
    }
    data.map(d => {
        if(d.id === id) {
            d.comments.push(obj)
        }
    })
    this.setState({
        data,
        comment: '',
    })

  }

  onChangeComment = (e) => {
    this.setState({
        comment: e.target.value
    })
  }

  deleteComment = (id, pos) => {
    let data = this.state.data;
    data.map(d => {
        if(d.id === id) {
            d.comments.splice(pos, 1)
        }
    }) 
    this.setState(data)
  }

  render() {
    let { id, data} = this.state;

    return (
        <div className="demo">
            <Col xs={{ size: 4, offset: 4}} >
                <div><h2>Demo</h2></div>
                { data.map(d => {
                   return(
                      <Comment1 id={d.id} author={d.author} content={d.content} comments={d.comments} deleteComment={this.deleteComment} />
                   ) 
                }) }
       
    
            </Col>
        </div>
    );
  }
}
export default Demo;
