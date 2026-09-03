// Light mode ambient background - soft radial blobs, no stars
export function StarBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-[-10%] left-[30%] w-[600px] h-[600px] bg-violet-100/60 rounded-full blur-[120px]" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-indigo-100/50 rounded-full blur-[100px]" />
      <div className="absolute top-[50%] left-[-10%] w-[350px] h-[350px] bg-sky-100/40 rounded-full blur-[90px]" />
    </div>
  )
}
