import { RecoilDemo } from "../components/RecoilDemo";
import { Shell } from "../components/Shell";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["navbar"])),
      // Will be passed to the page component as props
    },
  };
}
export default function Staking() {
  return (
    <Shell>
      <RecoilDemo />
    </Shell>
  );
}
