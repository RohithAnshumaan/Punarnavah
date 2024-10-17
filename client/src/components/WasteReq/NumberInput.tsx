interface NumberInputProps {  
  label: string;  
  name: string;  
  value: number;  
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput = ({ label, name, value, onChange }: NumberInputProps) => {  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {    
    const invalidChars = ["e", "E", "+", "-"]; // List of keys to prevent    
    if (invalidChars.includes(e.key)) {      
      e.preventDefault();    
    }  
  };

  return (    
    <div className="mb-4">      
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>      
      <input        
        type="number"        
        name={name}        
        value={value}        
        onChange={onChange}        
        onKeyDown={handleKeyDown}        
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"      
      />    
    </div>  
  );
};

export default NumberInput;
