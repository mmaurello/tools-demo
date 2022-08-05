import { ActionIcon, Group, Table, Text, Tooltip } from "@mantine/core";
import { IconStepInto, IconStepOut } from "@tabler/icons";
import { useTranslation } from "next-i18next";

const assets = [
  { id: 6, symbol: "KMA", name: "Calamari" },
  { id: 7, symbol: "ASTR", name: "Astar" },
  { id: 39, symbol: "LIT", name: "Litentry" },
  { id: 56, symbol: "KINT", name: "interBTC" },
  { id: 58, symbol: "BSX", name: "Basilisk" },
];

export const List = () => {
  const { t } = useTranslation("xcm");

  const rows = assets.map((asset) => {
    return (
      <tr key={asset.name}>
        <td>{asset.id}</td>
        <td>{asset.name}</td>
        <td>{asset.symbol}</td>
        <td>
          <Group>
            <Tooltip label={t("deposit")}>
              <ActionIcon>
                <IconStepInto />
              </ActionIcon>
            </Tooltip>
            <Tooltip label={t("withdraw")}>
              <ActionIcon>
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
