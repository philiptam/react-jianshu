import React, {Component} from 'react';
import {HeaderWrapper, Logo, Nav,NavItem,NavSearch,Addition,Button,SearchWarper} from './style';

class Header extends Component {
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
            <NavSearch></NavSearch>
            <i className="iconfont">&#xe637;</i>
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

export default Header;