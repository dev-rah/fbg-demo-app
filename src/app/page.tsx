function Niko() {
  return <div className="text-niko">Brok</div>
}

function Thomas() {
  return <div>Thomas</div>
}

function Lars() {
  return <div>Lars er her</div>
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      Hej FBG.

      <Niko />
      <Niko />
      <Niko />
      <Niko />
      <Niko />
      <Niko />

      <Thomas />
      <Lars />
    </main>
  )
}
