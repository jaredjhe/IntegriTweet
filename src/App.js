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

    return (
        <div className="app">
            <header>
                <h1>Logo</h1>
            </header>
            <div className="main">
                <h1>Is this Tweet fake?</h1>
                <div className="upload-area">
                    <UploadButton />
                </div>
            </div>
            <footer>
                <ImGithub style={githubIconStyles} />
            </footer>
        </div>
    );
}

export default App;
