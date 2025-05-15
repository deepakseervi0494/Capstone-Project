'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Lightbulb, Mic, MicOff } from "lucide-react";

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  placeholder?: string;
}

// Declare SpeechRecognition and SpeechRecognitionEvent for TypeScript
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

type SpeechRecognition = any;
type SpeechRecognitionEvent = any;

const PromptInput = ({ onSubmit, placeholder = "Describe what you want or hit a tag below" }: PromptInputProps) => {
    const [prompt, setPrompt] = useState("");
    const [listening, setListening] = useState(false);
    const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
    const [recognitionActive, setRecognitionActive] = useState(false);
    const [error, setError] = useState(""); // State to hold error message
    const inactivityTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
    useEffect(() => {
      const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognizer = new SpeechRecognition();
        recognizer.continuous = true;
        recognizer.interimResults = true;
        recognizer.lang = 'en-US';
  
        recognizer.onresult = (event: SpeechRecognitionEvent) => {
          let interimTranscript = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              setPrompt((prev) => prev + " " + transcript);
              resetInactivityTimeout();
            } else {
              interimTranscript += transcript;
            }
          }
        };
  
        recognizer.onerror = (event: any) => {
          console.error("Speech recognition error:", event.error);
          setListening(false);
          setRecognitionActive(false);
        };
  
        setRecognition(recognizer);
      } else {
        console.warn("SpeechRecognition API is not supported in this browser.");
      }
    }, []);

    const resetInactivityTimeout = () => {
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
      inactivityTimeoutRef.current = setTimeout(() => {
        handleMicClick();
      }, 3000);
    };
  
    const handleMicClick = () => {
      if (listening) {
        recognition?.stop();
        setListening(false);
        setRecognitionActive(false);
      } else {
        if (recognition && !recognitionActive) {
          recognition.start();
          setListening(true);
          setRecognitionActive(true);
          resetInactivityTimeout();
        }
      }
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (prompt.trim()) {
        onSubmit(prompt);
        setPrompt("");
        setError(""); // Clear error if prompt is valid
      } else {
        setError("Please enter a prompt before generating an image."); // Set custom error message
      }
    };
  
    return (
      <div className="w-[800px]  mx-auto">
        <Card className="p-6">
          <h1 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            Create Faces with Artificial Intelligence
          </h1>
          <div className="text-center text-sm text-gray-500 mb-2">
            Enter a prompt to generate an image.
          </div>
  
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="text"
              value={prompt}
              onChange={(e) => {
                setPrompt(e.target.value);
                setError(""); // Clear error message on input change
              }}
              placeholder={placeholder}
              className="flex-1 h-10 px-4 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
            />
            <Button 
              type="button"
              variant="outline"
              className="px-3"
              onClick={handleMicClick}
            >
              {listening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </Button>
            <Button 
              type="submit"
              className="bg-black hover:bg-gray-800 text-white px-6 rounded-lg flex items-center gap-2"
            >
              Generate
              <Lightbulb size={16} />
            </Button>
          </form>

          {error && <div className="text-red-500 text-sm m-0">{error}</div>} {/* Error message display */}

          <div className="flex gap-3 mt-4 flex-wrap justify-center">
            {['Attractive', 'Smiling', 'Mouth_Slightly_Open', 'Realistic', 'Person'].map((tag) => (
              <Button
                key={tag}
                variant="outline"
                className="text-sm text-gray-600 hover:text-purple-600 hover:border-purple-300"
                onClick={() => setPrompt(prompt ? `${prompt} ${tag}` : tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
        </Card>
      </div>
    );
  };
  
export default PromptInput;
