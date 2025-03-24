"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Area, AreaChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { MapView } from "@/components/map-view"
import { getTrafficData, getTrafficChartData } from "@/data/traffic-data"

export function TrafficMonitoring() {
  const [trafficData, setTrafficData] = useState([])
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    // Load initial data
    setTrafficData(getTrafficData())
    setChartData(getTrafficChartData())

    // Simulate real-time updates
    const interval = setInterval(() => {
      // Update traffic data
      setTrafficData((prev) =>
        prev.map((item) => ({
          ...item,
          vehicleCount: Math.max(50, Math.min(350, item.vehicleCount + Math.floor(Math.random() * 21) - 10)),
          trafficDensity: Math.max(10, Math.min(95, item.trafficDensity + Math.floor(Math.random() * 11) - 5)),
          timestamp: new Date().toISOString().replace("T", " ").substring(0, 19),
        })),
      )

      // Update chart data
      setChartData((prev) => {
        const newData = [...prev.slice(1)]
        const lastTime = prev[prev.length - 1].time
        const [hours, minutes] = lastTime.split(":").map(Number)
        let newMinutes = minutes + 5
        let newHours = hours

        if (newMinutes >= 60) {
          newMinutes -= 60
          newHours = (newHours + 1) % 24
        }

        const newTimeString = `${newHours.toString().padStart(2, "0")}:${newMinutes.toString().padStart(2, "0")}`

        newData.push({
          time: newTimeString,
          vehicleCount: Math.max(
            50,
            Math.min(350, prev[prev.length - 1].vehicleCount + Math.floor(Math.random() * 21) - 10),
          ),
        })

        return newData
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const getCongestionColor = (level) => {
    switch (level) {
      case "Very High":
        return "bg-red-500 text-white"
      case "High":
        return "bg-orange-500 text-white"
      case "Medium":
        return "bg-yellow-500"
      case "Low":
        return "bg-green-500 text-white"
      default:
        return "bg-blue-500 text-white"
    }
  }

  if (trafficData.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Live Traffic Density</CardTitle>
            <CardDescription>Average across all monitored locations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">
              {Math.round(trafficData.reduce((acc, item) => acc + item.trafficDensity, 0) / trafficData.length)}%
            </div>
            <div className="mt-4 h-3 w-full rounded-full bg-secondary">
              <div
                className="h-3 rounded-full bg-primary"
                style={{
                  width: `${Math.round(trafficData.reduce((acc, item) => acc + item.trafficDensity, 0) / trafficData.length)}%`,
                }}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Vehicles</CardTitle>
            <CardDescription>Currently in monitored areas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{trafficData.reduce((acc, item) => acc + item.vehicleCount, 0)}</div>
            <ChartContainer
              config={{
                vehicleCount: {
                  label: "Vehicles",
                  color: "hsl(var(--primary))",
                },
              }}
              className="h-[100px] mt-4"
            >
              <AreaChart data={chartData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                <Area
                  type="monotone"
                  dataKey="vehicleCount"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.2}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Congestion Levels</CardTitle>
            <CardDescription>Distribution across monitored areas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {["Very High", "High", "Medium", "Low"].map((level) => {
                const count = trafficData.filter((item) => item.congestionLevel === level).length
                return (
                  <div key={level} className="flex items-center">
                    <Badge className={`mr-2 ${getCongestionColor(level)}`}>{level}</Badge>
                    <div className="w-full h-2 bg-secondary rounded-full">
                      <div
                        className={`h-2 rounded-full ${level === "Very High" ? "bg-red-500" : level === "High" ? "bg-orange-500" : level === "Medium" ? "bg-yellow-500" : "bg-green-500"}`}
                        style={{ width: `${(count / trafficData.length) * 100}%` }}
                      />
                    </div>
                    <span className="ml-2 text-sm">{count}</span>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle>Traffic Map</CardTitle>
            <CardDescription>Real-time traffic density visualization</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <MapView trafficData={trafficData} />
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Traffic Monitoring Data</CardTitle>
            <CardDescription>Live data from traffic cameras</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Camera</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Vehicles</TableHead>
                  <TableHead>Congestion</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {trafficData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.cameraId}</TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell>{item.vehicleCount}</TableCell>
                    <TableCell>
                      <Badge className={getCongestionColor(item.congestionLevel)}>{item.congestionLevel}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

