import React, { Component } from 'react'
import './SidebarTemplate.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Avatar from '../../../images/avatar.png';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutAdmin } from '../../../actions/adminActions';

class SidebarTemplate extends Component {
    
    state = {
        toggled: false
    }

    minimizeSidebar = (e) => {
        e.preventDefault();
        let prevState = this.state.toggled;
        this.setState({toggled: !prevState});
    }

    onLogoutHandler = () => {
        this.props.logoutAdmin();
    }

    render() {

        const { admin } = this.props.admin;
       // console.log(this.props.admin);
        return (
            <div className={classnames('d-flex', {'toggled': this.state.toggled})} id="wrapper">

                {/*  Sidebar */}
                <div className="bg-dark border-right" id="sidebar-wrapper">
                    <div className="sidebar-heading text-center text-light bg-info"> 
                        <img src={Avatar} alt="avatar" className='rounded-circle' style={{width:'100px', height:'100px'}} />
                       {/* <h3>{admin.full_name}</h3> */}
                       <h3></h3>
                        <small>{admin.name}</small> 
                        <br/>
                       {/* <small>{admin.national_id}</small> */}
                    </div>
                    <div className="list-group list-group-flush">
                        <Link to='/dashboard' className='list-group-item list-group-item-action bg-dark text-light'><i className="fas fa-tachometer-alt"></i> Dashboard</Link>
                        <Link to='/students' className='list-group-item list-group-item-action bg-dark text-light'><i className="fas fa-users"></i> Students</Link>
                        <Link to='/search' className='list-group-item list-group-item-action bg-dark text-light'><i className="fas fa-search"></i> Search</Link>
                        <Link to='/users' className='list-group-item list-group-item-action bg-dark text-light'><i className="fas fa-user-friends"></i> Users</Link>
                    </div>
                </div>
                {/*  /#sidebar-wrapper */}

                {/* Page Content */}
                <div id="page-content-wrapper">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                        <button className="btn btn-light" onClick={this.minimizeSidebar}> {this.state.toggled ? <i className='fas fa-arrow-right fa-lg'></i> : <i className='fas fa-arrow-left fa-lg'></i>} </button>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <div className='nav-link logout' onClick={this.onLogoutHandler}>Logout</div>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div className="container-fluid sidebar-template">
                        {this.props.children}
                    </div>
                </div>
                {/* page-content-wrapper */}

            </div>
        );
    }
}

SidebarTemplate.propTypes = {
    admin: PropTypes.object.isRequired,
    logoutAdmin: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    admin: state.admin
});
// conectando o estado/funcao logout
export default connect(mapStateToProps, { logoutAdmin })(SidebarTemplate);