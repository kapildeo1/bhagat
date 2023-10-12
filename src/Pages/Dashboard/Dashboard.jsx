import React from "react";
import DashboardLayout from "../../Component/DashboardLayout/DashboardLayout";
import PortfolioSection from "./Component/PortfolioSection";
import PriceSection from "./Component/PriceSection";
import { Grid, GridItem } from "@chakra-ui/react";
import Transaction from "./Component/Transaction";
import InfoCard from "./Component/InfoCard";

export default function Dashboard() {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          xl: "repeat(2,1fr)",
          base: "repeat(1,1fr)",
        }}
        gridGap="24px"
      >
        <GridItem
          colSpan={{
            xl: "2",
            base: "1",
          }}
        >
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan="1">
          <PriceSection />
        </GridItem>
        <GridItem colSpan="1">
          <Transaction />
        </GridItem>
        <GridItem colSpan="1">
          <InfoCard
            inverted={false}
            name="Loans"
            imgUrl="/dot_bg.svg"
            text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
          />
        </GridItem>
        <GridItem colSpan="1">
          <InfoCard
            inverted={true}
            name="contact"
            imgUrl="/grid_bg.svg"
            text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
}
