"use client";

import Link from "next/link";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { GrGoogle } from "react-icons/gr";
import { IoLogoFacebook } from "react-icons/io5";

import AuthCard from "../AuthCard";
import AuthTextField from "../AuthTextField";

type LoginValues = {
  email: string;
  password: string;
};

const providers = [
  { label: "Sign in with Facebook", Icon: IoLogoFacebook },
  { label: "Sign in with Google", Icon: GrGoogle },
];

export default function LoginForm() {
  const [values, setValues] = useState<LoginValues>({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Sign in submitted", {
      email: values.email,
      password: "*".repeat(values.password.length),
    });
  };

  return (
    <AuthCard>
      <p className="text-[15px] font-medium text-brand-blue">Sign In</p>

      <h2 className="mt-2 text-[36px] font-bold leading-[1.15] tracking-[-0.02em]">
        Welcome Back
      </h2>

      <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
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
          autoComplete="current-password"
          placeholder="••••••••"
          value={values.password}
          onChange={handleChange}
        />

        <div className="flex justify-end">
          <button
            type="submit"
            className="h-14 rounded-full bg-brand-lime px-9 text-[15px] font-semibold text-neutral-900 transition-opacity hover:opacity-90"
          >
            Sign In
          </button>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <span className="h-px flex-1 bg-neutral-200" />
          <span className="text-[14px] text-neutral-500">or</span>
          <span className="h-px flex-1 bg-neutral-200" />
        </div>

        <div className="mt-4 flex items-center justify-center gap-5">
          {providers.map(({ label, Icon }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              className="flex size-12 items-center justify-center rounded-full border border-neutral-300 text-neutral-900 transition-colors hover:bg-neutral-100"
            >
              <Icon size={22} />
            </button>
          ))}
        </div>
      </form>

      <p className="mt-16 text-center text-[15px] text-neutral-500">
        New user?{" "}
        <Link
          href="/signup"
          className="font-medium text-brand-blue transition-opacity hover:opacity-80"
        >
          Create an account
        </Link>
      </p>
    </AuthCard>
  );
}
