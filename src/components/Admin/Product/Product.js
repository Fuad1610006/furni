import axios from "axios"
import { useEffect, useState } from "react";
// import Nav from "../Layout/Nav";
import Footer from "../Layout/footer";
export default function Product() {
    const [products, setProducts] = useState([]);
    const [inputs, setInputs] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);
    function getDatas() {
        axios.get('http://localhost/Furni/index_product.php').then(function(response) {
            setProducts(response.data.data);
        });
    }
    
    const deleteUser = (id) => {
        axios.delete(`http://localhost/Furni/delete_product.php?id=${id}`).then(function(response){
            getDatas();
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const onFileChange= (e) => {
        let files = e.target.files;
        let fileReader = new FileReader();
        fileReader.readAsDataURL(files[0]);
 
        fileReader.onload = (event) => {
            const name = "image";
            const value = event.target.result
            setInputs(values => ({...values, [name]: value}));
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost/Furni/create_product.php', inputs).then(function(response){
            console.log(response.data)
            getDatas();
                document.getElementById('modelbutton').click();
        });
    }
    const clearData = ()=>{
        setInputs(values => ({...values,"id":"", "name": "","price":"","image": ""}))
    } 


    /* for update */

    function getSingleProduct(id) {
        document.getElementById('modelbutton').click();
        axios.get(`http://localhost/Furni/single_product.php?id=${id}`).then(function(response) {
            setInputs(response.data);
            setInputs(values => ({...values,"image":""}))
        });
    }

    return (
        <div>
            {/* <Nav/> */}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1><small>Product List</small></h1>
                        <div className="row">
                            <div className="col-2 offset-sm-10">
                                <button onClick={clearData} id="modelbutton" type="button" className="btn btn-primary btn-sm float-end" data-bs-toggle="modal" data-bs-target="#myModal">
                                    Add Product
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((d, key) =>
                                    <tr key={key}>
                                        <td>{d.id}</td>
                                        <td>{d.name}</td>  
                                        <td>{d.price}</td>
                                        <td><img src={d.image} alt="" width={50} /></td>
                                        <td>
                                            <a href="javascript:void(0)" className="btn btn-primary me-2" onClick={() => getSingleProduct(d.id)} >Edit</a>
                                            <a href="javascript:void(0)" className="btn btn-danger btn-xs" onClick={() => deleteUser(d.id)}>Delete</a>
                                        </td>
                                    </tr>
                                )}

                            </tbody>
                        </table>

                        
                        <div className="modal" id="myModal">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">Product Data</h4>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                    </div>

                                
                                    <div className="modal-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Name</label>
                                                        <input value={inputs.name} type="text" className="form-control" name="name" onChange={handleChange} />
                                                        <input value={inputs.id} type="hidden" name="id"/>
                                                    </div>
                                                </div>
                                               
                                                <div className="col-sm-4">
                                                    <div className="mb-3">
                                                        <label className="form-label">Price</label>
                                                        <input type="text" className="form-control" name="price" value={inputs.price} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                
                                                <div className="col-sm-4">
                                                    <div className="mb-3">
                                                        <label className="form-label">Image</label>
                                                        <input type="file" className="form-control" name="image" onChange={onFileChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-3 offset-sm-3">
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </div>
                                                <div className="col-sm-3">
                                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                            

                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}