"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Minus } from "lucide-react";

export default function AddSubtractTime() {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [operation, setOperation] = useState("add");
  const [modifyHours, setModifyHours] = useState("0");
  const [modifyMinutes, setModifyMinutes] = useState("0");
  const [modifySeconds, setModifySeconds] = useState("0");
  const [result, setResult] = useState({ hours: "00", minutes: "00", seconds: "00" });

  const calculateTime = () => {
    let totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    const modifyTotalSeconds = 
      parseInt(modifyHours) * 3600 + 
      parseInt(modifyMinutes) * 60 + 
      parseInt(modifySeconds);

    if (operation === "add") {
      totalSeconds += modifyTotalSeconds;
    } else {
      totalSeconds -= modifyTotalSeconds;
    }

    // Handle negative results
    if (totalSeconds < 0) {
      totalSeconds = 0;
    }

    const resultHours = Math.floor(totalSeconds / 3600);
    const resultMinutes = Math.floor((totalSeconds % 3600) / 60);
    const resultSeconds = totalSeconds % 60;

    setResult({
      hours: resultHours.toString().padStart(2, "0"),
      minutes: resultMinutes.toString().padStart(2, "0"),
      seconds: resultSeconds.toString().padStart(2, "0"),
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Add/Subtract Time Calculator</h1>
        
        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Initial Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="hours">Hours</Label>
                  <Input
                    id="hours"
                    type="number"
                    min="0"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="minutes">Minutes</Label>
                  <Input
                    id="minutes"
                    type="number"
                    min="0"
                    max="59"
                    value={minutes}
                    onChange={(e) => setMinutes(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="seconds">Seconds</Label>
                  <Input
                    id="seconds"
                    type="number"
                    min="0"
                    max="59"
                    value={seconds}
                    onChange={(e) => setSeconds(e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Select value={operation} onValueChange={setOperation}>
              <SelectTrigger className="w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="add">
                  <div className="flex items-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Time
                  </div>
                </SelectItem>
                <SelectItem value="subtract">
                  <div className="flex items-center">
                    <Minus className="w-4 h-4 mr-2" />
                    Subtract Time
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Time to {operation === "add" ? "Add" : "Subtract"}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="modifyHours">Hours</Label>
                  <Input
                    id="modifyHours"
                    type="number"
                    min="0"
                    value={modifyHours}
                    onChange={(e) => setModifyHours(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="modifyMinutes">Minutes</Label>
                  <Input
                    id="modifyMinutes"
                    type="number"
                    min="0"
                    max="59"
                    value={modifyMinutes}
                    onChange={(e) => setModifyMinutes(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="modifySeconds">Seconds</Label>
                  <Input
                    id="modifySeconds"
                    type="number"
                    min="0"
                    max="59"
                    value={modifySeconds}
                    onChange={(e) => setModifySeconds(e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button size="lg" onClick={calculateTime}>
              Calculate
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Result</CardTitle>
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
