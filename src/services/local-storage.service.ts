import { Injectable } from '@angular/core';
import { LocalStorage } from '../models/enums/local-storage.enum';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  get(key: LocalStorage): string | null {
    const prefix = btoa(key).replace(/=/g, '');
    const item = localStorage.getItem(key);
    if (!item) {
      return null;
    }
    try {
      const base64 = atob(item).replace(prefix, '');
      return atob(base64);
    } catch (error) {
      return null;
    }
  }

  set(key: LocalStorage, value: string) {
    const prefix = btoa(key).replace(/=/g, '');
    const base64 = btoa(value);
    localStorage.setItem(key, btoa(prefix + base64));
    localStorage.setItem('viewAs', 'list');
  }

  setArray(key: LocalStorage, values: any[]) {
    const value = values.toString();
    this.set(key, value);
  }

  getArray(key: LocalStorage): any[] | null {
    const value = this.get(key);
    return value ? value.split(',') : null;
  }

  setObject(key: LocalStorage, obj: any) {
    const value = JSON.stringify(obj);
    this.set(key, value);
  }

  getObject(key: LocalStorage): any {
    const value = this.get(key) || '';
    try {
      return JSON.parse(value)
    } catch (error) {
      return null
    }
  }

  delete(key: LocalStorage) {
    localStorage.removeItem(key);
  }
}
