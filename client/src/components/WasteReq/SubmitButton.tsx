const SubmitButton = () => {
  return (
    <div className="mt-6">
      <button
        type="submit"
        className="w-full bg-secondary hover:bg-secondary text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;