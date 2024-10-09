"use client";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Lock } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";

const ChangePasswordForm = ({ user }: { user: any }) => {
  const { toast } = useToast();

  const hanldeToast = () => {
    toast({
      title: "Thay đổi mật khẩu thành công!",
    });
  };

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
      username: user.data.USERNAME,
      old_password: "",
      new_password: "",
      logged: 0,
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
    await fetch(
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
        "/api/v1/portal/user/changePass",
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
        form.reset();
        mutate();
      } else {
        hanldeToast();
      }
      return data;
    });
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
          <div className="mt-4 flex flex-col gap-3">
            <FormField
              control={form.control}
              name="old_password"
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
                        placeholder="Nhập mật khẩu cũ"
                        {...field}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="new_password"
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
                        placeholder="Nhập mật khẩu mới"
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
            <button className="py-2 px-10 bg-[linear-gradient(225deg,#2ed3ae,#109df7)] text-white font-bold rounded-md mt-5">
              Lưu
            </button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default ChangePasswordForm;
