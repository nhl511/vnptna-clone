"use client";
import React from "react";
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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getCaptcha } from "@/services/apis/common.service";

const formSchema = z.object({
  topic: z.string().min(1, { message: "Tiêu đề là bắt buộc" }),
  name: z.string().min(1, { message: "Tên là bắt buộc" }),
  address: z.string().min(1, { message: "Địa chỉ là bắt buộc" }),
  location: z.string().min(1, { message: "Quận / Huyện là bắt buộc" }),
  phoneNum: z
    .string()
    .min(1, { message: "Số điện thoại là bắt buộc" })
    .regex(/^(03|05|07|08|09)\d{8}$/, {
      message: "Số điện thoại không hợp lệ",
    }),
  fax: z.string(),
  email: z.string(),
  content: z.string().min(1, { message: "Nội dung là bắt buộc" }),
  captchaText: z.string().min(1, { message: "Mã captcha là bát buộc" }),
});

const FeedbackForm = ({ criteria, units }: { criteria: any; units: any }) => {
  const { data, mutate } = getCaptcha();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      topic: "",
      name: "",
      address: "",
      location: "",
      phoneNum: "",
      fax: "",
      email: "",
      content: "",
      captchaText: "",
    },
  });
  const onSubmit = () => {};
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem className="grid grid-cols-12 items-center">
              <FormLabel className="text-nowrap col-span-12 md:col-span-2">
                Góp ý về <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl className="col-span-12 md:col-span-10">
                <div className="w-full">
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="--Chọn yêu cầu--" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {criteria.map((item: any) => (
                          <SelectItem
                            key={item.criteria_id}
                            value={item.criteria_name}
                          >
                            {item.criteria_name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </FormControl>
              {form.formState.errors.topic && (
                <p className="text-red-500 col-start-1 md:col-start-3 text-nowrap text-sm">
                  {form.formState.errors.topic.message}
                </p>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="grid grid-cols-12 items-center">
              <FormLabel className="text-nowrap col-span-12 md:col-span-2">
                Tên người gửi <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl className="col-span-12 md:col-span-10">
                <Input placeholder="Tên người gửi" {...field} />
              </FormControl>
              {form.formState.errors.name && (
                <p className="text-red-500 col-start-1 md:col-start-3 text-nowrap text-sm">
                  {form.formState.errors.name.message}
                </p>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="grid grid-cols-12 items-center">
              <FormLabel className="text-nowrap col-span-12 md:col-span-2">
                Địa chỉ <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl className="col-span-12 md:col-span-10">
                <Input placeholder="Địa chỉ" {...field} />
              </FormControl>
              {form.formState.errors.address && (
                <p className="text-red-500 col-start-1 md:col-start-3 text-nowrap text-sm">
                  {form.formState.errors.address.message}
                </p>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem className="grid grid-cols-12">
              <FormLabel className="text-nowrap col-span-12 md:col-span-2"></FormLabel>
              <FormControl className="col-span-12 md:col-span-10">
                <div className="w-full">
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="--Chọn yêu cầu--" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {units?.map((unit: any) => (
                          <SelectItem key={unit.u_id} value={unit.u_name}>
                            {unit.u_name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </FormControl>
              {form.formState.errors.location && (
                <p className="text-red-500 col-start-1 md:col-start-3 text-nowrap text-sm">
                  {form.formState.errors.location.message}
                </p>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNum"
          render={({ field }) => (
            <FormItem className="grid grid-cols-12 items-center">
              <FormLabel className="text-nowrap col-span-12 md:col-span-2">
                Số điện thoại <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl className="col-span-12 md:col-span-10">
                <Input placeholder="Số điện thoại" {...field} />
              </FormControl>
              {form.formState.errors.phoneNum && (
                <p className="text-red-500 col-start-1 md:col-start-3 text-nowrap text-sm">
                  {form.formState.errors.phoneNum.message}
                </p>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fax"
          render={({ field }) => (
            <FormItem className="grid grid-cols-12 items-center">
              <FormLabel className="text-nowrap col-span-12 md:col-span-2">
                Fax
              </FormLabel>
              <FormControl className="col-span-12 md:col-span-10">
                <Input placeholder="Fax" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="grid grid-cols-12 items-center">
              <FormLabel className="text-nowrap col-span-12 md:col-span-2">
                Email
              </FormLabel>
              <FormControl className="col-span-12 md:col-span-10">
                <Input placeholder="Email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="grid grid-cols-12 items-center">
              <FormLabel className="text-nowrap col-span-12 md:col-span-2">
                Nội dung <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl className="col-span-12 md:col-span-10">
                <Textarea placeholder="Nội dung" {...field} />
              </FormControl>
              {form.formState.errors.content && (
                <p className="text-red-500 col-start-1 md:col-start-3 text-nowrap text-sm">
                  {form.formState.errors.content.message}
                </p>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="captchaText"
          render={({ field }) => (
            <FormItem className="grid grid-cols-12 items-center gap-5">
              <FormLabel className="text-nowrap col-span-12 md:col-span-2">
                Mã xác nhận <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl className="col-span-12 md:col-span-2">
                <Input placeholder="Mã kiểm tra" {...field} />
              </FormControl>
              <div
                className="col-span-12 md:col-span-2"
                dangerouslySetInnerHTML={{ __html: data?.svg }}
              />
              {form.formState.errors.captchaText && (
                <p className="text-red-500 col-start-1 md:col-start-3 text-nowrap text-sm">
                  {form.formState.errors.captchaText.message}
                </p>
              )}
            </FormItem>
          )}
        />
        <div className="flex justify-center md:justify-end mt-4">
          <button className="w-full md:w-[200px] py-2 bg-[var(--login-btn)] text-white font-bold rounded-md">
            Gửi góp ý
          </button>
        </div>
      </form>
    </Form>
  );
};

export default FeedbackForm;
