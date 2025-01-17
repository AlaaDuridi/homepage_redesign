import {dictionary} from "../locales";
import {Language} from "../types/common.ts";

export function t(key: string, language: Language): string {
    const [section, item] = key.split('.');
    // Fallback logic if not found:
    return dictionary[language][section]?.[item] ?? key;
}