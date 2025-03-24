// This file contains all the mock data for the dashboard
// Replace these functions with your actual data fetching code

// Traffic monitoring data
export function getTrafficData() {
  return [
    {
      id: 1,
      cameraId: "CAM101",
      location: "Gangapur Road",
      latitude: 19.9975,
      longitude: 73.7898,
      vehicleCount: 250,
      trafficDensity: 80,
      congestionLevel: "High",
      timestamp: "2025-03-23 14:30:00",
    },
    {
      id: 2,
      cameraId: "CAM102",
      location: "College Road",
      latitude: 20.0062,
      longitude: 73.7784,
      vehicleCount: 180,
      trafficDensity: 65,
      congestionLevel: "Medium",
      timestamp: "2025-03-23 14:30:00",
    },
    {
      id: 3,
      cameraId: "CAM103",
      location: "Nashik Road",
      latitude: 19.9899,
      longitude: 73.7903,
      vehicleCount: 320,
      trafficDensity: 90,
      congestionLevel: "Very High",
      timestamp: "2025-03-23 14:30:00",
    },
    {
      id: 4,
      cameraId: "CAM104",
      location: "Sharanpur Road",
      latitude: 19.9982,
      longitude: 73.7691,
      vehicleCount: 120,
      trafficDensity: 40,
      congestionLevel: "Low",
      timestamp: "2025-03-23 14:30:00",
    },
    {
      id: 5,
      cameraId: "CAM105",
      location: "Trimbak Road",
      latitude: 19.9935,
      longitude: 73.7652,
      vehicleCount: 210,
      trafficDensity: 75,
      congestionLevel: "High",
      timestamp: "2025-03-23 14:30:00",
    },
  ]
}

// Traffic chart data
export function getTrafficChartData() {
  return [
    { time: "14:00", vehicleCount: 220 },
    { time: "14:05", vehicleCount: 235 },
    { time: "14:10", vehicleCount: 240 },
    { time: "14:15", vehicleCount: 230 },
    { time: "14:20", vehicleCount: 245 },
    { time: "14:25", vehicleCount: 248 },
    { time: "14:30", vehicleCount: 250 },
  ]
}

// Vehicle violations data
export function getViolationData() {
  return [
    {
      id: 1,
      trafficId: 1,
      vehicleType: "Car",
      speed: 60,
      licensePlate: "MH15AB1234",
      ruleViolation: "Over-speeding",
      capturedImage: "image1.jpg",
      timestamp: "2025-03-23 14:35:00",
    },
    {
      id: 2,
      trafficId: 1,
      vehicleType: "Truck",
      speed: 45,
      licensePlate: "MH15CD5678",
      ruleViolation: "Lane violation",
      capturedImage: "image2.jpg",
      timestamp: "2025-03-23 14:40:00",
    },
    {
      id: 3,
      trafficId: 2,
      vehicleType: "Motorcycle",
      speed: 70,
      licensePlate: "MH15EF9012",
      ruleViolation: "Over-speeding",
      capturedImage: "image3.jpg",
      timestamp: "2025-03-23 14:42:00",
    },
    {
      id: 4,
      trafficId: 3,
      vehicleType: "Car",
      speed: 30,
      licensePlate: "MH15GH3456",
      ruleViolation: "Red light violation",
      capturedImage: "image4.jpg",
      timestamp: "2025-03-23 14:45:00",
    },
    {
      id: 5,
      trafficId: 2,
      vehicleType: "Bus",
      speed: 50,
      licensePlate: "MH15IJ7890",
      ruleViolation: "Lane violation",
      capturedImage: "image5.jpg",
      timestamp: "2025-03-23 14:50:00",
    },
  ]
}

// Violation chart data
export function getViolationChartData() {
  return [
    { violation: "Over-speeding", count: 2 },
    { violation: "Lane violation", count: 2 },
    { violation: "Red light", count: 1 },
    { violation: "Wrong way", count: 0 },
    { violation: "No helmet", count: 0 },
  ]
}

// Traffic signals data
export function getSignalData() {
  return [
    {
      id: 1,
      signalId: "TS001",
      location: "Gangapur Road Junction",
      currentPhase: "Green",
      phaseDuration: 45,
      adjustedByAI: true,
      timestamp: "2025-03-23 14:40:00",
      timeRemaining: 25,
    },
    {
      id: 2,
      signalId: "TS002",
      location: "College Road Junction",
      currentPhase: "Red",
      phaseDuration: 30,
      adjustedByAI: true,
      timestamp: "2025-03-23 14:40:00",
      timeRemaining: 15,
    },
    {
      id: 3,
      signalId: "TS003",
      location: "Nashik Road Junction",
      currentPhase: "Yellow",
      phaseDuration: 5,
      adjustedByAI: false,
      timestamp: "2025-03-23 14:40:00",
      timeRemaining: 2,
    },
    {
      id: 4,
      signalId: "TS004",
      location: "Sharanpur Road Junction",
      currentPhase: "Red",
      phaseDuration: 40,
      adjustedByAI: true,
      timestamp: "2025-03-23 14:40:00",
      timeRemaining: 30,
    },
    {
      id: 5,
      signalId: "TS005",
      location: "Trimbak Road Junction",
      currentPhase: "Green",
      phaseDuration: 35,
      adjustedByAI: true,
      timestamp: "2025-03-23 14:40:00",
      timeRemaining: 20,
    },
  ]
}

// Incident data
export function getIncidentData() {
  return [
    {
      id: 1,
      cameraId: "CAM102",
      location: "College Road",
      incidentType: "Accident",
      severity: "High",
      capturedImage: "image2.jpg",
      resolvedStatus: false,
      timestamp: "2025-03-23 14:45:00",
      description: "Multi-vehicle collision, emergency services dispatched",
    },
    {
      id: 2,
      cameraId: "CAM103",
      location: "Nashik Road",
      incidentType: "Roadblock",
      severity: "Medium",
      capturedImage: "image3.jpg",
      resolvedStatus: false,
      timestamp: "2025-03-23 14:50:00",
      description: "Construction causing lane closure, traffic diverted",
    },
    {
      id: 3,
      cameraId: "CAM105",
      location: "Trimbak Road",
      incidentType: "Stalled Vehicle",
      severity: "Low",
      capturedImage: "image4.jpg",
      resolvedStatus: true,
      timestamp: "2025-03-23 14:30:00",
      description: "Vehicle moved to shoulder, minimal traffic impact",
    },
  ]
}

// Historical daily data
export function getDailyData() {
  return [
    { date: "Mar 17", vehicleCount: 5200, congestion: 65, incidents: 4 },
    { date: "Mar 18", vehicleCount: 5500, congestion: 70, incidents: 5 },
    { date: "Mar 19", vehicleCount: 5300, congestion: 68, incidents: 3 },
    { date: "Mar 20", vehicleCount: 5100, congestion: 62, incidents: 2 },
    { date: "Mar 21", vehicleCount: 4800, congestion: 55, incidents: 1 },
    { date: "Mar 22", vehicleCount: 5000, congestion: 60, incidents: 3 },
    { date: "Mar 23", vehicleCount: 5200, congestion: 45, incidents: 2 },
  ]
}

// Historical hourly data
export function getHourlyData() {
  return [
    { hour: "00:00", vehicleCount: 120, congestion: 20 },
    { hour: "02:00", vehicleCount: 80, congestion: 15 },
    { hour: "04:00", vehicleCount: 60, congestion: 10 },
    { hour: "06:00", vehicleCount: 180, congestion: 30 },
    { hour: "08:00", vehicleCount: 350, congestion: 75 },
    { hour: "10:00", vehicleCount: 280, congestion: 60 },
    { hour: "12:00", vehicleCount: 320, congestion: 65 },
    { hour: "14:00", vehicleCount: 290, congestion: 62 },
    { hour: "16:00", vehicleCount: 380, congestion: 80 },
    { hour: "18:00", vehicleCount: 400, congestion: 85 },
    { hour: "20:00", vehicleCount: 250, congestion: 55 },
    { hour: "22:00", vehicleCount: 180, congestion: 40 },
  ]
}

// Location data
export function getLocationData() {
  return [
    { location: "Gangapur Road", vehicleCount: 250, congestion: 80 },
    { location: "College Road", vehicleCount: 180, congestion: 65 },
    { location: "Nashik Road", vehicleCount: 320, congestion: 90 },
    { location: "Sharanpur Road", vehicleCount: 120, congestion: 40 },
    { location: "Trimbak Road", vehicleCount: 210, congestion: 75 },
  ]
}

// Weather data
export function getWeatherData() {
  return [
    { condition: "Clear", avgCongestion: 65, incidents: 2 },
    { condition: "Cloudy", avgCongestion: 70, incidents: 3 },
    { condition: "Rain", avgCongestion: 85, incidents: 7 },
    { condition: "Fog", avgCongestion: 80, incidents: 5 },
    { condition: "Snow", avgCongestion: 90, incidents: 9 },
  ]
}

// System steps data
export function getSystemSteps() {
  return [
    {
      title: "Data Collection",
      description: "High-definition cameras capture real-time traffic data from key intersections",
      icon: "Camera",
      detail:
        "Our system uses a network of 24 high-definition cameras strategically placed at key intersections. These cameras capture vehicle counts, traffic density, and identify potential rule violations.",
    },
    {
      title: "Vehicle Detection",
      description: "Computer vision algorithms detect and classify vehicles and violations",
      icon: "Car",
      detail:
        "Advanced computer vision algorithms process camera feeds to detect vehicles, classify their types, measure speeds, and identify license plates. The system can detect rule violations like over-speeding, wrong-way driving, and illegal turns.",
    },
    {
      title: "AI Processing",
      description: "Machine learning models analyze traffic patterns and predict congestion",
      icon: "Brain",
      detail:
        "Our proprietary machine learning models analyze current traffic patterns and historical data to predict congestion before it occurs. The AI continuously learns from new data to improve its predictions over time.",
    },
    {
      title: "Signal Optimization",
      description: "Traffic signals are dynamically adjusted based on real-time conditions",
      icon: "TrafficCone",
      detail:
        "Based on AI analysis, traffic signal timings are dynamically adjusted to optimize traffic flow. Green light durations are extended for congested routes and shortened for less busy ones, reducing overall wait times.",
    },
    {
      title: "Incident Detection",
      description: "Automatic detection of accidents and other traffic incidents",
      icon: "AlertTriangle",
      detail:
        "The system automatically detects traffic incidents like accidents, stalled vehicles, or road obstructions. When an incident is detected, alerts are sent to traffic authorities and emergency services for quick response.",
    },
    {
      title: "Performance Analysis",
      description: "Continuous monitoring and improvement of system performance",
      icon: "BarChart4",
      detail:
        "The system continuously analyzes its own performance by comparing predicted vs. actual traffic patterns. This data is used to further refine the AI models and improve overall system effectiveness.",
    },
  ]
}

