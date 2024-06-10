import React from 'react'

const Home = () => {

    const redirectFunc = () => {
        window.location = "/detail"  //bu fonksiyon detail sayfasına yönlendiriyor
    }

    const arr=[
        {name:"telefon", id:0},
        {name:"televizyon", id:1},
        {name:"araba", id:2}
    ]

    return (
    <div>
        {arr.map((ar,i)=>(
            
        ))}
        Home
        <button onClick={redirectFunc}>Yönlendir</button>
    </div>
    )
}

export default Home
