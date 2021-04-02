import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';

function Version () {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [appData, setAppData] = useState({});
    const [notes, setNotes] = useState([]);

    const releaseNotes = notes.map((text) => (
        <p style={{
            textAlign: "center",
        }} key={text}> {text}</p>
    ));

    useEffect(() => {
        fetch("http://itunes.apple.com/lookup?bundleId=dk.simonbs.Scriptable&country=US")
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setIsLoaded(true);
                    setAppData(data.results[0]);
                    setNotes(data.results[0].releaseNotes.split('-'))
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (!isLoaded || error) {
        return (
            <Layout title="Loading Current Version">
                <div
                    className="version-container">
                </div>
            </Layout>);

    } else {
        return (
            <Layout title={"Scriptable | Version " + appData.version + ""}>
                <div
                    className="version-container">
                    <h1 className="hero__title">Scriptable</h1>
                    <p>
                        Current Version: <strong>{appData.version}</strong>
                    </p>

                    <h3 >Release Notes:</h3>
                    <div style={{
                        padding: "15px",
                    }}> {releaseNotes}</div>
                </div>
            </Layout>
        );
    }

}

export default Version;