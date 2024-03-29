import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: {
        information: "Information",
        introduce: "Introduce",
        commitment: "Commitment",
        news: "News",
        contact: "Contact",
        // Hero
        hero_title: "Diagnose Skin Conditions",
        hero_title_1: "In Just 7s",
        hero_content:
          "The skin analysis and diagnosis application integrates AI artificial intelligence in just 3 steps, you will receive results immediately.",
        hero_step_1: "Step 1 :",
        hero_content_1: "Scan the skin",
        hero_step_2: "Step 2 :",
        hero_content_2: "In-depth survey",
        hero_step_3: "Step 3 :",
        hero_content_3: "Receive results",
        scan_now: "Scan now",
        // Statistical
        user: "Number of users experiencing",
        doctor: "Doctors advise on skin",
        application: "Research and Application",
        analyzed_image: "Images processed for diagnosis analysis",
        patented_product: "Patented product",
        //Content
        content_title: "Health Care",
        content_title_sub: "The Best Skin For All Skin Types",
        content_title_1: "Discover Products",
        content_title_sub_1: "Acne Treatment",
        content_title_2: "Discover Products",
        content_title_sub_2: "Anti-aging skin",
        content_title_3: "Our Commitment",
        content_title_sub_3: "To You",
        discover: "Discover",
        //Rule
        rule_1: " Guarantee ",
        rule_2: "Information Security",
        rule_3: "Latest Technology",
        rule_4: "Experience",
      },
    },
    vi: {
      translations: {
        information: "Thông tin",
        introduce: "Giới thiệu",
        commitment: "Cam kết",
        news: "Bí quyết chăm sóc da",
        contact: "Liên hệ",
        // Hero
        hero_title: "Chuẩn Đoán Tình Trạng Da",
        hero_title_1: "Chỉ trong 7s",
        hero_content:
          "Ứng dụng phân tích chuẩn đoán da tích hợp trí tuệ thông minh nhân tạo AI chỉ trong 3 bước thưc hiên đã nhận ngay kết quả.",
        hero_step_1: "Bước 1 :",
        hero_content_1: "Quét da",
        hero_step_2: "Bước 2 :",
        hero_content_2: "Khảo sát chuyên sâu",
        hero_step_3: "Bước 3 :",
        hero_content_3: "Nhận kết quả",
        scan_now: "Trải Nghiệm Ngay",
        // Statistical
        user: "Số người dùng trải nghiệm",
        doctor: "Bác sĩ cho lời khuyên về da",
        application: "Nghiên cứu và Ứng dụng",
        analyzed_image: "Hình ảnh được xử lý chuẩn đoán phân tích",
        patented_product: "Sản phẩm cấp bằng sáng chế",
        //Content
        content_title: "Chăm Sóc Sức Khỏe",
        content_title_sub: "Làn Da Tốt Nhất Cho Mọi Loại Da",
        content_title_1: "Khám Phá Sản Phẩm",
        content_title_sub_1: "Trị Mụn",
        content_title_2: "Khám Phá Sản Phẩm Cải",
        content_title_sub_2: "Làn Da Lão Hóa",
        content_title_3: "Cam Kết",
        content_title_sub_3: "Của Chúng Tôi",
        discover: "Khám Phá",
        //Rule
        rule_1: " Đảm Bảo ",
        rule_2: "Bảo Mật Thông Tin ",
        rule_3: "Công Nghệ Mới Nhất",
        rule_4: "Trải Nghiệm",
      },
    },
  },
  lng: "vi",
  fallbackLng: "vi",
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },
  react: {
    wait: true,
  },
});

export default i18n;
