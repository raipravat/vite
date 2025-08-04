import React, { useState } from "react";

function Compare() {
  // Sample insurance plan data
  const insurancePlans = [
    {
      id: 1,
      name: "Premium Life Cover",
      company: "Nepal Life Insurance",
      type: "life",
      coverage: "10lakh",
      premium: "रु.12,000/year",
      cashback: "रु.3,000",
      term: "20 Years",
      featured: true,
    },
    {
      id: 2,
      name: "Family Health Plus",
      company: "National Life",
      type: "health",
      coverage: "5lakh",
      premium: "रु.8,000/year",
      cashback: "रु.2,000",
      term: "10 Years",
      featured: false,
    },
    {
      id: 3,
      name: "Complete Vehicle Protect",
      company: "Jyoti Insurance",
      type: "vehicle",
      coverage: "vehicle",
      premium: "रु.15,000/year",
      cashback: "रु.3,750",
      term: "1 Year",
      featured: false,
    },
    {
      id: 4,
      name: "Senior Citizen Plan",
      company: "Nepal Life Insurance",
      type: "life",
      coverage: "20lakh",
      premium: "रु.18,000/year",
      cashback: "रु.4,500",
      term: "15 Years",
      featured: false,
    },
    {
      id: 5,
      name: "Basic Health Cover",
      company: "Jyoti Insurance",
      type: "health",
      coverage: "5lakh",
      premium: "रु.6,500/year",
      cashback: "रु.1,500",
      term: "5 Years",
      featured: false,
    },
  ];

  // State for filters
  const [filters, setFilters] = useState({
    insuranceType: "all",
    coverageAmount: "all",
  });

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  // Filter the plans based on selected filters
  const filteredPlans = insurancePlans.filter((plan) => {
    const typeMatch =
      filters.insuranceType === "all" || plan.type === filters.insuranceType;
    const coverageMatch =
      filters.coverageAmount === "all" ||
      plan.coverage === filters.coverageAmount;
    return typeMatch && coverageMatch;
  });

  return (
    <section className="comparison-tool" id="insurance">
      <div className="container">
        <div className="section-title">
          <h2>
            Compare <span className="highlight">Insurance Plans</span>
          </h2>
          <p>Find the perfect insurance plan for your needs and budget</p>
        </div>

        <div className="comparison-container">
          <div className="comparison-filters">
            <div className="filter-group">
              <label htmlFor="insurance-type">Insurance Type</label>
              <select
                id="insurance-type"
                name="insuranceType"
                value={filters.insuranceType}
                onChange={handleFilterChange}
              >
                <option value="all">All Types</option>
                <option value="life">Life Insurance</option>
                <option value="health">Health Insurance</option>
                <option value="vehicle">Vehicle Insurance</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="coverage">Coverage Amount</label>
              <select
                id="coverage"
                name="coverageAmount"
                value={filters.coverageAmount}
                onChange={handleFilterChange}
              >
                <option value="all">Any Coverage</option>
                <option value="5lakh">Up to रु.5 Lakh</option>
                <option value="10lakh">रु.5-10 Lakh</option>
                <option value="20lakh">रु.10-20 Lakh</option>
                <option value="50lakh">रु.20-50 Lakh</option>
              </select>
            </div>
          </div>

          <div className="comparison-results">
            {filteredPlans.length > 0 ? (
              filteredPlans.map((plan) => (
                <div
                  className={`plan-card ${plan.featured ? "featured" : ""}`}
                  key={plan.id}
                >
                  <div className="plan-header">
                    <h3>{plan.name}</h3>
                    <div className="plan-company">{plan.company}</div>
                  </div>
                  <div className="plan-details">
                    <div className="detail-item">
                      <span>Coverage</span>
                      <strong>
                        {plan.coverage === "vehicle"
                          ? "Vehicle Value"
                          : `रु.${plan.coverage.replace("lakh", " Lakh")}`}
                      </strong>
                    </div>
                    <div className="detail-item">
                      <span>Premium</span>
                      <strong>{plan.premium}</strong>
                    </div>
                    <div className="detail-item">
                      <span>Cash Back</span>
                      <strong className="highlight">{plan.cashback}</strong>
                    </div>
                    <div className="detail-item">
                      <span>Term</span>
                      <strong>{plan.term}</strong>
                    </div>
                  </div>
                  <div className="plan-actions">
                    <a href="#" className="btn btn-secondary">
                      Details
                    </a>
                    <a href="#" className="btn btn-primary">
                      Apply Now
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>No insurance plans match your selected filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Compare;
