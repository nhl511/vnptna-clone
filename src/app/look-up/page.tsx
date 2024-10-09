"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";

const LookUpPage = () => {
  const form = useForm();
  const onSubmit = () => {};
  return (
    <div>
      <h3 className="text-orange-600 font-bold">TÌM THEO MÃ TRA CỨU</h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center gap-3"
        >
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem className="flex items-center">
                <FormLabel className="w-[200px]">Nhập mã tra cứu</FormLabel>
                <FormControl className="">
                  <Input className="w-[200px]" placeholder="Mã tra cứu" />
                </FormControl>
              </FormItem>
            )}
          />
          <Button>Tìm kiếm</Button>
        </form>
      </Form>
    </div>
  );
};

export default LookUpPage;
