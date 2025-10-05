function SearchBar({ city, setCity, onSearch }) {
  return (
    <form onSubmit={onSearch} className="flex gap-2 mt-6">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 border rounded-lg w-64"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
