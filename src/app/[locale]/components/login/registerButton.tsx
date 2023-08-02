import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function RegisterButton() {
  const t = useTranslations("Navigation");
  return (
  <Link href="/register">{t("Register")}</Link>
  )
}
