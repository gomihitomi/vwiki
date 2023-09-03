"use client";

import { useState } from "react";
import Character from "./character";
import data from "./data.json";

const SORT = [
  { key: "id-desc", value: "IDの昇順" },
  { key: "id-ask", value: "IDの降順" },
  { key: "age-ask", value: "年齢の昇順" },
  { key: "age-desc", value: "年齢の降順" },
  { key: "height-ask", value: "身長の昇順" },
  { key: "height-desc", value: "身長の降順" },
  { key: "weight-ask", value: "体重の昇順" },
  { key: "weight-desc", value: "体重の降順" },
] as const;

export default function Home() {
  const [sort, setSort] = useState<string>(SORT[0].key);

  const sortedList = data.characters.sort((a: any, b: any) => {
    const [key, order] = sort.split("-");
    if (order === "ask") {
      return a[key] > b[key] ? -1 : 1;
    }
    return a[key] < b[key] ? -1 : 1;
  });

  return (
    <main className="pb-8">
      <div className="bg-black p-2 mb-8 sticky top-0">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          {SORT.map((v) => (
            <option key={v.key} value={v.key}>
              {v.value}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {sortedList.map((v) => (
          <Character data={v} key={v.id} />
        ))}
      </div>
    </main>
  );
}
