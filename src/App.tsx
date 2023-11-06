import { SiteHeader } from "./components/ui/site-header";
import MainComponent from "./components/main";
function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <MainComponent />
      </section>
    </div>
  );
}

export default App;
