import "./App.css";
import { Header } from "./components/header/Header";
import { Section } from "./components/section/Section";
import { Article } from "./components/article/Article";
import { Button } from "./components/buttons/Buttons";
import { countries } from "./Data";

function App() {
  return (
    <>
      <Header firstName={"Ozod"} lastName={"Bukhorizoda"} role={"Admin"} />
      <Section title={"Countries"}>
        {countries.map((country) => (
          <Article
            key={country.id}
            title={country.title}
            subtitle={country.subtitle}
            img={country.img}
          >
            <Button />
          </Article>
        ))}
      </Section>
    </>
  );
}

export default App;
