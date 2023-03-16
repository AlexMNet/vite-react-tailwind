function App() {
  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center text-center text-slate-300">
      <h1 className="text-6xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">
        Vite · ReactJS · TailwindCSS
      </h1>
      <p className="text-xl capitalize">
        for more information visit{' '}
        <a
          href="https://github.com/AlexMNet/vite-react-tailwind"
          className="underline text-blue-500"
        >
          repo
        </a>
      </p>
    </div>
  );
}

export default App;
