import './product.css'
import { Link } from 'react-router-dom'
import Chart from '../Chart/Chart'
import { productData } from '../../data'
import airpods from '../airpods.jpeg'
import { Publish } from '@material-ui/icons'

export default function Product() {
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className='productTitle'>Product</h1>
                <Link to='/newProduct'>
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey='Sales' title='Sales Performance'/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={airpods} alt="" className="productInfoImg" />
                        <span className="productname">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">234</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">4700</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">Yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label htmlFor="">Product Name</label>
                        <input type="text" placeholder='Apple AirPods' />
                        <label >In Stock</label>
                        <select name="inStock" id="isStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label >Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={airpods} alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file" id='file' style={{display:'none'}} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
