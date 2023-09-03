import Image from "next/image";

export type Character = {
  id: number;
  name: string;
  kana: string;
  birthday: string;
  position: string;
  comment: string;
  age: number;
  height: number;
  weight: number;
};

type Props = { data: Character };
export default function Character({ data }: Props) {
  return (
    <div className="w-1/6 min-w-fit flex flex-col items-center gap-2">
      <Image
        src={`/image/${String(data.id).padStart(4, "0")}.jpg`}
        width={150}
        height={150}
        alt={`${data.name}の画像`}
        className="border-2 border-black rounded-full"
      ></Image>
      <div className="flex flex-col items-center w-56">
        <span className="text-xs">{data.kana}</span>
        <span className="text-lg font-bold leading-4">{data.name}</span>
        <div className="flex gap-1 my-1">
          <Tag title="肩書" text={data.position} />
          <Tag title="誕生日" text={data.birthday} />
        </div>
        <span className="text-sm break-all">{data.comment}</span>
      </div>
    </div>
  );
}

function Tag({ title, text }: { title: string; text: string }) {
  return (
    <div className="text-xs border border-black flex">
      <div className="text-white bg-black px-1 py-0.5">{title}</div>
      <div className="px-1 py-0.5">{text}</div>
    </div>
  );
}
