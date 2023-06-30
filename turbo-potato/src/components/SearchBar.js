function SearchBar({ setSearch }) {

    return (
        <div id = "search-here">
            <label>Search employees: </label>
            <input
                onChange={e => setSearch(e.target.value)}
                type="text"
                placeholder="Search"
            />
        </div>
    )
}

export default SearchBar;