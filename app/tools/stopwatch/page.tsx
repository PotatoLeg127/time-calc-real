"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer, Play, Pause, RotateCcw, Flag } from "lucide-react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const addLap = () => {
    setLaps([...laps, time]);
  };

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Stopwatch</h1>

        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Timer className="h-6 w-6" />
                Elapsed Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600 font-mono">
                  {formatTime(time)}
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
            <Button
              onClick={addLap}
              size="lg"
              variant="outline"
              disabled={!isRunning}
            >
              <Flag className="w-5 h-5 mr-2" /> Lap
            </Button>
          </div>

          {laps.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Lap Times</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {laps.map((lapTime, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="font-medium">Lap {index + 1}</span>
                      <span className="font-mono">{formatTime(lapTime)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
