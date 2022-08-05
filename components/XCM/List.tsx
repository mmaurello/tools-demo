import { ActionIcon, Group, Table, Text, Tooltip } from "@mantine/core";
import { IconStepInto, IconStepOut } from "@tabler/icons";
import { useTranslation } from "next-i18next";
import { useFlags, useFlagsmith } from "flagsmith/react";

const assets = [
  { id: 6, symbol: "KMA", name: "Calamari", flag: "kma_disabled" },
  { id: 7, symbol: "ASTR", name: "Astar", flag: "astr_disabled" },
  { id: 39, symbol: "LIT", name: "Litentry", flag: "lit_disabled" },
  { id: 56, symbol: "KINT", name: "interBTC", flag: "kint_disabled" },
  { id: 58, symbol: "BSX", name: "Basilisk", flag: "bsx_disabled" },
];

export const List = () => {
  const { t } = useTranslation("xcm");
  const flags = useFlags(assets.map((asset) => asset.flag));

  const rows = assets.map((asset) => {
    const disabled = flags[asset.flag].enabled;
    return (
      <tr key={asset.name}>
        <td>{asset.id}</td>
        <td>{asset.name}</td>
        <td>{asset.symbol}</td>
        <td>
          <Group>
            <Tooltip label={t("deposit")}>
              <ActionIcon disabled={disabled}>
                <IconStepInto />
              </ActionIcon>
            </Tooltip>
            <Tooltip label={t("withdraw")}>
              <ActionIcon disabled={disabled}>
                <IconStepOut />
              </ActionIcon>
            </Tooltip>
          </Group>
        </td>
      </tr>
    );
  });

  return (
    <Table highlightOnHover verticalSpacing="lg">
      <thead>
        <tr>
          <th>{t("assetID")}</th>
          <th>{t("assetName")}</th>
          <th>{t("symbol")}</th>
          <th>{t("actions")}</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};
