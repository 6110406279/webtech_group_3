import { initializeApp } from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCVa-fWIOGXdil99D_sDlpKNlYJmY326Us",
    authDomain: "thekids-6ecb4.firebaseapp.com",
    databaseURL: "https://thekids-6ecb4.firebaseio.com",
    projectId: "thekids-6ecb4",
    storageBucket: "thekids-6ecb4.appspot.com",
    messagingSenderId: "952069580652",
    appId: "1:952069580652:web:9105cced1fec3e9baf3549",
    measurementId: "G-1QYZJ5894Y"
};

const app = initializeApp ( firebaseConfig )

export const db = app.firestore()
export const donationCollection = db.collection('donationList')