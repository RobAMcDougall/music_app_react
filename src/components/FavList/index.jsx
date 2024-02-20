export default function FavList(favourites) {
    return (
        <div className>
            {favourites.map(favourite => <li>{favourite}</li>)}
        </div>
    )
}