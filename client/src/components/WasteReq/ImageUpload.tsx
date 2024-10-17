interface ImageUploadProps {
  onFileChange: (file: File | null) => void;
}

const ImageUpload  = ({ onFileChange }:ImageUploadProps) => {
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    onFileChange(file);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">Upload Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileInput}
        className="block w-full text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-secondary
                   hover:file:bg-blue-100"
      />
    </div>
  );
};

export default ImageUpload;
