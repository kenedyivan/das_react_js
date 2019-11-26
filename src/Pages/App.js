import React, {Component} from 'react';
import '../App.css';
import axios from "axios";
import {getDistricts, getDistrictSubCounties} from "../WebService/end_points";
import District from "../Components/District";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListFilter from "../Components/ListFilter";
import {ClipLoader} from "react-spinners";
import CusNavBar from "../Components/CusNavBar";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            districts: [],
            filteredData: [],
            sub_counties: [],
            activeDistrict: {},
            loading_sub_counties: false,
            loading_districts: false,
        };

        this.fetchDistricts = this.fetchDistricts.bind(this);
        this.fetchDistrictSubCounties = this.fetchDistrictSubCounties.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.filter = this.filter.bind(this);
    }

    fetchDistricts() {
        this.setState({
            ...this.state,
            loading_districts: true
        });
        axios.get(getDistricts())
            .then((response) => {
                // handle success
                if (response.status === 200) {
                    this.setState({
                        ...this.state,
                        districts: response.data,
                        filteredData: response.data
                    })
                } else {
                    console.log('Resource not found')
                }

            })
            .catch((error) => {
                // handle error
                console.log(error)
            })
            .then(() => {
                // always executed
                this.setState({
                    ...this.state,
                    loading_districts: false
                });
            });
    }

    fetchDistrictSubCounties(districtId) {
        this.setState({
            ...this.state,
            loading_sub_counties: true
        });
        axios.get(getDistrictSubCounties(districtId))
            .then((response) => {
                // handle success
                if (response.status === 200) {
                    this.setState({
                        ...this.state,
                        sub_counties: response.data,
                    })
                } else {
                    console.log('Resource not found')
                }

            })
            .catch((error) => {
                // handle error
                console.log(error)
            })
            .then(() => {
                // always executed
                this.setState({
                    ...this.state,
                    loading_sub_counties: false
                });
            });
    }

    filter(event) {

        let filteredArray = [];

        let name = event.target.value;

        if (name === '') {
            this.setState({
                ...this.state,
                filteredData: this.state.districts
            })
        } else {
            filteredArray = this.state.districts.filter((item) => {
                let regex = new RegExp(name, 'gi');
                return item.name.match(regex);
            });

            this.setState({
                ...this.state,
                filteredData: filteredArray
            })
        }

    }

    handleClick(district) {
        this.setState({
            ...this.state,
            activeDistrict: district
        });

        this.fetchDistrictSubCounties(district.id)
    }

    componentDidMount() {
        this.fetchDistricts();

        const {id} = this.props.match.params;
        this.fetchDistrictSubCounties(id)
    }

    render() {
        let districts = this.state.filteredData.map((item, i) => {
            return <District key={i} item={item} handleClick={this.handleClick}/>
        });

        let subCounties = this.state.sub_counties.map((item, i) => {
            return <li key={i}>{item.name}</li>
        });

        return (
            <div>
                <CusNavBar/>
                <Container>
                    <Row style={{}}>
                        <Col sm={3} style={{backgroundColor: '#f7f7f7', paddingTop: '20px'}}>
                            <h3>Districts</h3>
                            <ListFilter filter={this.filter}/>
                            <hr/>

                            {

                                this.state.loading_districts ?
                                    <div style={{textAlign: 'center'}}>
                                        <ClipLoader
                                            sizeUnit={"px"}
                                            size={30}
                                            color={'#123abc'}
                                            loading={this.state.loading_districts}
                                        />
                                    </div>
                                    :
                                    <ul style={{height: '450px', overflow: 'scroll', paddingLeft: '0px'}}>
                                        {districts.length > 0 ? districts : 'No data!'}
                                    </ul>

                            }

                        </Col>
                        <Col style={{
                            backgroundColor: '#f7f7f7',
                            padding: '20px',
                            height: '600px',
                            overflow: 'scroll',
                        }}>
                            <div style={{borderLeft: '1px solid #C0C0C0', height: '100%', paddingLeft: '10px'}}>
                                <h3>Sub-Counties</h3>
                                {

                                    this.state.loading_sub_counties ?
                                        <div style={{textAlign: 'center'}}>
                                            <ClipLoader
                                                sizeUnit={"px"}
                                                size={30}
                                                color={'#123abc'}
                                                loading={this.state.loading_sub_counties}
                                            />
                                        </div>
                                        :
                                        <ul style={{paddingLeft: '0px'}}>
                                            {subCounties.length > 0 ? subCounties : 'No data!'}
                                        </ul>

                                }

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
