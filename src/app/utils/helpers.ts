import * as fs from "fs";

export function getFilenamesFromFolder(folderPath: string): string[] {
  try {
    // Read the directory content and return filenames directly
    return fs.readdirSync(folderPath);
  } catch (error) {
    console.error("Error reading folder:", error);
    return [];
  }
}
