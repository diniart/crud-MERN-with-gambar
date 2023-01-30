import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const EditProduct = () => {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const navigate = useNavigate();
    const {id} =useParams();


    useEffect(()=>{
        getProductById();
    },[])
    const getProductById = async()=>{
        const response  = await axios.get(`http://localhost:5000/products/${id}`);
        setTitle(response.data.name);
        setFile(response.data.image);
        setPreview(response.data.url);
        console.log("ini url: ",setPreview)

    }

    const loadImage =(e)=>{
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    }

    const UpdateProduct = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file",file);
        formData.append("title",title);
        try {
            await axios.patch(`http://localhost:5000/product/${id}`, formData, {
                headers:{
                    "Content-type": "multipart/form-data"
                }
            });
            navigate("/");
        } catch (error) {
            console.log("error upload : ",error);
            
        }

    }

  return (
    <div className="columns is-centered mt-5">
        <div className="column is-half">
            <form onSubmit={UpdateProduct}>
                <div className="field">
                    <label  className="label">
                        Product name
                    </label>
                    <div className="control">
                        <input type="text" className="input" value={title} onChange={(e)=>setTitle(e.target.value)}
                        placeholder = "Product name"
                        />
                    </div>
                </div>

                <div className="field">
                    <label  className="label">
                      Image
                    </label>
                    <div className="control">
                        <div className="file">
                            <label  className="file-label">
                                <input type="file" className="file-name" onChange={loadImage} />
                                {/* <span className="file-cta">
                                    <span className="file-label">choose a file..</span>
                                </span> */}
                            </label>
                        </div>
                    </div>
                </div>

                {preview ? (
                    <figure className="image is-128x128">
                        <img src={preview} alt="preview img" />
                    </figure>
                ):(
                    ""
                )}


                <div className="field mt-10">
                    <div className="control">
                         <button type="submit" className="button is-success"> Update</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    
  );
}

export default EditProduct;