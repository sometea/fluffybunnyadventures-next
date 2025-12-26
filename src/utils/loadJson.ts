import { readFile } from "fs/promises";

export async function loadJson<T>(path: string): Promise<T> {
  const data = await readFile(path, 'utf-8');
  const parsedData = JSON.parse(data);
  return parsedData as T;
}