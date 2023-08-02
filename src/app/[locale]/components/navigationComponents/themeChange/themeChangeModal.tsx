import { themeValues } from "@/types/themeValues";
import { useRouter } from "next/navigation";

export default function ThemeChangeModal({ list, currentTheme, setTheme }: { list: themeValues[], currentTheme: themeValues, setTheme: (theme: themeValues) => void }) {
  const router = useRouter();
  console.log(list);
  return (
    <div className="absolute top-6 left-0 bg-blue-300">
      {
        list.map((theme: themeValues) => {
          if (theme === currentTheme) return;
          return (
            <button key={theme} onClick={() => { setTheme(theme); router.refresh(); }}>{theme}</button>
          )
        })
      }
    </div>
  )
}
