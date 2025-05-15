import fs from 'fs';
import path from 'path';

export const validatePath = (filePath: string): string | null => {
  try {
    // Normalize the path
    const normalizedPath = path.normalize(filePath);
    
    // Check if file exists
    if (!fs.existsSync(normalizedPath)) {
      return `File not found at: ${normalizedPath}`;
    }

    // Check if file is accessible
    fs.accessSync(normalizedPath, fs.constants.R_OK);
    return null;
  } catch (error) {
    return `Error accessing file: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
};
