import React from "react";
import "../styles/PlayerStats.css";

const PlayerStats = () => {
    return (
        <div className="playerStats">
            <h1>Emanuel Sones 36</h1>
            <div className="playerLevel">
                <span className="playerLinesThin"></span>
                <span className="playerLinesThick"></span>
            </div>
            <h2>Front end developer</h2>
        </div>
    );
};

export default PlayerStats;