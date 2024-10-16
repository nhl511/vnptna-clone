import IntroHeader from "@/components/IntroHeader";
import { getNewsByCateId } from "@/services/apis/menu.service";
import React from "react";

const SupportPage = async () => {
  const introHeader = await getNewsByCateId({ id: 2149, page: 1, num: 1 });
  return (
    <div className="xl:container mx-auto px-4 xl:px-0 pb-5">
      <IntroHeader introHeader={introHeader} />
    </div>
  );
};

export default SupportPage;
