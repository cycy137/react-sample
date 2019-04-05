import { connect } from 'react-redux';
import Nav from './Nav';
import {changeClimate} from './action';
const mapStateToProps=(state)=>{
    return{

    navalue:state.navlue
    }
}
const mapDispatchToProps =(dispatch)=>{

    return{

        handleChangeclimate:(value)=>{
            console.log(value);
            dispatch(changeClimate(value))
        }
    }
};

const NavContainer=connect(mapStateToProps,mapDispatchToProps)(Nav);
export default NavContainer