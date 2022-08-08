import { ActionIcon, Group, Table, Text, Tooltip } from "@mantine/core";
import { IconStepInto, IconStepOut } from "@tabler/icons";
import { useTranslation } from "next-i18next";

interface Asset {
  id: number;
  symbol: string;
  name: string;
  flag: string;
  disabled: boolean;
}

export interface Props {
  assets: Asset[];
}

export function List({ assets }: Props) {
  const { t } = useTranslation("xcm");

  const rows = assets.map((asset) => (
    <tr key={asset.name}>
      <td>{asset.id}</td>
      <td>{asset.name}</td>
      <td>{asset.symbol}</td>
      <td>
        <Group>
          <Tooltip label={t("deposit")}>
            <ActionIcon disabled={asset.disabled}>
              <IconStepInto />
            </ActionIcon>
          </Tooltip>
          <Tooltip label={t("withdraw")}>
            <ActionIcon disabled={asset.disabled}>
              <IconStepOut />
            </ActionIcon>
          </Tooltip>
        </Group>
      </td>
    </tr>
  ));

  return (
    <Table highlightOnHover verticalSpacing="lg">
      <thead>
        <tr>
          <th>
            <Text>{t("assetId")}</Text>
          </th>
          <th>
            <Text>{t("assetName")}</Text>
          </th>
          <th>
            <Text>{t("symbol")}</Text>
          </th>
          <th>
            <Text>{t("actions")}</Text>
          </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
