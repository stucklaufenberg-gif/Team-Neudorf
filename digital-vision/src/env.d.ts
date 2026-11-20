// Minimale Typen für den Build-Zeit-Check der Reel-Dateien (kein @types/node im Projekt).
declare module 'node:fs' { export function existsSync(path: string): boolean; }
