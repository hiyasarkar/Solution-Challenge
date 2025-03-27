const locationData = {
  amritsar: {
    burningRisk: "High Risk",
    airQuality: "Critical",
    environmentalImpact: "Severe",
    alternatives: [
      "Implement Happy Seeder Technology",
      "Biomass Power Generation",
      "Crop Residue Composting",
      "Community-based Waste Management",
    ],
  },
  jalandhar: {
    burningRisk: "Moderate Risk",
    airQuality: "Poor",
    environmentalImpact: "Significant",
    alternatives: [
      "Zero-Till Farming",
      "Residue Mulching",
      "Biogas Production",
      "Integrated Crop-Livestock Farming",
    ],
  },
  patiala: {
    burningRisk: "Moderate Risk",
    airQuality: "Moderate",
    environmentalImpact: "Moderate",
    alternatives: [
      "Crop Rotation Techniques",
      "Mechanical Soil Incorporation",
      "Biomass Briquetting",
      "Small-scale Biochar Production",
    ],
  },
  ambala: {
    burningRisk: "Low Risk",
    airQuality: "Good",
    environmentalImpact: "Minimal",
    alternatives: [
      "Precision Agriculture",
      "Sustainable Farming Practices",
      "Organic Waste Recycling",
      "Community Awareness Programs",
    ],
  },
  hisar: {
    burningRisk: "High Risk",
    airQuality: "Critical",
    environmentalImpact: "Severe",
    alternatives: [
      "Water-Efficient Crop Management",
      "Residue-to-Resource Conversion",
      "Climate-Smart Agriculture",
      "Innovative Waste Utilization",
    ],
  },
  karnal: {
    burningRisk: "Moderate Risk",
    airQuality: "Poor",
    environmentalImpact: "Significant",
    alternatives: [
      "Sustainable Intensification",
      "Crop Diversification",
      "Technology-Driven Farming",
      "Community Cooperative Models",
    ],
  },
  panipat: {
    burningRisk: "Low Risk",
    airQuality: "Moderate",
    environmentalImpact: "Moderate",
    alternatives: [
      "Circular Economy Approaches",
      "Innovative Residue Management",
      "Eco-friendly Farming Techniques",
      "Agricultural Waste Valorization",
    ],
  },
};
function generateAIResponse(location, prompt) {
  const baseResponses = {
    amritsar:
      "Amritsar's agricultural landscape requires innovative solutions to combat stubble burning.",
    jalandhar:
      "Jalandhar's farming community can lead in sustainable crop residue management.",
    patiala:
      "Patiala offers unique opportunities for transforming agricultural waste into resources.",
    ambala:
      "Ambala's farmers can be pioneers in eco-friendly agricultural practices.",
    hisar:
      "Hisar's agricultural sector needs comprehensive strategies for sustainable farming.",
    karnal: "Karnal can become a model for integrated crop residue management.",
    panipat:
      "Panipat's agricultural approach can revolutionize waste management in farming.",
  };
  if (prompt) {
    return (
      `AI Insights for "${prompt}":\n\n` +
      "Key Recommendations:\n" +
      "- Leverage technology for precise crop management\n" +
      "- Implement sustainable waste conversion techniques\n" +
      "- Develop community-driven agricultural solutions\n" +
      "- Explore innovative residue utilization methods"
    );
  }
  return (
    baseResponses[location] +
    "\n\n" +
    "Recommended Action Steps:\n" +
    "1. Adopt advanced agricultural technologies\n" +
    "2. Implement sustainable crop residue management\n" +
    "3. Engage in community-based farming initiatives\n" +
    "4. Explore alternative income generation from crop waste"
  );
}
const locationDropdown = document.getElementById("locationDropdown");
const dashboardContent = document.getElementById("dashboardContent");
const burningRiskValue = document.getElementById("burningRiskValue");
const airQualityValue = document.getElementById("airQualityValue");
const environmentalImpactValue = document.getElementById(
  "environmentalImpactValue"
);
const alternativesList = document.getElementById("alternativesList");
const aiPrompt = document.getElementById("aiPrompt");
const generateAIBtn = document.getElementById("generateAIBtn");
const aiResponse = document.getElementById("aiResponse");
const loadingIndicator = document.getElementById("loadingIndicator");
locationDropdown.addEventListener("change", function () {
  const selectedLocation = this.value;

  if (selectedLocation) {
    dashboardContent.style.display = "block";
    const locationInfo = locationData[selectedLocation];
    burningRiskValue.textContent = locationInfo.burningRisk;
    airQualityValue.textContent = locationInfo.airQuality;
    environmentalImpactValue.textContent = locationInfo.environmentalImpact;
    burningRiskValue.style.color =
      locationInfo.burningRisk === "High Risk"
        ? "red"
        : locationInfo.burningRisk === "Moderate Risk"
        ? "orange"
        : "green";
    airQualityValue.style.color =
      locationInfo.airQuality === "Critical"
        ? "red"
        : locationInfo.airQuality === "Poor"
        ? "orange"
        : "green";
    alternativesList.innerHTML = "";
    locationInfo.alternatives.forEach((alternative) => {
      const li = document.createElement("li");
      li.textContent = alternative;
      alternativesList.appendChild(li);
    });
  } else {
    dashboardContent.style.display = "none";
  }
});
generateAIBtn.addEventListener("click", function () {
  const selectedLocation = locationDropdown.value;
  const prompt = aiPrompt.value;
  if (!selectedLocation) {
    alert("Please select a location first!");
    return;
  }
  loadingIndicator.style.display = "block";
  aiResponse.style.display = "none";
  setTimeout(() => {
    const response = generateAIResponse(selectedLocation, prompt);
    aiResponse.textContent = response;
    loadingIndicator.style.display = "none";
    aiResponse.style.display = "block";
  }, 1500);
});
