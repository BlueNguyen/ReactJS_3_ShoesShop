import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    renderListShoes= () => {
        return this.props.shoeArr.map((item) => {
            return <ProductItem data={item} key={item.id} 
            handleClickView= {this.props.handleViewDetail}/>
        })
    }
  render() {
    return (
      <div className='row'>
        {this.renderListShoes()}
      </div>
    )
  }
}
