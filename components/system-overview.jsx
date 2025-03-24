"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Steps, Step } from "@/components/ui/steps"
import { Badge } from "@/components/ui/badge"
import { Camera, Car, Brain, BarChart4, AlertTriangle, TrafficCone, ArrowRight } from "lucide-react"
import { getSystemSteps } from "@/data/traffic-data"

export function SystemOverview({ compact = false }) {
  const [activeStep, setActiveStep] = useState(0)
  const [steps, setSteps] = useState([])

  useEffect(() => {
    // Load data
    setSteps(getSystemSteps())

    // Auto-advance steps
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Map icon names to components
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Camera":
        return <Camera className="h-6 w-6" />
      case "Car":
        return <Car className="h-6 w-6" />
      case "Brain":
        return <Brain className="h-6 w-6" />
      case "TrafficCone":
        return <TrafficCone className="h-6 w-6" />
      case "AlertTriangle":
        return <AlertTriangle className="h-6 w-6" />
      case "BarChart4":
        return <BarChart4 className="h-6 w-6" />
      default:
        return null
    }
  }

  if (steps.length === 0) {
    return <div>Loading...</div>
  }

  if (compact) {
    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`p-2 rounded-full ${activeStep === index ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                {getIcon(step.icon)}
              </div>
              {index < steps.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground mx-1" />}
            </div>
          ))}
        </div>
        <div>
          <h3 className="font-medium">{steps[activeStep].title}</h3>
          <p className="text-sm text-muted-foreground">{steps[activeStep].description}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-6">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">How Our System Works</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our AI-powered traffic optimization system uses a combination of computer vision, machine learning, and
          real-time data processing to reduce congestion and improve traffic flow.
        </p>
      </div>

      <Steps active={activeStep} className="max-w-3xl mx-auto">
        {steps.map((step, index) => (
          <Step key={index} onClick={() => setActiveStep(index)}>
            <div className="flex items-center">
              <div className="mr-2 p-2 rounded-full bg-primary/10">{getIcon(step.icon)}</div>
              <div>
                <h3 className="font-medium">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p>{step.detail}</p>
            </div>
          </Step>
        ))}
      </Steps>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Key Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Badge className="mr-2">1</Badge>
                <span>Reduces average commute time by 24%</span>
              </li>
              <li className="flex items-center">
                <Badge className="mr-2">2</Badge>
                <span>Decreases carbon emissions by 18%</span>
              </li>
              <li className="flex items-center">
                <Badge className="mr-2">3</Badge>
                <span>Improves emergency response times by 32%</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Technology Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Badge variant="outline" className="mr-2">
                  CV
                </Badge>
                <span>TensorFlow for computer vision</span>
              </li>
              <li className="flex items-center">
                <Badge variant="outline" className="mr-2">
                  ML
                </Badge>
                <span>Custom ML models for prediction</span>
              </li>
              <li className="flex items-center">
                <Badge variant="outline" className="mr-2">
                  IoT
                </Badge>
                <span>Edge computing for real-time processing</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Future Roadmap</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Badge variant="secondary" className="mr-2">
                  Q2
                </Badge>
                <span>Integration with navigation apps</span>
              </li>
              <li className="flex items-center">
                <Badge variant="secondary" className="mr-2">
                  Q3
                </Badge>
                <span>Pedestrian flow optimization</span>
              </li>
              <li className="flex items-center">
                <Badge variant="secondary" className="mr-2">
                  Q4
                </Badge>
                <span>Public transport priority system</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

