import { createContext, useState } from "react";

const FavoriteContext = createContext({})

function FavoriteProvider(props) {

    const [favorite, setFavorite] = useState([])


    const getFavoriteStorage = () => {
        if(localStorage.getItem('favorite')) {
            return JSON.parse(localStorage.getItem('favorite'))
        }

        return []
    }


    const addToFavorite = (item) => {
        let favoriteList = localStorage.getItem('favorite')
        ? JSON.parse(localStorage.getItem('favorite'))
        : []

        let isInFavorite = false

        favoriteList.forEach(element => {
            if(element.codProduto == item.codProduto){
                isInFavorite = true
            }
        })

        if(isInFavorite == false){
            favoriteList.push(item)
        }

        localStorage.setItem("favorite", JSON.stringify(favoriteList))
        setFavorite(favoriteList)
    }

    const getFavorite = () => {
        let favoriteList = getFavoriteStorage()
        setFavorite(favoriteList)
        console.log(favoriteList)
    }

    const deleteFavorite = (id) => {
        let favoriteList = getFavoriteStorage()
        for(let i = 0; i < favoriteList.length; i++){
            if(favoriteList[i].codProduto == id){
                favoriteList.splice(i, 1)
            }
        }

        setFavorite(favoriteList)
        localStorage.setItem("favorite", JSON.stringify(favoriteList))
    }


    return (
        <FavoriteContext.Provider value={{favorite, addToFavorite, getFavorite, deleteFavorite}}>
            {props.children}
        </FavoriteContext.Provider>
    )
}

export { FavoriteProvider }
export default FavoriteContext