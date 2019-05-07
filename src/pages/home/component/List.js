import React from 'react'
import { connect } from 'react-redux'
import {
  ListWrapper,
  ListItem,
  LoadMore
} from '../style'
import { actionCreators } from '../store'

class List extends React.Component{
  render(){
    const { homeList, getMoreList, homePage } = this.props
    return (
      <ListWrapper>
        {
          homeList.map((item, index)=> {
            return (
              <ListItem key={index}>
                <div>
                  <h2>{item.get('title')}</h2>
                  <p>{item.get('text')}</p>
                </div>
                <img className="itemImg" src={item.get('imgUrl')} alt="" />
              </ListItem>
            )
          })
        }
        <LoadMore onClick={ ()=> getMoreList(homePage) }>阅读更多</LoadMore>
      </ListWrapper>
    )
  }
}

const mapStateToProps = (state)=> ({
  homeList: state.getIn(['home', 'homeList']),
  homePage: state.getIn(['home', 'homePage'])
})

const mapDispatchToProps = (dispatch)=> ({
  getMoreList(homePage) {
    dispatch(actionCreators.getMoreList(homePage))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)