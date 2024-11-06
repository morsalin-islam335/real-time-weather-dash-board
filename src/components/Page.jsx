import { WeatherProvider } from "../provider";
import Header from "./header/Header";
import WeatherBoard from "./weather/WeatherBoard";

export default function Page() {
  return (
    <>
      <WeatherProvider>
        <div className="grid place-items-center h-screen">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      </WeatherProvider>
    </>
  );
}
