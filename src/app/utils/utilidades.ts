export function generateID(length:number, current?: string): string {
    current = current ? current : '';
    return length ? generateID(--length, "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * 60)) + current) : current;
  }