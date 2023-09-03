"use client";

import { useMemo, useState } from "react";
import Character from "./character";
import data from "./data.json";

const Order = {
  ASC: "asc",
  DESC: "desc",
};
type Order = (typeof Order)[keyof typeof Order];

const SORT = [
  { key: "id", order: Order.DESC, value: "登録が古い順" },
  { key: "id", order: Order.ASC, value: "登録が新しい順" },
  { key: "age", order: Order.DESC, value: "年齢が老けてる順" },
  { key: "age", order: Order.ASC, value: "年齢が若い順" },
  { key: "height", order: Order.DESC, value: "身長が高い順" },
  { key: "height", order: Order.ASC, value: "身長が低い順" },
  { key: "weight", order: Order.DESC, value: "体重が重い順" },
  { key: "weight", order: Order.ASC, value: "体重が軽い順" },
] as const;

export default function Home() {
  const [sort, setSort] = useState<string>(SORT[0].value);

  const SortedCharacters = useMemo(() => {
    const sortedList = data.characters.sort((a: any, b: any) => {
      const findSort = SORT.find((v) => v.value === sort) ?? SORT[0];
      if (findSort.order === Order.ASC) {
        return a[findSort.key] > b[findSort.key] ? -1 : 1;
      }
      return a[findSort.key] < b[findSort.key] ? -1 : 1;
    });

    return sortedList.map((v) => <Character data={v} key={v.id} />);
  }, [sort]);

  return (
    <main className="pb-8">
      <div className="bg-black p-2 mb-8 sticky top-0 flex justify-between">
        <h1 className="text-white text-lg font-bold">
          バーチャルインターネットラクガキマンwiki
        </h1>
        <select
          className="px-1 py-0.5"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          {SORT.map((v, i) => (
            <option key={i} value={v.value}>
              {v.value}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {SortedCharacters}
      </div>
    </main>
  );
}
