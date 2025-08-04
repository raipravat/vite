import React, { useState } from "react";
import {
  FaSearch,
  FaStar,
  FaStarHalfAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const agentsData = [
  {
    id: 1,
    name: "Rajesh Sharma",
    location: "Itahari, Koshi",
    specialties: ["Life Insurance", "Health Insurance"],
    rating: 4.7,
    reviews: 28,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Priya Gurung",
    location: "Biratnagar, Koshi",
    specialties: ["Vehicle Insurance", "Travel Insurance"],
    rating: 5.0,
    reviews: 15,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  // Add more agents here if needed
];

function FindAgent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAgents, setFilteredAgents] = useState(agentsData);

  const handleSearch = () => {
    const filtered = agentsData.filter((agent) =>
      agent.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAgents(filtered);
  };

  return (
    <section className="agent-finder" id="agents">
      <div className="container">
        <div className="section-title">
          <h2>
            Find a <span className="highlight">Local Agent</span>
          </h2>
          <p>Connect with licensed insurance agents in your area</p>
        </div>

        <div className="agent-search">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter your location (city or postal code)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-btn" onClick={handleSearch}>
              <FaSearch /> Find Agents
            </button>
          </div>

          <div className="agent-results">
            {filteredAgents.length > 0 ? (
              filteredAgents.map((agent) => (
                <div className="agent-card" key={agent.id}>
                  <div className="agent-photo">
                    <img src={agent.image} alt={agent.name} loading="lazy" />
                  </div>
                  <div className="agent-info">
                    <h3>{agent.name}</h3>
                    <div className="agent-rating">
                      {Array.from({ length: Math.floor(agent.rating) }).map(
                        (_, i) => (
                          <FaStar key={i} />
                        )
                      )}
                      {agent.rating % 1 !== 0 && <FaStarHalfAlt />}
                      <span>
                        {agent.rating} ({agent.reviews} reviews)
                      </span>
                    </div>
                    <div className="agent-location">
                      <FaMapMarkerAlt /> {agent.location}
                    </div>
                    <div className="agent-specialties">
                      {agent.specialties.map((spec, idx) => (
                        <span key={idx}>{spec}</span>
                      ))}
                    </div>
                  </div>
                  <div className="agent-actions">
                    <a href="#" className="btn btn--secondary">
                      <FaEnvelope /> Message
                    </a>
                    <a href="#" className="btn btn--primary">
                      <FaPhone /> Call Now
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p>No agents found for "{searchTerm}"</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FindAgent;
