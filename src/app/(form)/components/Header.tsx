import React from "react";

const Header = ({ title, des }: { title: string; des: string }) => {
  return (
    <div className="">
      <h2 className="text-3xl text-center font-bold text-[var(--login-btn)] mb-10 uppercase">
        {title}
      </h2>
      <div>
        <div>
          <p className="text-red-600 font-bold">Lưu ý</p>
          <p>Các mục có dấu sao "*" là bắt buộc phải chọn nhập.</p>
          <p>Phông chữ sử dụng trong trang web là Unicode.</p>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-center text-xl text-[var(--login-btn)] font-bold underline mb-5 normal-case">
          {des}
        </h3>
      </div>
    </div>
  );
};

export default Header;
