import { cn } from "@/lib/utils"

interface Content {
  name: string
  id: number
  number: number
}
interface Data {
  data: Content[]
}
export function Cubicle({ data }: Data) {
  const dummyCubicle = [
    { id: 2, occupied: true },
    { id: 3, occupied: true },
    { id: 4, occupied: true },
  ]
  return (
    <div className="flex max-w-[100vw] flex-col items-start gap-2 ">
      <div className="grid w-full grid-cols-1 gap-8  md:grid-cols-2 lg:grid-cols-4">
        <div
          className={cn(
            "flex h-72 items-center justify-center rounded-xl border text-card-foreground shadow",
            data[0].number === 4 ? "bg-red-500" : "bg-green-500"
          )}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white font-bold dark:text-black">
            {1}
          </div>
        </div>

        {dummyCubicle.map((index, key) => {
          return (
            <div
              key={`${key}-cubicle`}
              className={cn(
                "flex h-72 items-center justify-center rounded-xl border text-card-foreground shadow",
                index.occupied ? "bg-red-500" : "bg-green-500"
              )}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white font-bold dark:text-black">
                {index.id}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
