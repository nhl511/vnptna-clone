"use client";
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
import { useStore } from "@/zustand/store";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const LookUpForm = ({
  years,
  months,
  types,
  user,
}: {
  years: string[];
  months: monthType[];
  types: tableType[];
  user: any;
}) => {
  const { setIsShowFile } = useStore();
  const now = new Date();

  const currentYear = now.getFullYear();

  const currentMonth = now.getMonth();
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      customer_code: user?.data?.CUSTOMER_CODE,
      month: currentMonth.toString(),
      year: currentYear.toString(),
      type: "",
      partner_id: 66,
    },
  });

  const xemCuoc = () => {
    setIsShowFile(true);
  };
  const xemHoaDon = (values: any) => {
    router.push(
      `/invoices/${values.year}-${values.month}-${user?.data?.CUSTOMER_CODE}`
    );
  };

  const onSubmit = async (values: any, e?: any) => {
    const submitter = e.nativeEvent.submitter;

    if (submitter.name === "xem-cuoc") {
      xemCuoc();
    } else if (submitter.name === "xem-hoa-don") {
      xemHoaDon(values);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1">
            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem className="flex items-center flex flex-col items-start">
                  <FormLabel className="">Chọn năm</FormLabel>
                  <FormControl className="">
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="">
                        <SelectValue placeholder="--Chọn yêu cầu--" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {years?.map((year: string) => (
                            <SelectItem key={year} value={year}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex-1">
            <FormField
              control={form.control}
              name="month"
              render={({ field }) => (
                <FormItem className="flex items-center flex flex-col items-start">
                  <FormLabel className="">Chọn tháng</FormLabel>
                  <FormControl className="">
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="--Chọn yêu cầu--"
                          {...field}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {months?.map((month: monthType) => (
                            <SelectItem key={month.value} value={month.value}>
                              {month.title}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex-1">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="flex items-center flex flex-col items-start">
                  <FormLabel className="">Bảng kê</FormLabel>
                  <FormControl className="">
                    <Select>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="--Chọn yêu cầu--"
                          {...field}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {types?.map((type: tableType) => (
                            <SelectItem key={type.value} value={type.title}>
                              {type.title}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-5">
          <button
            name="xem-cuoc"
            className="bg-blue-600 text-white py-2 px-16 rounded-md text-sm"
          >
            Xem cước
          </button>
          <button
            name="xem-hoa-don"
            className="bg-blue-600 text-white py-2 px-16 rounded-md text-sm"
          >
            Xem hoá đơn
          </button>
        </div>
      </form>
    </Form>
  );
};

export default LookUpForm;
