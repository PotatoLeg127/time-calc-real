"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer, Play, Pause, RotateCcw } from "lucide-react";

export default function CountdownTimer() {
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("0");
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isRunning, setIsRunning] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning && totalSeconds > 0) {
      intervalId = setInterval(() => {
        setTotalSeconds((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });

        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        setTimeLeft({ hours, minutes, seconds });
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning, totalSeconds]);

  const startTimer = () => {
    const totalSecs = 
      parseInt(hours) * 3600 + 
      parseInt(minutes) * 60 + 
      parseInt(seconds);
    
    if (totalSecs > 0) {
      setTotalSeconds(totalSecs);
      setTimeLeft({
        hours: parseInt(hours),
        minutes: parseInt(minutes),
        seconds: parseInt(seconds),
      });
      setIsRunning(true);
    }
  };

  const toggleTimer = () => {
    if (!isRunning && totalSeconds === 0) {
      startTimer();
    } else {
      setIsRunning(!isRunning);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTotalSeconds(0);
    setHours("0");
    setMinutes("0");
    setSeconds("0");
    setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
  };

  const handleInputChange = (value: string, setter: (value: string) => void, max: number) => {
    const num = parseInt(value) || 0;
    if (num >= 0 && num <= max) {
      setter(num.toString());
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Countdown Timer</h1>

        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Set Timer Duration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="hours">Hours</Label>
                  <Input
                    id="hours"
                    type="number"
                    min="0"
                    max="23"
                    value={hours}
                    onChange={(e) => handleInputChange(e.target.value, setHours, 23)}
                    disabled={isRunning}
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
                    onChange={(e) => handleInputChange(e.target.value, setMinutes, 59)}
                    disabled={isRunning}
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
                    onChange={(e) => handleInputChange(e.target.value, setSeconds, 59)}
                    disabled={isRunning}
                    className="mt-1"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-4">
            <Button
              onClick={toggleTimer}
              size="lg"
              className={isRunning ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-500 hover:bg-green-600"}
            >
              {isRunning ? (
                <>
                  <Pause className="w-5 h-5 mr-2" /> Pause
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 mr-2" /> Start
                </>
              )}
            </Button>
            <Button
              onClick={resetTimer}
              size="lg"
              variant="outline"
            >
              <RotateCcw className="w-5 h-5 mr-2" /> Reset
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Timer className="h-6 w-6" />
                Time Remaining
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-4xl font-bold text-blue-600">
                    {timeLeft.hours.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm text-gray-600">Hours</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-4xl font-bold text-blue-600">
                    {timeLeft.minutes.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm text-gray-600">Minutes</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-4xl font-bold text-blue-600">
                    {timeLeft.seconds.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm text-gray-600">Seconds</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
