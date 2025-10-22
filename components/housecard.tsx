import type { House } from "@/lib/house"

interface HouseCardProps {
  house: House
  reasoning?: string
}

export function HouseCard({ house, reasoning }: HouseCardProps) {

  const themes = {
    Gryffindor: { pri: "#DC2626", sec: "#FCD34D", glow: "rgba(220,38,38,0.4)" },
    Slytherin: { pri: "#10B981", sec: "#C0CCDA", glow: "rgba(16,185,129,0.3)" },
    Ravenclaw: { pri: "#2563EB", sec: "#BFDBFE", glow: "rgba(37,99,235,0.4)" },
    Hufflepuff: { pri: "#D97706", sec: "#FEF3C7", glow: "rgba(217,119,6,0.4)" },
  }
  const t = themes[house.name as keyof typeof themes] || themes.Gryffindor

  return (
    <div className="max-w-4xl mx-auto">
      <div
        className="relative rounded-xl border-2 p-6 md:p-10 transition-all hover:shadow-2xl"
        style={{ borderColor: t.pri, boxShadow: `0 0 40px ${t.glow}` }}
      >
        <div className="text-center mb-8">
          <div className="text-7xl mb-4 drop-shadow-lg">{house.emoji}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: t.pri }}>
            {house.name}
          </h1>
          <p className="text-lg italic opacity-90 mb-4" style={{ color: t.sec }}>
            "{house.motto}"
          </p>
          <p className="text-gray-200 max-w-2xl mx-auto">{house.description}</p>
        </div>

        {reasoning && (
          <div className="rounded-lg p-6 mb-8 border-2" style={{ borderColor: t.pri, backgroundColor: `${t.pri}15` }}>
            <h3 className="font-semibold mb-2 flex items-center gap-2" style={{ color: t.pri }}>
              ✨ Why {house.name}?
            </h3>
            <p className="text-gray-100">{reasoning}</p>
          </div>
        )}

        <div className="mb-8">
          <h3 className="text-xs uppercase tracking-wider mb-4 text-center opacity-70" style={{ color: t.pri }}>
            Traits
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {house.traits.map((trait) => (
              <span
                key={trait}
                className="px-4 py-1.5 rounded-full text-sm border-2 hover:scale-105 transition-transform"
                style={{ borderColor: t.pri, color: t.pri, backgroundColor: `${t.pri}10` }}
              >
                {trait}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8 p-6 rounded-lg" style={{ backgroundColor: `${t.pri}08` }}>
          {[
            ["Founder", house.founder],
            ["Animal", house.animal],
            ["Element", house.element],
            ["Ghost", house.ghost],
          ].map(([label, val]) => (
            <div key={label} className="flex gap-3">
              <span className="font-semibold" style={{ color: t.sec }}>
                {label}:
              </span>
              <span className="text-gray-200">{val}</span>
            </div>
          ))}
        </div>

        <div className="border-t pt-6" style={{ borderColor: `${t.pri}50` }}>
          <h3 className="font-semibold mb-4 text-center" style={{ color: t.pri }}>
            Notable Members
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {house.notableMembers.map((member) => (
              <span
                key={member}
                className="px-3 py-1 rounded-md text-sm border hover:scale-105 transition-transform"
                style={{ borderColor: t.pri, backgroundColor: `${t.pri}12` }}
              >
                {member}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
