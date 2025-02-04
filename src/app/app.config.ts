import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideFirebaseApp(() => initializeApp({ projectId: "angularfirstproject-f79b1", appId: "1:450787442935:web:dc07901274e8053e3813f2", storageBucket: "angularfirstproject-f79b1.firebasestorage.app", apiKey: "AIzaSyBdmeVl7iqZ4ODgAvRcPHjMZhdNMoLQhgc", authDomain: "angularfirstproject-f79b1.firebaseapp.com", messagingSenderId: "450787442935", measurementId: "G-1BYMYYM3W7" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
