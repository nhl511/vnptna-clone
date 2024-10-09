"use client";
import React, { useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Lock, User } from "lucide-react";
import useSWR from "swr";
import { authenticate } from "@/lib/actions";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const fetcher = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/api/v1/portal/common/captcha"
    );
    const result = await res.json();
    return result.data;
  };
  const { data, mutate, isLoading } = useSWR(
    "api/v1/portal/common/captcha",
    fetcher
  );
  const [state, formAction] = useFormState(authenticate, undefined);

  useEffect(() => {
    if (state?.message !== "success") {
      mutate();
      formRef.current?.reset();
    }
  }, [state?.message]);

  useEffect(() => {
    if (state?.message === "success") {
      router.push("/user-info");
    }
  }, [state?.message, router]);

  return (
    <form action={formAction} ref={formRef}>
      <div className="mt-4 flex flex-col gap-3">
        <div className="w-full relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <User className="text-[var(--login-btn)]" />
          </span>
          <Input
            name="username"
            className="pl-11"
            placeholder="Mã KH, Điện thoại, Account Internet"
          />
        </div>

        <div className="w-full relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Lock className="text-[var(--login-btn)]" />
          </span>
          <Input
            name="password"
            type="password"
            className="pl-11"
            placeholder="Mật khẩu"
          />
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 sm:col-span-6">
            <Input name="captcha_text" placeholder="Mã kiểm tra" />
          </div>
          <div
            className="col-span-12 sm:col-span-6"
            dangerouslySetInnerHTML={{ __html: data?.svg }}
          />
        </div>
      </div>
      <Input name="partner_id" value={66} type="" className="hidden" readOnly />
      <Input
        name="captcha_token"
        value={data?.token}
        type=""
        className="hidden"
        readOnly
      />
      <p className="text-sm text-red-600 mt-5">
        {state?.message !== "success" && state?.message}
      </p>
      <div className="flex justify-center mt-5">
        <button
          type="submit"
          className="py-2 px-4 bg-[var(--login-btn)] text-white font-bold rounded-md"
        >
          Đăng nhập
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
