"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { format, differenceInSeconds, parse } from "date-fns";

export default function TimeDifference() {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [result, setResult] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const calculateDifference = () => {
    try {
      const baseDate = new Date().toISOString().split('T')[0];
      const start = parse(`${baseDate} ${startTime}`, "yyyy-MM-dd HH:mm", new Date());
      const end = parse(`${baseDate} ${endTime}`, "yyyy-MM-dd HH:mm", new Date());
      
      let diffInSeconds = differenceInSeconds(end, start);
      if (diffInSeconds < 0) {
        diffInSeconds += 24 * 60 * 60; // Add 24 hours if end time is on next day
      }

      const hours = Math.floor(diffInSeconds / 3600);
      const minutes = Math.floor((diffInSeconds % 3600) / 60);
      const seconds = diffInSeconds % 60;

      setResult({
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    } catch (error) {
      console.error("Error calculating time difference:", error);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Time Difference Calculator</h1>

        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Start Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="startTime">Enter Start Time</Label>
                <input
                  type="time"
                  id="startTime"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>End Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="endTime">Enter End Time</Label>
                <input
                  type="time"
                  id="endTime"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button size="lg" onClick={calculateDifference}>
              Calculate Difference
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Time Difference</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center text-3xl font-bold text-blue-600">
                {result.hours}:{result.minutes}:{result.seconds}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
