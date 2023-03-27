export default function Header() {
  return (
    <header className="bg-gray-500 text-2xl text-white">
        <nav className='text-blue-500 flex justify-center gap-10 p-3'>
          <a href="./">Home</a>
          <a href="./about">About</a>
          <a href="./series">Series</a>
        </nav>
    </header>
  )
}
