import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import  {actionCreators} from './store';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWarper } from './style';

// 无状态组件，好处就是提高性能
const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo href='/'/>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载APP</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'>
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <SearchWarper>
          <CSSTransition
            in={props.focused}
            timeout={200}
            classNames='slide'
          >
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFouce}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe637;</i>
        </SearchWarper>
      </Nav>
      <Addition>
        <Button className='writting'><i className="iconfont">&#xe624;</i>写文章</Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
  );
};

// 把store的数据映射到组件的props里面去
const mapStateToPorps = (state) => {
  // 返回一个对象
  return {
    focused:state.getIn(['header','focused'])
    // focused: state.get('header').get('focused') //功能跟上面一样
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFouce() {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  };
};

// 两个映射参数
export default connect(mapStateToPorps, mapDispatchToProps)(Header);