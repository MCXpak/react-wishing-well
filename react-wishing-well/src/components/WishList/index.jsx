import Wish from '../Wish'

const WishList = ({wishes, setWishes}) => {
    return (
        <div className="wish-list">
            {wishes.map(wish => <Wish key={wish.id} wish={wish}></Wish>)}
        </div>
    )
}

export default WishList
