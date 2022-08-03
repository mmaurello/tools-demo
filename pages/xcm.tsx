import React from "react";
import { Profile } from "../components/Dashboard/Profile";
import { Shell } from "../components/Shell";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { List } from "../components/XCM/List";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["navbar", "xcm"])),
      // Will be passed to the page component as props
    },
  };
}

export default function XCM() {
  return (
    <Shell>
      <List />
    </Shell>
  );
}
