import styled from 'styled-components';
import logoPic from '../../statics/logo.png'



export const HeaderWrapper = styled.div`
  display: flex;
  height: 56px;
  border-bottom: 1px solid #ccc;
`

export const Logo = styled.div`
  display: block;
  width: 20vw;
  height:100%;
  background: url(${logoPic}) no-repeat;
  background-size: contain;
`

export const NavLeft = styled.div`
  display: flex;
  justify-content: space-start;
  align-items: center;
  width: 36vw;
  height: 100%;
`
export const NavRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 36vw;
  height: 100%;
`

export const NavItem = styled.div`
  font-size: 17px;
  color: #333;
  &.right {
    margin-left: 16px;
    color: #969696;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  .icon {
    position: absolute;
    right: 0px;
    padding 10px;
    font-size: 18px;
    border-radius: 18px;
  }
  .icon.active {
    background: #ccc;
    border-radius: 50%;
    color: #fff;
  }
`

export const SearchList = styled.div`
  width: 250px;
  background: #fff;
  position: absolute;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  border-radius: 4px;
  top: 48px;
  >.searchTitle {
    padding: 12px 16px;
    >span {
      color: #969696;
      font-size: 14px;
      >.spin {
        font-size: 12px;
        position: absolute;
        right: 50px;
        top: 3px;
        transition: all .2s ease-in;
        transform: rotate(0deg);
        transform-origin: center center;
      }
    }
    >span:last-child {
      float: right;
      cursor: pointer;
    }
  }
  >.item {
    padding: 8px;
  }
  >.clearfix:after {
    content: ""; 
    display: block; 
    height: 0; 
    clear: both; 
    visibility: hidden;  
  }
`

export const ListItem = styled.div`
  float: left;
  padding: 4px;
  border: 1px solid #ddd;
  border-radius: 2px;
  font-size: 12px;
  color: #787878;
  margin: 6px 6px;
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  box-sizing: border-box;
  width: 160px;
  height: 38px;
  border: none;
  outline:none;
  border-radius:19px;
  background: #eee;
  font-size: 14px;
  text-indent:14px
  color: #999;
  padding: 0px 34px 0px 6px;
  &::placeholder {
    color: #999;
  }
  &.active {
    width: 240px
  }
  &.slide-enter {
    transition: all .3s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .3s ease-out;
  }
  &.slide-exit-active {
      width: 160px;
  }
`

export const Addition = styled.div`
  width: 20vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`
export const Button = styled.div`
  width: 8vw;
  line-height: 34px;
  text-align: center;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.regi {
    color: #ec6149
  }
  &.writting {
    color: #fff;
    background: #ec6149
  }
`
