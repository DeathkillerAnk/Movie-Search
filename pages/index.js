import React from 'react';
import Router from 'next/router'
import Navbar from './components/Navbar'
import Input from './components/Input'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

export default class Index extends React.Component {

    constructor() {
        super();

        this.state = {
            searchField: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            searchField: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        Router.push({pathname:'/movies-list', query: {value: this.state.searchField}});
    }
    render() {
        return (
          <React.Fragment>
            <Navbar/>
            <Container>
              <Input/>
            </Container>
          </React.Fragment>
        )
    }
}
