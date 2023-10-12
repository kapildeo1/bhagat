import React from "react";
import DashboardLayout from "../../Component/DashboardLayout/DashboardLayout";
import { CustomCard } from "../../Chakra/CustomCard";
import SupportCard from "./SupportCard";

const Support = () => {
  return (
    <>
      <DashboardLayout title="Support">
        <SupportCard />
      </DashboardLayout>
    </>
  );
};

export default Support;
