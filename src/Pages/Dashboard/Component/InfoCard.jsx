import React from "react";
import { CustomCard } from "../../../Chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

export default function InfoCard({ imgUrl, name, text, inverted }) {
  return (
    <CustomCard
      bgColor={inverted ? "#5F00D9" : "#FFF"}
      bgImage={imgUrl}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Tag
        bg={inverted ? "#FFF" : "#5F00D9"}
        color={inverted ? "#5F00D9" : "#FFF"}
      >
        {name}
      </Tag>
      <Text
        color={inverted ? "#FFF" : "#000"}
        fontSize="18px"
        fontStyle="normal"
        my="16px"
      >
        {text}
      </Text>
    </CustomCard>
  );
}
