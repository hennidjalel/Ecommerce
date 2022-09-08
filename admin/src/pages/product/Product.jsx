import { Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import {productData} from "../../data";
import "./Product.css";

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://i.ibb.co/QHxRTJV/liviu-c-ti3-P-Bm2zio-unsplash.jpg" alt="" className="productInfoImg" />
                        <span className="productName">Appel Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">In Stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form  className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple AirPod"/>
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div> 
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://i.ibb.co/QHxRTJV/liviu-c-ti3-P-Bm2zio-unsplash.jpg" alt="" className="productUploadImg"/>
                            <label for="file">
                                <Publish className="productUploadFile"/>
                            </label>
                            <input type="file" id="file" name="file" style={{display:"none"}}/>
                        </div>
                        <button className="productButton">Update</button>
                    </div> 
                </form>
            </div>
        </div>
    )
}
