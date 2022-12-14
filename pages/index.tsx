import React from "react";
import { Profile } from "../components/Dashboard/Profile";
import { Shell } from "../components/Shell";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Charts } from "../components/Dashboard/Charts";

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
      <>
        <Profile />
        <Charts />
      </>
    </Shell>
  );
}
