interface PriceInputProps {  
  label: string;  
  name: string;  
  value: number;  
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PriceInput = ({ label, name, value, onChange }: PriceInputProps) => {  
  return (    
    <div className="mb-4">      
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>      
      <div className="relative flex items-center">        
        <span className="text-gray-500 pr-2">₹</span>        
        <input          
          type="number"          
          step="0"          
          name={name}          
          value={value}          
          onChange={onChange}          
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"        
        />      
      </div>    
    </div>  
  );
};

export default PriceInput;
