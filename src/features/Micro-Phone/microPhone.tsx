import React, { useEffect, useState } from 'react';
import { Mic, MicOff } from "lucide-react";

interface MicrophoneComponentProps {
  setTranscript: (transcript: string) => void;
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

const MicrophoneComponent = ({ setTranscript }: MicrophoneComponentProps) => {
  const [listening, setListening] = useState(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  useEffect(() => {
    // Initialize SpeechRecognition API
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
            setTranscript(transcript);
          } else {
            interimTranscript += transcript;
          }
        }
        console.log(interimTranscript)
      };

      recognizer.onerror = (event:any) => {
        console.error("Speech recognition error:", event.error);
        setListening(false);
      };

      setRecognition(recognizer);
    } else {
      console.warn("SpeechRecognition API is not supported in this browser.");
    }
  }, [setTranscript]);

  const startListening = () => {
    if (recognition) {
      recognition.start();
      setListening(true);
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setListening(false);
    }
  };

  return (
    <button
      onClick={() => {
        listening ? stopListening() : startListening();
      }}
      className="bg-gray-200 p-2 rounded-full"
    >
      {listening ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
    </button>
  );
};

export default MicrophoneComponent;
