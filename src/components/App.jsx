import { Link } from 'react-router-dom'
import '../styles/App.css'

function App() {
    return (
        <>
            <header></header>
            <main>
                <Link to={"/test"}><button className='Button'>Start Test</button></Link>
            </main>
            <footer></footer>   
        </>
    )
}

export default App
