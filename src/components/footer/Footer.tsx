import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(to right top, #0066b3, #485da6e6, #288eda, #1270b8, #1d91ea)",
      }}
    >
      <div className="flex xl:container xl:mx-auto justify-between py-10 text-white">
        <div className="">
          <h3 className="text-white mb-2 font-bold">VNPT NGHỆ AN</h3>
          <p>Số 1 Hồ Tùng Mậu - Tp.Vinh - Nghệ An</p>
          <p>Hotline: 18001166</p>
          <p>Email: thongbaocuoc.nan@vnpt.vn</p>
          <p>Fax: 18001166</p>
        </div>
        <div>
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
