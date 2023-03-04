
import './App.css';

interface AppProps{
  title: string
}

export function App({title}:AppProps) {
  return (
    <div className="App">
      <h1>{title}</h1>
    </div>
  );
}
