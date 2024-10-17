import { useEffect, useState } from 'react';
import { WasteRequesType } from '../utils/schema';
import axios from 'axios';
import { backendUrl } from '../utils/config';
import Card from '../components/Card';

const WasteReqPage = () => {
  const [data, setData] = useState<WasteRequesType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/v1/waste-req`);
        setData(response.data.wasteRequests); 

        console.log(response.data); 
      } catch (error) {
        console.error(error); 
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {data && data.map((item, index) => (
        <Card
          key={index}
          id={item.id}
          name={item.name}
          description={item.description}
          image={item.image}
          linkText="View More"
        />
      ))}
    </div>
  );
};

export default WasteReqPage;
