import { useState } from 'react';
import { motion } from 'framer-motion';
import { ImGithub } from 'react-icons/im';
import { Logo } from 'logo.png'

import './App.css';
import UploadButton from './components/UploadButton'
import { Upload } from "./Upload";
import { Files } from "./Files";

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
            <Upload />
            <Files />
            <header>
                <div className="logo">
                    <h1>IntegriTweet</h1>
                    <Logo />
                </div>
            </header>
            <div className="main">
                <motion.h1
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", duration: 1 }}
                >
                    Is this Tweet fake?
                </motion.h1>
                <div className="upload-area"
                    style={(isReal) ? { backgroundColor: "#A4FFD1", transition: "all 0.5s ease" } :
                        ((isFake) ? { backgroundColor: "#FFC6B8", transition: "all 0.5s ease" } :
                            { transition: "all 0.5s ease" })}
                >
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 2 }}
                    >
                        <UploadButton
                            isUploaded={isUploaded}
                            toggleUploaded={toggleUploaded}
                            isRealTweet={isRealTweet}
                            toggleRealTweet={toggleRealTweet}
                        />
                    </motion.div>
                </div>
                {(isReal) ? <motion.h1
                    initial={{ x: -300 }}
                    animate={{ x: 0 }}
                >
                    Yes, this tweet is <span style={{ color: "#00CC66" }}>real!</span>
                </motion.h1> : <></>}
                {(isFake) ? <motion.h1
                    initial={{ x: -300 }}
                    animate={{ x: 0 }}
                >
                    Oh no, this tweet is <span style={{ color: "#FF3300" }}>fake!</span>
                </motion.h1> : <></>}
            </div>
            <footer>
                {/* ############# FOR TESTING ############# */}
                <button style={{ width: 200 }} onClick={toggleUploaded}>Test Uploaded</button>
                <button style={{ width: 200 }} onClick={toggleRealTweet}>Test Real</button>
                {/* ############# FOR TESTING ############# */}

                <ImGithub style={githubIconStyles} />
            </footer>
        </div>
    );
}

export default App;
