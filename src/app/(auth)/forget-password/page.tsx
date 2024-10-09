import { Input } from "@/components/ui/input";
import { Mail, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getCaptcha = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/api/v1/portal/common/captcha",
    { cache: "no-store" }
  );
  const result = await res.json();
  return result.data;
};

const ForgetPassWordPage = async () => {
  const captcha = await getCaptcha();

  return (
    <>
      <h3 className="text-center font-bold text-[var(--login-btn)] text-xl">
        LẤY LẠI MẬT KHẨU
      </h3>
      <div className="mt-4 flex flex-col gap-3">
        <div className="w-full relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <User className="text-[var(--login-btn)]" />
          </span>
          <Input className="pl-11" placeholder="Nhập mã khách hàng" />
        </div>
        <div className="w-full relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Mail className="text-[var(--login-btn)]" />
          </span>
          <Input
            type="email"
            className="pl-11"
            placeholder="Nhập email tài khoản"
          />
        </div>
        <div className="grid grid-cols-12 gap-4">
          <Input
            className="col-span-12 sm:col-span-6"
            placeholder="Mã kiểm tra"
          />
          <div
            className="col-span-12 sm:col-span-6"
            dangerouslySetInnerHTML={{ __html: captcha.svg }}
          />
        </div>
      </div>
      <div className="flex justify-center mt-5 gap-4">
        <button className="bg-[linear-gradient(225deg,#2ed3ae,#109df7)] text-white py-2 w-[120px] rounded-md text-sm">
          Gửi mật khẩu
        </button>
        <Link href="/">
          <button className="bg-[linear-gradient(225deg,#2ed3ae,#109df7)] text-white py-2 w-[120px] rounded-md text-sm">
            Đóng
          </button>
        </Link>
      </div>
    </>
  );
};

export default ForgetPassWordPage;
