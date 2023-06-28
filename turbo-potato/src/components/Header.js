function Header() {

    return (
        <div>
            Sort employees based on:
            <button>Age(junior to senior)</button>
            <button>Age(senior to junior)</button>
            {
                /* add as many filtering options as you want */
            }
        </div>
    );
}

export default Header;