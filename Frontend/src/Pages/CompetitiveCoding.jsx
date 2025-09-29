import React, { useEffect, useState } from "react";
import "../style/CompetitiveCoding.css";

// Import all logos
import leetcodeLogo from "../assets/image/leetcode.png";
import codeforcesLogo from "../assets/image/codeforce.png"; // ✅ fixed filename
import geeksforgeeksLogo from "../assets/image/gfg.jpg";
import codechefLogo from "../assets/image/codechef.jpg";

const profiles = [
  {
    platform: "LeetCode",
    link: "https://leetcode.com/your-username/",
    username: "your-username",
    questionsSolved: 125,
    logo: leetcodeLogo,
  },
  {
    platform: "Codeforces",
    link: "https://codeforces.com/profile/your-username",
    username: "your-username",
    questionsSolved: 300,
    logo: codeforcesLogo,
  },
  {
    platform: "GeeksforGeeks",
    link: "https://auth.geeksforgeeks.org/user/your-username",
    username: "your-username",
    questionsSolved: 80,
    logo: geeksforgeeksLogo,
  },
  {
    platform: "CodeChef",
    link: "https://www.codechef.com/users/your-username",
    username: "your-username",
    questionsSolved: 200,
    logo: codechefLogo,
  },
];

function CompetitiveCoding() {
  const [counts, setCounts] = useState(
    profiles.map(() => 0) // initial counters
  );

  useEffect(() => {
    profiles.forEach((profile, index) => {
      let count = 0;
      const interval = setInterval(() => {
        count += Math.ceil(profile.questionsSolved / 50);
        if (count >= profile.questionsSolved) {
          count = profile.questionsSolved;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = count;
          return newCounts;
        });
      }, 30);
    });
  }, []);

  return (
    <div className="coding-profiles-container">
      <h1 className="page-title">Competitive Coding Profiles</h1>
      <div className="profiles-list">
        {profiles.map((profile, index) => (
          <a
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-card"
            key={profile.platform}
          >
            <img
              src={profile.logo}
              alt={profile.platform}
              className="platform-logo"
            />
            <h2>{profile.platform}</h2>
            <p className="username">{profile.username}</p>
            <div className="questions-solved">
              Questions Solved: <strong>{counts[index]}</strong>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default CompetitiveCoding;
