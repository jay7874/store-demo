"use client";
import Header from "./Header";
import LoginModal from "./LoginModal";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">{children}</main>
      <LoginModal />
    </div>
  );
}
