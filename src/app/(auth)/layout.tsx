import { Handshake, IdCard, ThumbsUp, Trophy } from "lucide-react";
import React from "react";
import Benefit from "./components/Benefit";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const benefits: benefitType[] = [
    {
      icon: <ThumbsUp size="40px" className="text-[var(--login-btn)]" />,
      title: "Đơn giản và Ngay lập tức",
      description:
        "Cổng thanh toán trực tuyến - Quý khách thanh toán các dịch vụ của VNPT bằng tất cả các tài khoản ngân hàng nội địa và quốc tế (Visa/Master).",
    },
    {
      icon: <Trophy size="40px" className="text-[var(--login-btn)]" />,
      title: "Lợi ích",
      description:
        "Mang đến nhiều lợi ích khi Quý khách tạo tài khoản trực tuyến: Tra cứu tiến độ lắp đặt, xử lý sự cố; Tra cứu lịch sử sử dụng dịch vụ",
    },
    {
      icon: <Handshake size="40px" className="text-[var(--login-btn)]" />,
      title: "Tin cậy",
      description:
        "Bảo mật trực tuyến luôn là ưu tiên của chúng tôi để giúp Quý khách luôn luôn an tâm, tin tưởng khi thực hiện thanh toán trực tuyến.",
    },
    {
      icon: <IdCard size="40px" className="text-[var(--login-btn)]" />,
      title: "Hướng dẫn mở tài khoản",
      description:
        "Miễn phí mở tài khoản, Miễn phí mọi giao dịch, Giao dịch 24/7 - Mọi lúc mọi nơi",
    },
  ];
  return (
    <div>
      <div className="bg-[url(/images/loginbg.jpg)] bg-cover bg-center h-[600px] px-4 xl:px-0 h-[max-content] py-20">
        <div className="xl:container xl:mx-auto grid grid-cols-12 md:space-x-10 space-y-10 md:space-y-0">
          <div className="col-span-12 md:col-span-6 xl:flex xl:justify-center">
            <div className="relative bg-gray-50 px-4 py-8 flex flex-col gap-3 w-[100%] xl:w-[60%]">
              {children}
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:flex xl:justify-center">
            <div className="bg-white p-6 flex flex-col gap-3 text-[var(--login-btn)] h-full xl:w-[70%] rounded-md">
              <p>
                - Quý khách hàng chưa có, hoặc quên mật khẩu tra cứu cước vui
                lòng liên hệ tại các điểm giao dịch của{" "}
                <b className="underline">VNPT Nghệ An</b> hoặc trực tiếp qua
                nhân viên thu cước để có thông tin.
              </p>
              <p>
                - Bạn có thể xem hướng dẫn cách tra cứu cước{" "}
                <b className="underline">
                  VNPT Nghệ An - Hướng dẫn tra cứu cước
                </b>{" "}
                để hiểu rõ về cách tra cứu cước online của VNPT Nghệ An.
              </p>
              <p>
                - Quý khách thực hiện tra cứu cước ở mọi lúc, mọi nơi trên dòng
                Smartphone sử dụng hệ điều hành iOS, Android như: Iphone, Ipad,
                Samsung, Nokia, LG.
              </p>
              <p>
                - Liên hệ số ĐT CSKH <b className="text-red-500">18001166</b> để
                được hướng dẫn chi tiết.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:container xl:mx-auto px-4 xl:px-0">
        <div className="flex flex-col gap-4 border border-gray-300 p-8 mt-10">
          <div>
            <h3 className="font-bold text-center">THÔNG BÁO</h3>
            <h3 className="font-bold text-center">Kính gửi: Quý khách hàng</h3>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              <b className="text-[var(--login-btn)]">
                Viễn thông Nghệ An (VNPT Nghệ An)
              </b>{" "}
              xin gửi tới Quý khách hàng lời chào trân trọng và lời cảm ơn chân
              thành đến Quý khách hàng đã tin tưởng sử dụng các dịch vụ Viễn
              thông Công nghệ thông tin của VNPT Nghệ An trong thời gian qua.
            </p>
            <p>
              Với mục đích bảo mật thông tin khách hàng, đáp ứng yêu cầu ngày
              càng cao và đa dạng của Quý khách hàng đồng thời thực hiện chủ
              trương của Nhà nước trong việc ứng dụng công nghệ thông tin vào
              hoạt động sản xuất kinh doanh và hưởng ứng Luật Bảo vệ Môi trường
              kể từ kỳ cước tháng 11 của năm 2012, VNPT Nghệ An thêm hình thức
              cung cấp bảng kê chi tiết cước qua internet. Để thực hiện việc
              này, trong các bảng kê chi tiết cước kỳ cước tháng 9/2012 và tháng
              10/2012, VNPT Nghệ An đã cung cấp Account (mã khách hàng và mật
              khẩu) để Quý khách hàng có thể đăng nhập vào website
              www.vnptnghean.vn. Bắt đầu từ kỳ cước tháng 11 của năm 2012, Quý
              khách hàng có thể xem tổng tiền cước và chi tiết cước của khách
              hàng đã sử dụng trên internet.
            </p>
            <p>
              Theo đó, nếu cần bảng kê chi tiết cước hàng tháng, Quý khách hàng
              có thể:
            </p>
            <p>
              1. Nhận bảng kê chi tiết cước bằng bản giấy (miễn phí lần đầu)
              bằng cách:
            </p>
            <p>- Đăng ký với nhân viên thu cước.</p>
            <p>
              - Đến các điểm giao dịch của VNPT Nghệ An đề nghị in bảng kê chi
              tiết.
            </p>
            <p>
              (Để thực hiện cam kết giữ bí mật thông tin, VNPT Nghệ An chỉ cung
              cấp bảng kê chi tiết cước cho Quý khách hàng khi Quý khách hàng
              chứng minh mình đúng là chính chủ thuê bao hoặc được ủy quyền của
              chính chủ thuê bao bằng các giấy tờ tùy thân hợp pháp).
            </p>
            <p>3. Truy nhập website: www.vnptnghean.vn</p>
            <p>
              Theo tên đăng nhập và mật khẩu tra cứu cước đã được cung cấp tới
              Quý Khách hàng trong các kỳ cước tháng 9 và tháng 10 hoặc trong
              hợp đồng cung cấp dịch vụ (đối với Quý khách hàng đăng ký sử dụng
              dịch vụ từ 01/11/2012).
            </p>
            <p>
              Trường hợp Quý khách hàng cần lấy lại tên đăng nhập và mật khẩu
              tra cứu cước thì có thể bằng một trong các cách sau:
            </p>
            <p>
              1. Sử dụng chức năng lấy lại mật khẩu trên trang web
              http://www.vnptnghean.vn. Khách hàng truy nhập vào menu tra cứu
              cước (link đến menu tra cứu cước), vào mục Lấy lại mật khẩu (link
              đến menu lấy lại mật khẩu) và thực hiện theo các bước trên trang
              web để lấy lại mật khẩu.
            </p>
            <p>
              2. Đến các điểm giao dịch của VNPT Nghệ An tại các Trung tâm
              huyện, thị, thành phố yêu cầu cấp lại.
            </p>
            <p>
              4. Lấy lại tên đăng nhập: Truy nhập vào trang web của VNPT Nghệ An
              (http://www.vnptnghean.vn) nhập Tên, số ĐT hoặc Địa chỉ tại phần
              tra cứu danh bạ để lấy lại tên đăng nhập.
            </p>
            <p>
              Sử dụng hình thức tra chi tiết cước các cuộc gọi các dịch vụ Viễn
              thông - Công nghệ thông tin trên website http://www.vnptnghean.vn,
              Quý khách hàng có thể xem cước được nhiều tháng cùng lúc và tại
              bất cứ địa điểm nào có kết nối sử dụng dịch vụ Internet, 3G của
              tất cả các nhà mạng, tại bất cứ nơi đâu trên toàn quốc.
            </p>
            <p>
              Ngoài ra, để được thông báo tổng hợp tiền cước dịch vụ Viễn
              thông-Công nghệ thông tin đã sử dụng trong tháng và những tháng
              trước đó, Quý khách gọi đến hộp thư thoại 18001166 từ máy điện
              thoại cố định hữu tuyến hoặc vô tuyến Gphone, số máy di động của
              khách hàng đã đăng ký với VNPT Nghệ An.
            </p>
            <p>
              Để được hỗ trợ và tư vấn dịch vụ, Quý khách hàng vui lòng liên hệ
              các điểm giao dịch của VNPT Nghệ An, hoặc gọi số điện thoại CSKH
              18001166 (miễn phí cho điện thoại cố định của VNPT Nghệ An gọi
              vào).
            </p>
            <p className="italic">Trân trọng!</p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 mt-10 mb-10">
          {benefits.map((benefit: benefitType) => (
            <Benefit benefit={benefit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default layout;
