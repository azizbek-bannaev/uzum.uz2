import React from 'react' 
import "./SingleRoute.css"
import { PRODUCTS } from '../../static'
import { useParams } from 'react-router-dom'

function SingleRoute() {
    const params = useParams()
    const oneitem = PRODUCTS.find((el)=> el.id === params.id)
    console.log(oneitem);
    if(!oneitem){
        return <h2 style={{textAlign:"center"}}>bunday mahsulot yo'q</h2>
    }
  return (
    <div className='single__route container'>
        <div>
        <img src={oneitem?.url[0]} width={400} alt="" />
        </div>
        <div>
        <h2>{oneitem?.title}</h2>
        <br />
        <mark className='product__monthliy'>1500 so'm/oyiga</mark>
        <br />  
        <br />  
        <del className='product__old-price'>1500 so'm</del> 
        <h1>{oneitem?.price?.brm()} so'm</h1>
        <br />
        <br />
        <button>savatga qo'shish</button>
        </div>
    </div>
  )
}

export default SingleRoute