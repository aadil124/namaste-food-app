import React from 'react'
import ReactDOM from 'react-dom/client';



const AppLayout = () => {
    return (
        <div className='App'>
            <h1>This our App</h1>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)