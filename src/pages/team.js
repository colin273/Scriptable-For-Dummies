import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";

function Team() {
    return (
        <Layout title="Team">
            <div className="team-container">
                <h1 className="hero__title">Team</h1>
                <p>We love helping our scriptable members!</p>
                <div className="members">
                    <div className="member">
                        <a
                            href="https://github.com/lathryx"
                            target="_blank"
                            className="team__MemberCard-ubcv5p-4 kSAYjf"
                        >
                            <img
                                src={useBaseUrl("img/lathryx.jpg")}
                                className="team__Avatar-ubcv5p-5 iwmryD"
                            />
                            <div className="team__MemberName-ubcv5p-6 etqFwG">Lathryx</div>
                            <div className="team__Username-ubcv5p-7 tNyKy">@Lathryx</div>
                        </a>
                    </div>
                    <div className="member">
                        <a
                            href="https://github.com/Rhinozz"
                            target="_blank"
                            className="team__MemberCard-ubcv5p-4 kSAYjf"
                        >
                            <img
                                src={useBaseUrl("img/Rhinozz.jpg")}
                                className="team__Avatar-ubcv5p-5 iwmryD"
                            />
                            <div className="team__MemberName-ubcv5p-6 etqFwG">Rhinozz</div>
                            <div className="team__Username-ubcv5p-7 tNyKy">@Rhinozz</div>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Team;
