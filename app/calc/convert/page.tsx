"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ConvertTime() {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("hours");
  const [toUnit, setToUnit] = useState("minutes");
  const [result, setResult] = useState("");

  const convertTime = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setResult("Please enter a valid number");
      return;
    }

    let seconds = 0;
    // Convert input to seconds
    switch (fromUnit) {
      case "hours":
        seconds = value * 3600;
        break;
      case "minutes":
        seconds = value * 60;
        break;
      case "seconds":
        seconds = value;
        break;
    }

    // Convert seconds to target unit
    let result = 0;
    switch (toUnit) {
      case "hours":
        result = seconds / 3600;
        break;
      case "minutes":
        result = seconds / 60;
        break;
      case "seconds":
        result = seconds;
        break;
    }

    setResult(result.toFixed(2));
  };

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Time Unit Converter</h1>

        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Convert From</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="inputValue">Value</Label>
                  <Input
                    id="inputValue"
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Unit</Label>
                  <Select value={fromUnit} onValueChange={setFromUnit}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hours">Hours</SelectItem>
                      <SelectItem value="minutes">Minutes</SelectItem>
                      <SelectItem value="seconds">Seconds</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Convert To</CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={toUnit} onValueChange={setToUnit}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hours">Hours</SelectItem>
                  <SelectItem value="minutes">Minutes</SelectItem>
                  <SelectItem value="seconds">Seconds</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button size="lg" onClick={convertTime}>
              Convert
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Result</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center text-3xl font-bold text-blue-600">
                {result} {toUnit}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
