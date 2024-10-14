"use client";
import { changePassword } from "@/apiRequests/auth";
import { getCaptcha } from "@/apiRequests/common";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Lock } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";

const ChangePasswordForm = ({ user }: { user: any }) => {
  const { data, mutate } = getCaptcha();
  const { toast } = useToast();

  const hanldeToast = () => {
    toast({
      title: "Thay đổi mật khẩu thành công!",
    });
  };

  const [error, setError] = useState("");

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
    const result = await changePassword(values);
    if (result.message === "success") {
      hanldeToast();
    } else {
      form.reset();
      mutate();
      setError(result.message);
    }
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
