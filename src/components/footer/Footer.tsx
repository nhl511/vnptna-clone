import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(to right top, #0066b3, #485da6e6, #288eda, #1270b8, #1d91ea)",
      }}
    >
      <div className="xl:container grid grid-cols-12 text-white mx-auto py-8 px-4 xl:px-0 gap-4">
        <div className="col-span-12 lg:col-span-6">
          <h3 className="text-white mb-2 font-bold">VNPT NGHỆ AN</h3>
          <p>Số 1 Hồ Tùng Mậu - Tp.Vinh - Nghệ An</p>
          <p>Hotline: 18001166</p>
          <p>Email: thongbaocuoc.nan@vnpt.vn</p>
          <p>Fax: 18001166</p>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <p>
            Hãy gọi tới 18001166 để được tư vấn hỗ trợ kịp thời | Copyright
            ©2012 VNPT Nghệ An
          </p>
          <p>Giấy phép số 155/GP-TTĐT cấp ngày 18/10/2012</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
