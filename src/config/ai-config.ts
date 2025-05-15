import path from 'path';
import { AIConfig } from '@/types/ai';

const GDRIVE_BASE_PATH = 'H:\\.shortcut-targets-by-id\\1e2QvGEOh88DqSHDJyQjq8b9swwVcx-_D\\Fine-Tune-LORA';

// Normalize the path to handle Windows backslashes correctly
const normalizePath = (pathString: string): string => {
  return path.normalize(pathString).replace(/\\/g, '\\\\');
};

export const AI_CONFIG: AIConfig = {
  // Update these paths according to your actual folder structure inside Fine-Tune-LORA
  checkpointPath: normalizePath(path.join(GDRIVE_BASE_PATH, 'checkpoint-1500', 'model.safetensors')),
  loraPath: normalizePath(path.join(GDRIVE_BASE_PATH, 'pytorch_lora_weights.safetensors')),
  settings: {
    steps: 50,
    guidanceScale: 7.5,
  }
};
