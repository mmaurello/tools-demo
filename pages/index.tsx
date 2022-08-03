import React from "react";
import { Profile } from "../components/Dashboard/Profile";
import { Shell } from "../components/Shell";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "navbar"])),
      // Will be passed to the page component as props
    },
  };
}

export default function Demo() {
  return (
    <Shell>
      <Profile />
    </Shell>
  );
}
