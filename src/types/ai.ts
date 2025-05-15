export interface AIConfig {
    checkpointPath: string;
    loraPath: string;
    settings: {
      steps: number;
      guidanceScale: number;
    };
  }
  
  export interface GenerateRequest {
    prompt: string;
  }
  
  export interface GenerateResponse {
    image?: string;
    error?: string;
    details?: string;
  }
  
  export interface ModelConfig {
    model: string;
    revision: 'fp16';
    torch_dtype: 'float16';
    low_cpu_mem_usage: boolean;
    use_lora: boolean;
    lora_weights: string;
  }
  
  export interface GenerationSettings {
    num_inference_steps: number;
    guidance_scale: number;
  }