import React, {Component, Fragment} from 'react'
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

class ListFilter extends Component {


    render() {
        return (
            <Fragment>
                <Form>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.props.filter}/>
                </Form>
            </Fragment>

        )
    }
}

export default ListFilter;
