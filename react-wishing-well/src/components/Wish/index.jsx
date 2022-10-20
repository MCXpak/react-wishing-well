import { useState } from "react"

const Wish = ({wish}) => {

    const [compWish, setCompWish] = useState(wish)

    const handleVote = (type) => {
        if(type == 'grant'){
            const newCompWish = compWish
            newCompWish.votes++
            console.log(newCompWish.votes)
            setCompWish({...newCompWish})
        } else if(type == 'deny'){
            const newCompWish = compWish
            newCompWish.votes--
            setCompWish({...newCompWish})
        }
    }

    return(
        <div className="wish">
            <h2>{compWish.wish}</h2>
            <p>Author: {compWish.author}</p>
            <p>{compWish.votes}</p>
            <button onClick={() => handleVote('grant')}>+</button>
            <button onClick={() => handleVote('deny')}>-</button>
        </div> 
    )
}

export default Wish
