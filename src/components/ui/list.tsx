import { cn } from "@/lib/utils"

interface ItemType {
  id: number;
  number: number;
}
interface ListProps {
  item: ItemType; // Replace ItemType with the actual type of item
  key: string;
  onClick: () => void; // Add this line
}
export function List({ item, onClick }: ListProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative flex grow cursor-pointer flex-row items-center rounded-[10px] border-[1px] border-gray-200 bg-slate-100 bg-clip-border dark:bg-white",
        item.number === 4 && "bg-red-200 dark:bg-red-200"
      )}
    >
      <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
        <div className="rounded-full bg-black p-3 text-white">{item.id}</div>
      </div>
      <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <p className="font-dm text-sm font-medium text-gray-600">Available cubicle</p>
        <h4 className="text-navy-700 text-xl font-bold dark:text-black">{item.number}</h4>
      </div>
    </div>
  );
}
