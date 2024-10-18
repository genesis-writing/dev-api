// src/components/Contributor.js
import React from 'react';

// Contributor component that takes props (name, image, bio, links) 
// and generates a profile section for each contributor.
export default function Contributor({ name, image, bio, links }) {
  return (
    <div style={{padding: '15px', margin: '15px 0' }}>
      {/* Contributor's profile picture */}
      <img 
        src={image} 
        alt={`${name}'s photo`} 
        style={{ width: '100px', borderRadius: '50%' }} 
      />
      
      {/* Contributor's name */}
      <h2>{name}</h2>
      
      {/* Contributor's bio */}
      <p>{bio}</p>
      
      {/* Links for GitHub, LinkedIn, or other profiles */}
      <div>
        {links.map((link, index) => (
          <a key={index} href={link.url} style={{ marginRight: '10px' }}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}