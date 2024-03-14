import { useState, useEffect } from "react";
import { IAvatarStore } from "../../../interface/Avatar";

export default function AvatarStore() {
  const [data, setData] = useState<IAvatarStore[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../../mocks/data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
}
