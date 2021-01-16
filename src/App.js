import { useState } from 'react';
import { ImGithub } from 'react-icons/im';

import './App.css';
import UploadButton from './components/UploadButton'

const githubIconStyles = {
    color: "#00ACEE",
    height: "50%",
    width: "auto"
}

function App() {

    const [isUploaded, setUploaded] = useState(false);
    const [isRealTweet, setRealTweet] = useState(true);

    const toggleUploaded = () => {
        isUploaded ? setUploaded(false) : setUploaded(true);
    }

    const toggleRealTweet = () => {
        isRealTweet ? setRealTweet(false) : setRealTweet(true);
    }

    const isReal = isUploaded && isRealTweet;
    const isFake = isUploaded && !isRealTweet

    return (
        <div className="app">
            <header>
                <h1>Logo</h1>
            </header>
            <div className="main">
                <h1>Is this Tweet fake?</h1>
                <div className="upload-area"
                    style={(isReal) ? { backgroundColor: "#A4FFD1", transition: "all 0.5s ease" } :
                        ((isFake) ? { backgroundColor: "#FFC6B8", transition: "all 0.5s ease" } : 
                        { transition: "all 0.5s ease" })}>
                    <UploadButton />
                </div>
                {(isReal) ? <h1>Yes, this tweet is <span style={{ color: "#00CC66" }}>real!</span></h1> : <></>}
                {(isFake) ? <h1>Oh no, this tweet is <span style={{ color: "#FF3300" }}>fake!</span></h1> : <></>}
            </div>
            <footer>
                {/* FOR TESTING */}
                <button style={{ width: 200 }} onClick={toggleUploaded}>Test Uploaded</button>
                <button style={{ width: 200 }} onClick={toggleRealTweet}>Test Real</button>
                <ImGithub style={githubIconStyles} />
            </footer>
        </div>
    );
}

export default App;
