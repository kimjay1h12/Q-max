import Image from "next/image";
import styles from "./page.module.css";
import MainLayout from "@/layouts.js/MainLayout";
import { Typography } from "@mui/material";
import Dashboard from "@/components/home/Dashboard";

export default function Home() {
  return <Dashboard />;
}
