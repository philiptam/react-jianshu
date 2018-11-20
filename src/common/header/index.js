import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {actionCreators} from './store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWarper,
  SearchInfo,
  SearchTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './style';

class Header extends Component {

  getListArea() {
    if (this.props.focused) {
      return (
        <SearchInfo>
          <SearchTitle>热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchTitle>
          <div>
            <SearchInfoList>
              {
                this.props.list.map((item)=>{
                  return  <SearchInfoItem key={item}>{item}</SearchInfoItem>
                })
              }
            </SearchInfoList>
          </div>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
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
              in={this.props.focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleInputFouce}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe637;</i>
            {this.getListArea()}
          </SearchWarper>
        </Nav>
        <Addition>
          <Button className='writting'><i className="iconfont">&#xe624;</i>写文章</Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}


// 把store的数据映射到组件的props里面去
const mapStateToPorps = (state) => {
  // 返回一个对象
  return {
    focused: state.getIn(['header', 'focused']),
    list:state.getIn(['header','list'])
    // focused: state.get('header').get('focused') //功能跟上面一样
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFouce() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  };
};

// 两个映射参数
export default connect(mapStateToPorps, mapDispatchToProps)(Header);