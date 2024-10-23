import { useRef } from "react";
import Card from "./Card";
export default function Foreground() {

  let ref = useRef(null);
  let data = [
    {
      disc: "Embrace discomfort, for it's in the challenges that growth and transformation truly begin. ",
      mb: ".4mb",
      close: true,
      tag: {
        tagName: "Download!",
        tagColor: "green",
        isOpen: true,
      },
    },
    {
      disc: "Let go of what no longer serves you, and make space for new possibilities to flourish.",
      mb: ".7mb",
      close: false,
      tag: {
        tagName: "Done",
        tagColor: "blue",
        isOpen: false,
      },
    },
    {
      disc: "Invest in yourself daily, as small, consistent actions lead to profound, lasting change over time.",
      mb: ".9mb",
      close: true,
      tag: {
        tagName: "Download!",
        tagColor: "green",
        isOpen: true,
      },
    },
  ];

  return (
    <div ref={ref} className="fixed flex gap-5 p-[15px] top-0 left-0 w-full h-full z-[3]">
      {data.map((item, indx) => (
        <Card data={item} refer />
      ))}
    </div>
  );
}
