import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';import { initializeApp } from 'firebase/app';

import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyCJH0Zz5Eg5iZJA4RwN3thQM6BpSH7mCSM",
  authDomain: "shopping-login-a417e.firebaseapp.com",
  projectId: "shopping-login-a417e",
  storageBucket: "shopping-login-a417e.appspot.com",
  messagingSenderId: "586849767220",
  appId: "1:586849767220:web:a7dac42705ae09463c1f61"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ]
};
