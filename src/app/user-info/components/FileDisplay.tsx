"use client";
import { useStore } from "@/zustand/store";
import { FileText } from "lucide-react";
import React from "react";

const FileDisplay = () => {
  const { isShowFile } = useStore();

  return (
    <div className="mt-5">
      {isShowFile && (
        <div className="flex items-center gap-4 border border-blue-700 p-4 rounded-md cursor-pointer">
          <div>
            <FileText strokeWidth={1} size={36} className="text-blue-700" />
          </div>
          <div>
            <p className="text-lg text-blue-700">Hardcode.pdf</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileDisplay;
