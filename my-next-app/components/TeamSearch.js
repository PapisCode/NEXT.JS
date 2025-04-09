'use client'
import React, { useState } from 'react';

const TeamSearch = () => {
    const [team, setTeam] = useState('');
    const [teamData, setTeamData] = useState(null);

    const fetchTeam = async () => {
        const res = await fetch (`https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${team}`);
        const data = await res.json();
        setTeamData(data.teams ? data.teams[0] : null);
    };

    return (
        <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
            <h2>Search for a Sport Team</h2>
            <input
            type="text"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
            placeholder ="Enter team name"
            style={{ marginRight: '1rem', padding: '0.5rem' }}
            />

            <button onClick={fetchTeam} style={{ padding: '0.5rem 1rem' }}>
                Search
            </button>

            {teamData && (
                <div style={{ marginTop: '2rem' }}>
                    <h3>{teamData.strTeam}</h3>
                    <img src={teamData.strTeamBadge} alt="Team badge" width="100" />
                    <p><strong>Stadium:</strong> {teamData.strStadium}</p>
                    <p><strong>Location:</strong> {teamData.strStadiumLocation}</p>
                    <p>{teamData.strDescriptionEN?.substring(0, 300)}...</p>
        </div>
    )}

{teamData === null && team && (
        <p>No results found for "{team}"</p>
      )}
    </div>
  );
};

export default TeamSearch;