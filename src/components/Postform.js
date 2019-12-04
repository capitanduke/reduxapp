import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

import { Button, Form, Modal  } from 'react-bootstrap';



class Postform extends Component {
    constructor(props) {
        super(props);
        this.state ={
            title: '',
            body: '',
            showModal: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }


    onSubmit(e){
        e.preventDefault();
        
        const post = {
            title: this.state.title,
            body: this.state.body
        };
        
        //CALL ACTION
        this.props.createPost(post);

        //CLEAN FORM
        this.setState({title:'', body:'', showModal: false});

    }

    

    render() {
        let addModalClose = () => this.setState({showModal: false});
        let modalButton = 'modalButton';
        return (
            <div>
                
                <Button className={modalButton} variant="outline-dark" onClick={()=> this.setState({showModal: true})} >Add new post</Button>

               <Modal show={this.state.showModal} onHide={addModalClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Adding new post
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group>
                                <Form.Label>Title</Form.Label>
                                <Form.Control name="title" type="text" value={this.state.title} onChange={this.onChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Body</Form.Label>
                                <Form.Control as="textarea" rows="3" name="body" value={this.state.body} onChange={this.onChange} />
                            </Form.Group>
                            <Button type="submit" variant="outline-primary">Submit</Button>
                            <Button variant="outline-danger" onClick={addModalClose}>Close</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost})(Postform);