"use client";
import { useParams } from "next/navigation";
import StoreDetail from "@/components/StoreDetail";
import { storeData } from '../../data';

export default function StorePage() {
  const { id } = useParams();

  return <StoreDetail stores={storeData} />;
}