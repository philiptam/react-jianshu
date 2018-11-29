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
    const {focused, mouseIn, list, page, totolPage, handleMouseInter, handleMouseLeave, handleChangePage} = this.props;
    const jsList = list.toJS();
    const pageList = [];

    if (jsList.length) {
      for (let i = (page * 10); i < (page + 1) * 10; i++) {
        pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseInter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchTitle>热门搜索
            <SearchInfoSwitch onClick={() => {
              handleChangePage(page, totolPage)
            }}>换一批</SearchInfoSwitch>
          </SearchTitle>
          <div>
            <SearchInfoList>
              {pageList}
            </SearchInfoList>
          </div>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    const {focused, handleInputFouce, handleInputBlur} = this.props;
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
              in={focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleInputFouce}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe637;</i>
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
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totolPage: state.getIn(['header', 'totolPage'])
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
    },
    handleMouseInter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totolPage) {
      if ((page + 1) < totolPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(0))
      }
      // dispatch(actionCreators.changePage())
    }
  };
};

// 两个映射参数
export default connect(mapStateToPorps, mapDispatchToProps)(Header);