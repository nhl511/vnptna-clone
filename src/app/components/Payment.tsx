import React from "react";

const Payment = () => {
  return (
    <div
      style={{ zIndex: "-999" }}
      className="h-[374px] bg-[url('/images/bottombg.jpg')]  bottom-0 right-0 left-0 flex justify-center bg-cover items-center bg-fixed"
    >
      <div className="text-white">
        <h2 className="text-3xl mb-2 text-center">THANH TOÁN TRỰC TIẾP</h2>
        <h3 className="text-xl text-center">
          THANH TOÁN Ở MỌI NƠI THEO CÁCH MÀ BẠN MUỐN
        </h3>
        <div className="flex gap-4 justify-center mt-5">
          <button className="py-4 px-10 border border-white bg-[var(--payment-btn-bg)]">
            ĐĂNG KÝ NGAY
          </button>
          <button className="py-4 px-10 border border-white bg-[var(--payment-btn-bg)]">
            THANH TOÁN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
