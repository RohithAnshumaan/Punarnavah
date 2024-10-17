import { useEffect, useState } from "react";
import { WasteRequesType } from "../utils/schema";
import axios from "axios";
import { backendUrl } from "../utils/config";
import { useParams } from "react-router-dom";

export const WasteReqOverviewPage = () => {
  const [data, setData] = useState<WasteRequesType | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/v1/waste-req/${id}`); 
        setData(response.data.wasteRequest); 
        console.log(response.data); 
      } catch (error) {
        console.error("Error fetching waste request:", error);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]); 

  return (
    <div className="min-h-screen flex flex-col p-4">
      {data ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">{data.name}</h1>
          <img src={data.image} alt={data.name} className="w-full h-64 object-cover mb-4" />
          <p className="text-lg">{data.description}</p>
        </div>
      ) : (
        <p>Loading...</p> 
      )}
    </div>
  );
};

export default WasteReqOverviewPage;
