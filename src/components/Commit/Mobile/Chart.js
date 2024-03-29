import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const data = [
  { name: "Tháng 1", users: 400 },
  { name: "Tháng 2", users: 300 },
  { name: "Tháng 3", users: 200 },
  { name: "Tháng 4", users: 278 },
  { name: "Tháng 5", users: 189 },
  { name: "Tháng 6", users: 239 },
  { name: "Tháng 7", users: 349 },
  { name: "Tháng 8", users: 200 },
  { name: "Tháng 9", users: 278 },
  { name: "Tháng 10", users: 189 },
  { name: "Tháng 11", users: 239 },
  { name: "Tháng 12", users: 600 },
];
const ChartMB = () => {
  return (
    <section className=" justify-center items-center container mx-auto">
      <div className=" bg-gray-100 p-3 border-2 border-gray-200 rounded-lg justify-center items-center">
        <LineChart
          width={340}
          height={300}
          data={data}
          margin={{
            top: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#f39e14"
            activeDot={{ r: 8 }}
          />
        </LineChart>
        <p>Biểu đồ thể hiện số người tham gia theo từng tháng trong năm</p>
      </div>
      <div className="flex flex-col space-y-4 pl-4">
        <div className="flex flex-col space-y-2">
          <div className="text-2xl text-orange-500 font-bold">Mục tiêu</div>
          <div className="flex space-x-2 ">
            <img
              className="w-10 h-10 object-cover rounded-full"
              src="https://via.placeholder.com/300"
              alt="mục tiêu"
            />
            <div className="text-black">
              <p>Tăng số lượng người dùng tham gia sử dụng sản phẩm</p>
            </div>
            <p>Đạt 1000 người dùng</p>
          </div>
          <div className="flex space-x-2 ">
            <img
              className="w-10 h-10 object-cover rounded-full"
              src="https://via.placeholder.com/300"
              alt="mục tiêu"
            />
            <div className="text-black">
              <p>Tăng số lượng người dùng tham gia sử dụng sản phẩm</p>
            </div>
            <p>Đạt 1000 người dùng</p>
          </div>

          <div className="flex space-x-2 ">
            <img
              className="w-10 h-10 object-cover rounded-full"
              src="https://via.placeholder.com/300"
              alt="mục tiêu"
            />
            <div className="text-black">
              <p>Tăng số lượng người dùng tham gia sử dụng sản phẩm</p>
            </div>
            <p>Đạt 1000 người dùng</p>
          </div>
          <div className="flex space-x-2 ">
            <img
              className="w-10 h-10 object-cover rounded-full"
              src="https://via.placeholder.com/300"
              alt="mục tiêu"
            />
            <div className="text-black">
              <p>Tăng số lượng người dùng tham gia sử dụng sản phẩm</p>
            </div>
            <p>Đạt 1000 người dùng</p>
          </div>
          <div className="flex space-x-2 ">
            <img
              className="w-10 h-10 object-cover rounded-full"
              src="https://via.placeholder.com/300"
              alt="mục tiêu"
            />
            <div className="text-black">
              <p>Tăng số lượng người dùng tham gia sử dụng sản phẩm</p>
            </div>
            <p>Đạt 1000 người dùng</p>
          </div>
          <div className="flex space-x-2 ">
            <img
              className="w-10 h-10 object-cover rounded-full"
              src="https://via.placeholder.com/300"
              alt="mục tiêu"
            />
            <div className="text-black">
              <p>Tăng số lượng người dùng tham gia sử dụng sản phẩm</p>
            </div>
            <p>Đạt 1000 người dùng</p>
          </div>
          <div className="flex space-x-2 ">
            <img
              className="w-10 h-10 object-cover rounded-full"
              src="https://via.placeholder.com/300"
              alt="mục tiêu"
            />
            <div className="text-black">
              <p>Tăng số lượng người dùng tham gia sử dụng sản phẩm</p>
            </div>
            <p>Đạt 1000 người dùng</p>
          </div>
          <div className="flex space-x-2 ">
            <img
              className="w-10 h-10 object-cover rounded-full"
              src="https://via.placeholder.com/300"
              alt="mục tiêu"
            />
            <div className="text-black">
              <p>Tăng số lượng người dùng tham gia sử dụng sản phẩm</p>
            </div>
            <p>Đạt 1000 người dùng</p>
          </div>
          <div className="flex space-x-2 ">
            <img
              className="w-10 h-10 object-cover rounded-full"
              src="https://via.placeholder.com/300"
              alt="mục tiêu"
            />
            <div className="text-black">
              <p>Tăng số lượng người dùng tham gia sử dụng sản phẩm</p>
            </div>
            <p>Đạt 1000 người dùng</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartMB;
