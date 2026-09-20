// Config project Firebase baru. Ganti semua nilai "ISI_..." di bawah dengan
// nilai dari Firebase Console -> Project settings -> General -> Your apps -> Web app
// (bagian "SDK setup and configuration" -> pilih "Config").
export const firebaseConfig = {
  apiKey: "ISI_API_KEY",
  authDomain: "ISI_PROJECT_ID.firebaseapp.com",
  projectId: "ISI_PROJECT_ID",
  storageBucket: "ISI_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "ISI_MESSAGING_SENDER_ID",
  appId: "ISI_APP_ID",
  measurementId: "ISI_MEASUREMENT_ID", // opsional, hapus baris ini kalau Analytics tidak diaktifkan
};
