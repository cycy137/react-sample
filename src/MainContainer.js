import { connect } from 'react-redux';
import Main from './Main';

const mapStateToProps =(state)=>{
    return{
        content:state.content
        }

};

const MainContainer=connect(mapStateToProps,undefined)(Main);
export default MainContainer