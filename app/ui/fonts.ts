import { Inter, Lusitana } from "next/font/google";

// { subsets: ['latin'] }: Chỉ tải subset "latin" để giảm kích thước file font.
export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});
