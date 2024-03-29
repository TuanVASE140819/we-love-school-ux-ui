// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import AboutImg from '../src/assets/img/about.png';
import Feature1Img from '../src/assets/img/features/feature1.png';
import Feature2Img from '../src/assets/img/features/feature2.png';
import Feature3Img from '../src/assets/img/features/feature3.png';
import Feature4Img from '../src/assets/img/features/feature4.png';
import Avatar1Img from '../src/assets/img/testimonials/avatar1.png';
import Avatar2Img from '../src/assets/img/testimonials/avatar2.png';
import Avatar3Img from '../src/assets/img/testimonials/avatar3.png';
import LogoV2 from '../src/assets/img/logo-v2.png';
import HeroImage from '../src/assets/img/aigirl.png';
import InforImage from "../src/assets/img/inforindex.png";
import Feature1BgImg from "../src/assets/img/features/feature1_bg.png";
import Feature2BgImg from "../src/assets/img/features/feature2_bg.png";
import Feature3BgImg from "../src/assets/img/features/feature3_bg.png";
import Feature4BgImg from "../src/assets/img/features/feature4_bg.png";
import QRImage from "../src/assets/img/Qr.png";
import user from "../src/assets/img/human.png";
import bacsi from "../src/assets/img/human2.png";
import light from "../src/assets/img/den.png";
import image from "../src/assets/img/hinh.png";
import product from "../src/assets/img/giay.png";

// model 1
import Model1 from "../src/assets/img/model/model1.png";
import Model2 from "../src/assets/img/model/model2.png";
import Model3 from "../src/assets/img/model/model3.png";

//product
import Product1 from "../src/assets/img/infor/product1.png";
import Product2 from "../src/assets/img/infor/product2.png";
import Product3 from "../src/assets/img/infor/product3.png";
import Product4 from "../src/assets/img/infor/product4.png";

//news
import News1 from "../src/assets/img/News/New1.png";
import News2 from "../src/assets/img/News/New2.png";
import News3 from "../src/assets/img/News/New3.png";

//rule
import Rule1 from "../src/assets/img/infor/Icon/Icon1.png";
import Rule2 from "../src/assets/img/infor/Icon/Icon2.png";
import Rule3 from "../src/assets/img/infor/Icon/Icon3.png";
import Rule4 from "../src/assets/img/infor/Icon/Icon4.png";



import Model4 from "../src/assets/img/model/model4.png";
import Model5 from "../src/assets/img/model/model5.png";
import Model6 from "../src/assets/img/model/model6.png";

// InforBanner
import InforBannerImg from "../src/assets/img/model/model_banner.png";
import InforBannerImg2 from "../src/assets/img/About/banner.png";
import InforBannerImg3 from "../src/assets/img/About/banner2.png";
// Commit 
import CommitBannerImg from "../src/assets/img/Commit/About2.png";
export const navigationData = [
  {
    name: "Thông tin",
    href: "/thong_tin",
  },
  {
    name: "Giới thiệu",
    href: "/gioi_thieu",
  },
  {
    name: "Skin Care Scan",
    href: "/skin_care_scan",
  },
  {
    name: "Cam kết",
    href: "/cam_ket",
  },
  {
    name: "Review",
    href: "/review",
  },
  {
    name: "Bí quyết chăm sóc da",
    href: "/bi_quyet_cham_soc_da",
  },
  {
    name: "Liên hệ",
    href: "/lien_he",
  },
];

export const heroData = {
  title: `Chuẩn Đoán Tình Trạng Da`,
  title2: `Chỉ Trong 7s`,
  subtitle:
    "Ứng dụng phân tích chuẩn đoán da tích hợp trí tuệ thông minh nhân tạo AI chỉ trong 3 bước thưc hiên đã nhận ngay kết quả.",
  btnText: "Trải Nghiệm Ngay",
  image: HeroImage,
  image2: QRImage,
};

export const infoData = {
  title: `Chuẩn Đoán Tình Trạng Da`,
  title2: `Chỉ Trong 7s`,
  subtitle:
    "Ứng dụng phân tích chuẩn đoán da tích hợp trí tuệ thông minh nhân tạo AI chỉ trong 3 bước thưc hiên đã nhận ngay kết quả.",
  btnText: "Trải Nghiệm Ngay",
  image: InforImage,
  image2: QRImage,
};

export const statisticalData = [
  {
    title: "2000",
    subtitle: "Số người dùng trải nghiệm",
    image: user,
  },
  {
    title: "500",
    subtitle: "Bác sĩ cho lời khuyên về da",
    image: bacsi,
  },
  {
    title: "2000",
    subtitle: "Nghiên cứu và Ứng dụng",
    image: light,
  },
  {
    title: "45000000",
    subtitle: "Hình ảnh được xử lý chuẩn đoán phân tích",
    image: image,
  },
  {
    title: "20",
    subtitle: "Sản phẩm cấp bằng sáng chế",
    image: product,
  },
];

export const contentInfoData = [
  {
    image: Model1,
    title: "Da Mụn",
  },
  {
    image: Model2,
    title: "Da Khô",
  },
  {
    image: Model3,
    title: "Da Dầu",
  },
];

export const contentNewsData = [
  {
    image: News1,
    tag: "#Mụn #Da",
    title: "Tác dụng phụ của retinol: Lời khuyên hiểu quả cho chăm sóc da",
    content:
      "Bài viết Retinol cho da nhạy cảm sẽ giúp bạn hiểu rõ hơn về retinol, cách sử dụng và lợi ích của retinol cho da nhạy cảm.",
    date: "23/02/2024",
    customerName: "Diễm Nguyễn",
    avatar: "https://via.placeholder.com/150",
  },
  {
    image: News2,
    tag: "#Mụn #Da",
    title: "Chăm sóc da nhạy cảm hiệu quả với retinol: hướng dẫn đầy đủ",
    content:
      "Bài viết Retinol cho da nhạy cảm sẽ giúp bạn hiểu rõ hơn về retinol, cách sử dụng và lợi ích của retinol cho da nhạy cảm.",
    date: "23/02/2024",
    customerName: "Diễm Nguyễn",
    avatar: "https://via.placeholder.com/150",
  },
  {
    image: News3,
    tag: "#Mụn #Da",
    title: "Retinol cho nếp nhăn: cách sử dụng và lợi ích da",
    content:
      "Bài viết Retinol cho da nhạy cảm sẽ giúp bạn hiểu rõ hơn về retinol, cách sử dụng và lợi ích của retinol cho da nhạy cảm.",
    date: "23/02/2024",
    customerName: "Diễm Nguyễn",
    avatar: "https://via.placeholder.com/150",
  },
];

export const productInfoData = [
  {
    image: Product1,
    title: "Mặt Nạ Kem CKD Retinol Collagen Tiểu Phân Tử 50g",
  },
  {
    image: Product2,
    title: "Mặt Nạ Kem CKD Retinol Collagen Tiểu Phân Tử 50g",
  },
  {
    image: Product3,
    title: "Mặt Nạ Kem CKD Retinol Collagen Tiểu Phân Tử 50g",
  },
  {
    image: Product4,
    title: "Mặt Nạ Kem CKD Retinol Collagen Tiểu Phân Tử 50g",
  },
];

export const ruleData = [
  {
    image: Rule1,
    title: "Đảm Bảo",
  },
  {
    image: Rule2,
    title: "Bảo Mật Thông Tin",
  },
  {
    image: Rule3,
    title: "Công Nghệ Mới Nhất",
  },
  {
    image: Rule4,
    title: "Trải Nghiệm",
  },
];
export const ruleDataUser = [
  {
    image: Rule1,
    title: "100% người dùng đã đồng ý",
  },
  {
    image: Rule2,
    title: "Giải pháp thiết yếu",
  },
  {
    image: Rule3,
    title: "Công nghệ AI",
  },
  {
    image: Rule4,
    title: "Trải Nghiệm",
  },
  {
    image: Rule1,
    title: "Chứng nhận viện nghiên cứu",
  },
];

export const KeywordData = [
  {
    title: "Lorem Ipsum",
  },
  {
    title: "Serum",
  },
  {
    title: "Collagen",
  },
  {
    title: "Lorem Ipsum",
  },
  {
    title: "Ipsum",
  },
  {
    title: "Lorem",
  },
];

export const aboutData = {
  image: AboutImg,
  title: "Find Out A Little More About Us",
  subtitle:
    "We are a company dedicated to the distribution of products by delivery to your home or to the place where you are, with the best quality of delivery.",
};

export const InforBanner2 = {
  image: InforBannerImg2,
  title1: "Câu chuyện",
  title2: "Duis autem vel eum iriure dolor in ",
  title3: "hendrerit",
  subtitle:
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};
export const InforBanner3 = {
  image1: InforBannerImg3,
  title11: "Tầm nhìn sứ mệnh",
  title21: "Lorem ipsum dolor ",
  title31: "sit amet",
  title41: "consectetur adipiscing elit",
  subtitle1:
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};

export const InforBanner = {
  image: InforBannerImg,
  title1: "Hơn",
  title2: "65 Triệu",
  title3: "hình ảnh dữ liệu từ GOOGLE và dữ liệu thu thập từ data thực tế",

  subtitle:
    "Dữ liệu về tình trạng làn da, 288 triệu hình ảnh khác nhau về sức khỏe làn da, do người dùng cung cấp và nguồn từ google. hơn 10 tỷ mỗi năm",
};

export const CommitBanner2 = {
  image: CommitBannerImg,
  title1: "Câu chuyện",
  title2: "Duis autem vel eum iriure dolor in ",
  title3: "hendrerit",
  subtitle:
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};
export const featuresData = {
  title: "Some Services We Offer",
  subtitle:
    "With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app now!",
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: "Payment Done",
      description: "Pay with a Visa or PayPal card and without much ado",
      linkText: "Learn more",
      delay: "400",
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: "Find Your Product",
      description: "We offer sale of products through the Internet..",
      linkText: "Learn more",
      delay: "700",
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: "Print Out",
      description:
        "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
      linkText: "Learn more",
      delay: "1000",
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: "Product Received",
      description: "In our app you can see the delay time of your order...",
      linkText: "Learn more",
      delay: "1300",
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: "Serena",
    web: "rena.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "300",
  },
  {
    image: Avatar2Img,
    name: "Natalia",
    web: "nataliya.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "600",
  },
  {
    image: Avatar3Img,
    name: "Vebin",
    web: "vebin.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "900",
  },
];


export const reviewData = [
  {
    image: Model4,
    title: "Collagen Hàn Quốc có tốt không? ",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "20/10/2021",
    avatar: "https://via.placeholder.com/150",
    customerName: "Diễm Nguyễn",
  },
  {
    image: Model5,
    title: "Collagen Hàn Quốc có tốt không? ",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "20/10/2021",
    avatar: "https://via.placeholder.com/150",
    customerName: "Diễm Nguyễn",
  },
  {
    image: Model6,
    title: "Collagen Hàn Quốc có tốt không? ",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "20/10/2021",
    avatar: "https://via.placeholder.com/150",
    customerName: "Diễm Nguyễn",
  },
  {
    image: Model4,
    title: "Collagen Hàn Quốc có tốt không? ",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "20/10/2021",
    avatar: "https://via.placeholder.com/150",
    customerName: "Diễm Nguyễn",
  },
  {
    image: Model4,
    title: "Collagen Hàn Quốc có tốt không? ",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "20/10/2021",
    avatar: "https://via.placeholder.com/150",
    customerName: "Diễm Nguyễn",
  },
  {
    image: Model5,
    title: "Collagen Hàn Quốc có tốt không? ",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "20/10/2021",
    avatar: "https://via.placeholder.com/150",
    customerName: "Diễm Nguyễn",
  },
  {
    image: Model6,
    title: "Collagen Hàn Quốc có tốt không? ",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "20/10/2021",
    avatar: "https://via.placeholder.com/150",
    customerName: "Diễm Nguyễn",
  },
  {
    image: Model4,
    title: "Collagen Hàn Quốc có tốt không? ",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "20/10/2021",
    avatar: "https://via.placeholder.com/150",
    customerName: "Diễm Nguyễn",
  },
];

export const ctaData = {
  title: "Contact Us From Here",
  subtitle: "Get limited 1 week free try our features!",
  btnText1: "Learn more",
  btnText2: "Request Demo",
};

export const NewsTwoData = [
  {
    tag: "#Lorem Ipsum",
    image: Model4,
    title: "Collagen Hàn Quốc có tốt không? ",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "20/10/2021",
    avatar: "https://via.placeholder.com/150",
    customerName: "Diễm Nguyễn",
  },
  {
    tag: "#Lorem Ipsum",
    image: Model5,
    title: "Collagen Hàn Quốc có tốt không? ",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "20/10/2021",
    avatar: "https://via.placeholder.com/150",
    customerName: "Diễm Nguyễn",
  },
  {
    tag: "#Lorem Ipsum",
    image: Model6,
    title: "Collagen Hàn Quốc có tốt không? ",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "20/10/2021",
    avatar: "https://via.placeholder.com/150",
    customerName: "Diễm Nguyễn",
  },
];

export const footerData = {
  logo: LogoV2,
  address: "Name Company",
  email: "info@producttexas.project",
  phone: "1-232-7788 (Main)",
  content:
    "Đưa ra các giải pháp và nghiên cứu cho khách hàng, Giúp khách hàng tối ưu hóa chi phí và tăng cường hiệu quả công việc.",
  list1: [
    {
      name: "Giới thiệu",
      href: "#",
    },
    {
      name: "Review",
      href: "#",
    },
  ],
  list2: [
    {
      name: "Câu hỏi thường gặp",
      href: "#",
    },
    {
      name: "Hướng dẫn sự dụng",
      href: "#",
    },
  ],
  list3: [
    {
      name: "Chính sách bảo mật",
      href: "#",
    },
    {
      name: "Điều khoản sử dụng",
      href: "#",
    },
    {
      name: "Liên hệ",
      href: "#",
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: "#",
    },
    {
      icon: <FaInstagram />,
      href: "#",
    },
    {
      icon: <FaGithub />,
      href: "#",
    },
  ],
};

export const copyrightData = {
  text: '© Product Texas, 2022. All rights reserved. Company Registration Number: 09833888.',
  icon: <BsChatDotsFill />,
};
