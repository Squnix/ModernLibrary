import { useTranslations } from "next-intl";
import Link from "next/link";

type Props = {
  address: string;
  type: string;
};

export default function TranslatedLink({
  address,
  type,
}: Props): React.ReactElement {
  const t = useTranslations("Links");
  return <Link href={address}>{t(type)}</Link>;
}
