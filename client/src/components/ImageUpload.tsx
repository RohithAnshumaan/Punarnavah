import React, { useState } from 'react';

interface ImageUploadProps {
  onImageUpload: (file: File | null) => void;
}

export const ImageUpload = ({ onImageUpload }: ImageUploadProps) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string); // Set preview image
      };
      reader.readAsDataURL(file);
      onImageUpload(file);
    } else {
      setPreview(null);
      onImageUpload(null);
    }
  };

  return (
    <div className="flex flex-col space-y-4 my-8 mx-5">
      <div className="w-64 h-64 border-2 border-dashed border-secondary rounded-md flex justify-center items-center">
        {preview ? (
          <img src={preview} alt="Image preview" className="w-full h-full object-cover rounded-md" />
        ) : (
          <span className="text-gray-500">No image selected</span>
        )}
      </div>
      <label className="w-64 text-center cursor-pointer bg-secondary text-white px-4 py-2 rounded-md hover:bg-primary hover:text-secondary hover:border">
        Upload Image
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>
    </div>
  );
};
