"use client";
import { useStore } from "@/zustand/store";
import { FileText } from "lucide-react";
import React from "react";

const FileDisplay = () => {
  const { isShowFile } = useStore();
  return (
    <div className="mt-5">
      {isShowFile && (
        <div className="flex items-center gap-4 border border-black p-4 rounded-md cursor-pointer">
          <div>
            <FileText size={36} />
          </div>
          <div>
            <p className="text-lg">Hardcode.pdf</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileDisplay;
