"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format, add, sub } from "date-fns";

export default function DateTimeCalculator() {
  const [date, setDate] = useState("");
  const [operation, setOperation] = useState("add");
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("days");
  const [result, setResult] = useState("");

  const calculateDateTime = () => {
    if (!date || !value) return;

    const numValue = parseInt(value);
    const baseDate = new Date(date);

    const duration = {
      [unit]: numValue,
    };

    const resultDate = operation === "add" 
      ? add(baseDate, duration)
      : sub(baseDate, duration);

    setResult(format(resultDate, "MMMM do, yyyy"));
  };

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Date & Time Calculator</h1>

        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Start Date</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="date">Select Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="mt-1"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Operation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Select value={operation} onValueChange={setOperation}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="add">Add</SelectItem>
                      <SelectItem value="subtract">Subtract</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Input
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Amount"
                  />
                </div>
                <div>
                  <Select value={unit} onValueChange={setUnit}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="days">Days</SelectItem>
                      <SelectItem value="weeks">Weeks</SelectItem>
                      <SelectItem value="months">Months</SelectItem>
                      <SelectItem value="years">Years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button size="lg" onClick={calculateDateTime}>
              Calculate
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Result</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center text-3xl font-bold text-blue-600">
                {result || "Select date and enter values"}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
