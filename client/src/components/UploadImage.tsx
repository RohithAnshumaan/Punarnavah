interface UploadImageParams {
  name: string;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UploadImage = ({ name, handleImageChange }: UploadImageParams) => {
  return (
    <div>
      <input
        type="file"
        id="imgUpload"
        name={name}
        onChange={handleImageChange}
        className="mt-1"
        required
        accept=".jpg,.png"
      />
    </div>
  );
};
