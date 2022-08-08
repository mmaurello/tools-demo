import React from "react";
import { Shell } from "../components/Shell";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { List, Props as ListProps } from "../components/XCM/List";
import { featureFlag } from "../utils/featureFlag";

export async function getStaticProps({ locale }: { locale: string }) {
  // @TODO ideally this could be done in a state management library so we avoid passing
  // down props to the components
  const assets = [
    { id: 6, symbol: "KMA", name: "Calamari", flag: "disable_kma" },
    { id: 7, symbol: "ASTR", name: "Astar", flag: "disable_astr" },
    { id: 39, symbol: "LIT", name: "Litentry", flag: "disable_lit" },
    { id: 56, symbol: "KINT", name: "interBTC", flag: "disable_kint" },
    { id: 58, symbol: "BSX", name: "Basilisk", flag: "disable_bsx" },
  ];

  const hidratedAssets = await Promise.all(
    assets.map(async (asset) => {
      return {
        ...asset,
        disabled: await featureFlag(asset.flag),
      };
    })
  );

  return {
    props: {
      assets: hidratedAssets,
      ...(await serverSideTranslations(locale, ["navbar", "xcm"])),
      // Will be passed to the page component as props
    },
  };
}

export default function XCM({ assets }: ListProps) {
  return (
    <Shell>
      <List assets={assets} />
    </Shell>
  );
}
