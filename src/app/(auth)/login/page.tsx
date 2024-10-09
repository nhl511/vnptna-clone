import Link from "next/link";
import React from "react";
import Image from "next/image";
import LoginForm from "./components/LoginForm";

const LoginPage = async () => {
  return (
    <>
      <h3 className="text-center font-bold text-[var(--login-btn)] text-xl">
        ĐĂNG NHẬP
      </h3>
      <LoginForm />
      <div className="flex justify-center mb-2">
        <Link
          href=""
          className="text-red-500 font-bold text-sm underline text-center"
        >
          Thuê bao trả sau Vinaphone tra cứu cước tại đây
        </Link>
      </div>
      <div className="flex justify-center">
        <Link
          href="/forget-password"
          className="text-blue-500 font-bold text-sm underline"
        >
          Quên mật khẩu
        </Link>
      </div>
      <Image
        className="absolute top-[-7px] right-0"
        src="/images/tag-login.png"
        alt=""
        width={78}
        height={69}
      />
    </>
  );
};

export default LoginPage;
