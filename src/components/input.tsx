"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { useState } from "react";

export function PlaceholdersAndVanishInputDemo() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const placeholders = [
    "Who's that interesting person nearby? Let's find out!",
    "Ever met someone & forgot to exchange socials? Not anymore!",
    "Bumped into someone cool? Find them on LinkedIn instantly.",
    "What if networking was effortless? Try it now!",
    "Missed a chance to connect? Not on our watch!",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setStatus("idle");
    setMessage("");
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist');
      }

      setStatus("success");
      setMessage("Successfully joined waitlist!");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : 'Failed to join waitlist');
    }
  };

  return (
    <div className="w-full mt-4">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
        value={email}
      />
      {status !== "idle" && (
        <p className={`mt-2 text-sm ${status === "success" ? "text-green-400" : "text-red-400"}`}>
          {message}
        </p>
      )}
    </div>
  );
}
