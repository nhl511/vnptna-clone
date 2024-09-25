"use client";
import React from "react";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { districts, services } from "@/data/data";

const ServicePage = () => {
  const form = useForm();
  const onSubmit = () => {};
  return (
    <div className="xl:container xl:mx-auto border border-gray-200 p-8 my-10">
      <Header title="Đăng ký dịch vụ" des="Phiếu đăng ký dịch vụ" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex items-center">
                <FormLabel className="w-[200px]">Ngày đăng ký</FormLabel>
                <FormControl className="">
                  <Input />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex items-center">
                <FormLabel className="w-[200px]">
                  Họ tên thuê bao <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl className="">
                  <Input placeholder="Họ tên thuê bao" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex items-center">
                <FormLabel className="w-[200px]">
                  CCCD <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl className="">
                  <Input placeholder="CCCD" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex items-center">
                <FormLabel className="w-[200px]">Địa chỉ</FormLabel>
                <FormControl className="">
                  <Input placeholder="Địa chỉ" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex items-center">
                <FormLabel className="w-[200px]">Huyện / Thị xã</FormLabel>
                <FormControl className="">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="--chọn quận, huyện--" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {districts.map((district: string) => (
                          <SelectItem key={district} value={district}>
                            {district}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex items-center">
                <FormLabel className="w-[200px]">
                  SĐT <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl className="">
                  <Input placeholder="SĐT" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex items-center">
                <FormLabel className="w-[200px]">
                  Email <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl className="">
                  <Input placeholder="Email" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex items-center">
                <FormLabel className="w-[200px]">
                  Chọn dịch vụ <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl className="">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="--chọn dịch vụ--" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {services.map((service: string) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex items-center">
                <FormLabel className="w-[200px]">
                  Ghi chú thêm <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl className="">
                  <Textarea placeholder="Ghi chú" />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex justify-end mt-4">
            <button className="py-2 px-4 bg-[var(--login-btn)] text-white font-bold rounded-md">
              Gửi góp ý
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ServicePage;
