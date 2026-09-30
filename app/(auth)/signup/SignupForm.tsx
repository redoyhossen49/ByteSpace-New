"use client";

import Link from "next/link";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

import AuthCard from "../AuthCard";
import AuthTextField from "../AuthTextField";

type SignupValues = {
  fullName: string;
  email: string;
  password: string;
};

const emptyValues: SignupValues = { fullName: "", email: "", password: "" };

export default function SignupForm() {
  const [values, setValues] = useState<SignupValues>(emptyValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Sign up submitted", {
      fullName: values.fullName,
      email: values.email,
      password: "*".repeat(values.password.length),
    });
  };

  return (
    <AuthCard className="ring-[3px] ring-brand-blue">
      <p className="text-[15px] font-medium text-brand-blue">
        Create an Account
      </p>

      <h2 className="mt-2 text-[36px] font-bold leading-[1.15] tracking-[-0.02em]">
        Welcome to
        <br />
        ByteSpace
      </h2>

      <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
        <AuthTextField
          label="Full Name"
          name="fullName"
          autoComplete="name"
          placeholder="Jamie Davis"
          value={values.fullName}
          onChange={handleChange}
        />

        <AuthTextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="designer@example.com"
          value={values.email}
          onChange={handleChange}
        />

        <AuthTextField
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          placeholder="••••••••"
          value={values.password}
          onChange={handleChange}
        />

        <div className="flex justify-end">
          <button
            type="submit"
            className="h-14 rounded-full bg-brand-lime px-9 text-[15px] font-semibold text-neutral-900 transition-opacity hover:opacity-90"
          >
            Continue
          </button>
        </div>
      </form>

      <p className="mt-14 text-center text-[15px] text-neutral-500">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-brand-blue transition-opacity hover:opacity-80"
        >
          Login
        </Link>
      </p>
    </AuthCard>
  );
}
