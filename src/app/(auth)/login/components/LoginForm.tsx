"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Lock, User } from "lucide-react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import useSWR from "swr";

const LoginForm = () => {
  const [error, setError] = useState("");
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

  const form = useForm({
    defaultValues: {
      partner_id: 66,
      username: "",
      password: "",
      captcha_token: "",
      captcha_text: "",
    },
  });

  useEffect(() => {
    if (data?.token) {
      form.setValue("captcha_token", data.token);
    }
  }, [data, form]);

  const onSubmit = async (values: any) => {
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
          "/api/v1/portal/user/processLogin",
        {
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        }
      ).then(async (result) => {
        const payload = await result.json();
        const data = {
          status: result.status,
          payload,
        };
        if (!result.ok) {
          if (!data?.payload.message) {
            setError(data.payload.error.message);
          } else {
            setError(data.payload.message);
          }
          form.resetField("password");
          form.resetField("captcha_text");
          mutate();
        }
        return data;
      });
      await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(res),
      }).then(async (result) => {
        const payload = await result.json();
        const data = {
          status: result.status,
          payload,
        };
        if (!result.ok) {
          throw data;
        }
        return data;
      });
      window.location.href = "/user-info";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <div className="mt-4 flex flex-col gap-3">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="w-full relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <User className="text-[var(--login-btn)]" />
                    </span>
                    <Input
                      className="pl-11"
                      placeholder="Mã KH, Điện thoại, Account Internet"
                      {...field}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="w-full relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Lock className="text-[var(--login-btn)]" />
                    </span>
                    <Input
                      type="password"
                      className="pl-11"
                      placeholder="Mật khẩu"
                      {...field}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-span-6">
              <FormField
                control={form.control}
                name="captcha_text"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Mã kiểm tra" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div
              className="col-span-12 sm:col-span-6"
              dangerouslySetInnerHTML={{ __html: data?.svg }}
            />
          </div>
        </div>
        <p className="text-sm text-red-600 mt-5">{error}</p>
        <div className="flex justify-center mt-5">
          <button className="py-2 px-4 bg-[var(--login-btn)] text-white font-bold rounded-md">
            Đăng nhập
          </button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
