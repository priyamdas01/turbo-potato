function SearchBar({ setSearch }) {

    return (
        <div>
            <input
                onChange={e => setSearch(e.target.value)}
                type="text"
                placeholder="Search"
            />
        </div>
    )
}

export default SearchBar;