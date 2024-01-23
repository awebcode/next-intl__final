import LanguageChanger from "@/components/LangChanger";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

// import Link from "next-intl/navigation";
export default function Index() {
  const t = useTranslations("Index");
  return (
    <h1 className="text-5xl text-white my-52">
          {t("title")}
          <Link href="/about">About</Link>
          <LanguageChanger/>
    </h1>
  );
}
