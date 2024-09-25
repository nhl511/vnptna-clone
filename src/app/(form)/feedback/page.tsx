"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { districts, topics } from "@/data/data";
import React from "react";
import { useForm } from "react-hook-form";
import Header from "../components/Header";

const FeedbackPage = () => {
  const form = useForm();
  const onSubmit = () => {};
  return (
    <div className="xl:container xl:mx-auto border border-gray-200 p-8 my-10">
      <Header title="Góp ý liên hệ" des="Phiếu góp ý - phản hồi" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex items-center">
                <FormLabel className="w-[200px]">
                  Góp ý về <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl className="">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="--Chọn yêu cầu--" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {topics.map((topic: string) => (
                          <SelectItem key={topic} value={topic}>
                            {topic}
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
                  Tên người gửi <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl className="">
                  <Input placeholder="Tên người gửi" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <>
                <FormItem className="flex items-center">
                  <FormLabel className="w-[200px]">
                    Địa chỉ <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl className="">
                    <Input placeholder="Địa chỉ" />
                  </FormControl>
                </FormItem>
                <FormItem className="flex items-center">
                  <FormLabel className="w-[200px]"></FormLabel>
                  <FormControl className="">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="--Chọn yêu cầu--" />
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
              </>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex items-center">
                <FormLabel className="w-[200px]">
                  Số điện thoại <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl className="">
                  <Input placeholder="Số điện thoại" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex items-center">
                <FormLabel className="w-[200px]">Fax</FormLabel>
                <FormControl className="">
                  <Input placeholder="Fax" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex items-center">
                <FormLabel className="w-[200px]">Email</FormLabel>
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
                  Nội dung <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl className="">
                  <Textarea placeholder="Nội dung" />
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

export default FeedbackPage;
