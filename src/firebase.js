import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAMK032jjqMWYVYORS3etJsygZAbTbkCV8',
	authDomain: 'mensajes-casorio.firebaseapp.com',
	projectId: 'mensajes-casorio',
	storageBucket: 'mensajes-casorio.appspot.com',
	messagingSenderId: '933503132777',
	appId: '1:933503132777:web:f6f7e8b5ee97cbf12f6ef8',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
