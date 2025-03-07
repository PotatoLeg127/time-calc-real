"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign, Calculator } from "lucide-react";

export default function WorkHoursTracker() {
  const [entries, setEntries] = useState([{ startTime: "", endTime: "", rate: "" }]);
  const [totalHours, setTotalHours] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const addEntry = () => {
    setEntries([...entries, { startTime: "", endTime: "", rate: "" }]);
  };

  const updateEntry = (index: number, field: string, value: string) => {
    const newEntries = [...entries];
    newEntries[index] = { ...newEntries[index], [field]: value };
    setEntries(newEntries);
  };

  const removeEntry = (index: number) => {
    const newEntries = entries.filter((_, i) => i !== index);
    setEntries(newEntries);
  };

  const calculateHours = () => {
    let totalMinutes = 0;
    let totalPay = 0;

    entries.forEach(entry => {
      if (entry.startTime && entry.endTime) {
        const start = new Date(`2000/01/01 ${entry.startTime}`);
        const end = new Date(`2000/01/01 ${entry.endTime}`);
        let diff = (end.getTime() - start.getTime()) / 1000 / 60; // minutes
        
        if (diff < 0) {
          diff += 24 * 60; // Add 24 hours if end time is next day
        }

        totalMinutes += diff;
        if (entry.rate) {
          totalPay += (diff / 60) * parseFloat(entry.rate);
        }
      }
    });

    setTotalHours(Math.round((totalMinutes / 60) * 100) / 100);
    setTotalAmount(Math.round(totalPay * 100) / 100);
  };

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Work Hours Tracker</h1>

        <div className="grid gap-8">
          {entries.map((entry, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  Work Period {index + 1}
                  {entries.length > 1 && (
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeEntry(index)}
                    >
                      Remove
                    </Button>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor={`startTime-${index}`}>Start Time</Label>
                    <Input
                      id={`startTime-${index}`}
                      type="time"
                      value={entry.startTime}
                      onChange={(e) => updateEntry(index, "startTime", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`endTime-${index}`}>End Time</Label>
                    <Input
                      id={`endTime-${index}`}
                      type="time"
                      value={entry.endTime}
                      onChange={(e) => updateEntry(index, "endTime", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`rate-${index}`}>Hourly Rate ($)</Label>
                    <Input
                      id={`rate-${index}`}
                      type="number"
                      min="0"
                      step="0.01"
                      value={entry.rate}
                      onChange={(e) => updateEntry(index, "rate", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="flex justify-center gap-4">
            <Button onClick={addEntry} variant="outline">
              Add Another Period
            </Button>
            <Button onClick={calculateHours}>Calculate</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Total Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600">
                  {totalHours} hours
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Total Amount
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">
                  ${totalAmount}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
