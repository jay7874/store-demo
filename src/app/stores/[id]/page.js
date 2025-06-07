"use client";
import { useParams } from "next/navigation";
import StoreDetail from "@/components/StoreDetail";

export default function StorePage() {
  const { id } = useParams();

  const storeData = [
    {
      id: id,
      name: "Takeume Main Store",
      location: "Minimalized Station / Often",
      videoInfo: "https://www.youtube.com/watch?v=6YsQB-YIhoM",
      watchOn: "Think",
      relatedStores: [
        {
          name: "Kushikatsu Bar Umeda Stand",
          location: "Umeda Neon Yokocho",
        },
      ],
    },
  ];

  return <StoreDetail stores={storeData} />;
}
