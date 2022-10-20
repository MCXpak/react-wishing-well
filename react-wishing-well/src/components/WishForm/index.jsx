const WishForm = ({wishes, setWishes}) => {

    const handleInput = (e) => {
        e.preventDefault();
        const wish = document.querySelector('#wish-form-input')
        const author = document.querySelector('#author-form-input')
        const newWish = {
            id: wishes.length+1,
            wish: wish.value,
            author: author.value,
            votes: 0
        }
        setWishes([...wishes, newWish])
        // Clean input
        wish.value = ""
        author.value = ""
    }

    return(
        <form className="wish-form">
            <input id="wish-form-input" type="text" />
            <input id="author-form-input" type="text" />
            <button onClick={(e) => handleInput(e)}>Submit</button>
        </form>
    )
}

export default WishForm;
