import { useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import axios from "axios";
import { UploadImage } from "../components/UploadImage";
import { TextAreaBox } from "../components/TextAreaBox";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { backendUrl, cloudinaryCloudName, cloudinaryUploadPreset, cloudinaryURL } from "../utils/config";
import { UploadInnovativeProductType } from "../utils/schema";


export const UploadInnovativeProdPage = () => {
  const [uploadReq, setUploadReq] = useState<UploadInnovativeProductType>({
    image: "",
    name: "",
    description: "",
    quantity: 0,
    materialsUsed: "",
    price: 0,
  });
  const [selectedImg, setSelectedImg] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImg(e.target.files[0]);
    }
  };

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", cloudinaryUploadPreset);
    formData.append("cloud_name", cloudinaryCloudName);

    axios.defaults.withCredentials = false;
    const response = await axios.post(cloudinaryURL, formData);
    axios.defaults.withCredentials = true;
    return response.data.secure_url;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
  
    setUploadReq((prevState) => ({
      ...prevState,
      [name]: (name === "quantity" || name === "price") 
        ? Number(value) || 0 
        : value,
    }));
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      let imageUrl = uploadReq.image; 
  
      if (selectedImg instanceof File) {
        imageUrl = await uploadImage(selectedImg); 
      }
  
      const updatedUploadReq = {
        ...uploadReq,
        image: imageUrl, 
        quantity: Number(uploadReq.quantity), 
        price: Number(uploadReq.price), 
      };
  
      const response = await axios.post(`${backendUrl}/api/v1/innovative-prod`, updatedUploadReq);
  
      if (response.status === 201) {
        toast.success("Innovative Product created successfully");
        // navigate("");
      } else {
        console.error("Error occurred", response.data.error[0].message);
        toast.error(response.data.error[0].message);
      }
      
    } catch (error: any) {
      if (error.response?.status === 401) {
        toast.error("Session expired. Please log in again.");
        navigate("/");
      } else {
        const errorMessage = error.response?.data?.errors?.[0]?.message || 
                           error.response?.data?.message ||
                           "An error occurred";
        toast.error(errorMessage);
      }
      console.error("Error occurred", error);
      setError("Request creation failed. Please try again.");
    }  finally {
      setLoading(false);
    }
  };
  

  return (
    <div>
      <Heading text="Upload innovative prod" />
      <SubHeading text="Fill in the details below to upload a waste request" />

      <UploadImage name="image" handleImageChange={handleImageChange} />
      
      <InputBox
        label="Name"
        type="text"
        placeholder="Enter name"
        name="name"
        onChange={handleInputChange}
      />

      <TextAreaBox 
        label="Description" 
        placeholder="description" 
        name="description" 
        onChange={handleInputChange}
      />
      
      <InputBox
        label="Quantity"
        type="number"
        placeholder="Enter required quantity"
        name="quantity"
        onChange={handleInputChange}
      />

        <TextAreaBox 
            label="Materials Used" 
            placeholder="materials used" 
            name="materialsUsed" 
            onChange={handleInputChange}
        />

      <InputBox
        label="Price"
        type="number"
        placeholder="Enter price"
        name="price"
        onChange={handleInputChange}
      />

      <p className="text-red-500">{error}</p>
      
      <Button text={loading ? "submitting...." : "Submit"} onClick={handleSubmit}  />
    </div>
  );
};
