"use client";
import React from "react";
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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getCaptcha } from "@/services/apis/common.service";

const formSchema = z.object({
  date: z.string(),
  name: z.string().min(1, { message: "Tên là bắt buộc" }),
  cccd: z
    .string()
    .min(1, { message: "CCCD là bắt buộc" })
    .regex(/^\d{12}$/, { message: "CCCD không hợp lệ" }),
  address: z.string().min(1, { message: "Địa chỉ là bắt buộc" }),
  location: z.string().min(1, { message: "Huyện / Thị xã là bắt buộc" }),
  phoneNum: z
    .string()
    .min(1, { message: "Số điện thoại là bắt buộc" })
    .regex(/^(03|05|07|08|09)\d{8}$/, {
      message: "Số điện thoại không hợp lệ",
    }),
  email: z
    .string()
    .min(1, { message: "Email là bắt buộc" })
    .email({ message: "Email không hợp lệ" }),
  service: z.string().min(1, { message: "Dịch vụ là bắt buộc" }),
  note: z.string(),
  captchaText: z.string().min(1, { message: "Mã captca là bắt buộc" }),
});

const ServiceForm = ({ services, units }: { services: any; units: any }) => {
  const date = new Date();
  const { data, mutate } = getCaptcha();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      date: `${String(date.getDate()).padStart(2, "0")}/${String(
        date.getMonth() + 1
      ).padStart(2, "0")}/${date.getFullYear()}`,
      name: "",
      cccd: "",
      address: "",
      location: "",
      phoneNum: "",
      email: "",
      service: "",
      note: "",
      captchaText: "",
    },
  });
  const onSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="grid grid-cols-12 items-center gap-5">
              <FormLabel className="text-nowrap col-span-12 md:col-span-2 text-left md:text-right">
                Ngày đăng ký
              </FormLabel>
              <FormControl className="col-span-12 md:col-span-10">
                <Input readOnly {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="grid grid-cols-12 items-center gap-5">
              <FormLabel className="text-nowrap col-span-12 md:col-span-2 text-left md:text-right">
                Họ tên thuê bao <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl className="col-span-12 md:col-span-10">
                <Input placeholder="Nguyễn Văn A" {...field} />
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
          name="cccd"
          render={({ field }) => (
            <FormItem className="grid grid-cols-12 items-center gap-5">
              <FormLabel className="text-nowrap col-span-12 md:col-span-2 text-left md:text-right">
                CCCD <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl className="col-span-12 md:col-span-10">
                <Input placeholder="CCCD" {...field} />
              </FormControl>
              {form.formState.errors.cccd && (
                <p className="text-red-500 col-start-1 md:col-start-3 text-nowrap text-sm">
                  {form.formState.errors.cccd.message}
                </p>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="grid grid-cols-12 items-center gap-5">
              <FormLabel className="text-nowrap col-span-12 md:col-span-2 text-left md:text-right">
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
            <FormItem className="grid grid-cols-12 items-center gap-5">
              <FormLabel className="text-nowrap col-span-12 md:col-span-2 text-left md:text-right">
                Huyện / Thị xã <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl className="col-span-12 md:col-span-10">
                <div className="w-full">
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="">
                      <SelectValue placeholder="--chọn quận, huyện--" />
                    </SelectTrigger>
                    <SelectContent className="">
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
            <FormItem className="grid grid-cols-12 items-center gap-5">
              <FormLabel className="text-nowrap col-span-12 md:col-span-2 text-left md:text-right">
                SĐT <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl className="col-span-12 md:col-span-10">
                <Input placeholder="Số điện thoại liên hệ" {...field} />
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
          name="email"
          render={({ field }) => (
            <FormItem className="grid grid-cols-12 items-center gap-5">
              <FormLabel className="text-nowrap col-span-12 md:col-span-2 text-left md:text-right">
                Email <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl className="col-span-12 md:col-span-10">
                <Input placeholder="Email liên hệ" {...field} />
              </FormControl>
              {form.formState.errors.email && (
                <p className="text-red-500 col-start-1 md:col-start-3 text-nowrap text-sm">
                  {form.formState.errors.email.message}
                </p>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem className="grid grid-cols-12 items-center gap-5">
              <FormLabel className="text-nowrap col-span-12 md:col-span-2 text-left md:text-right">
                Chọn dịch vụ <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl className="col-span-12 md:col-span-10">
                <div className="w-full">
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="--chọn dịch vụ--" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {services?.map((service: any) => (
                          <SelectItem key={service.s_id} value={service.s_name}>
                            {service.s_name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </FormControl>
              {form.formState.errors.service && (
                <p className="text-red-500 col-start-1 md:col-start-3 text-nowrap text-sm">
                  {form.formState.errors.service.message}
                </p>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem className="grid grid-cols-12 items-center gap-5">
              <FormLabel className="text-nowrap col-span-12 md:col-span-2 text-left md:text-right">
                Ghi chú thêm
              </FormLabel>
              <FormControl className="col-span-12 md:col-span-10">
                <Textarea placeholder="Ghi chú" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="captchaText"
          render={({ field }) => (
            <FormItem className="grid grid-cols-12 items-center gap-5">
              <FormLabel className="text-nowrap col-span-12 md:col-span-2 text-left md:text-right">
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
            Đăng ký
          </button>
        </div>
      </form>
    </Form>
  );
};

export default ServiceForm;
