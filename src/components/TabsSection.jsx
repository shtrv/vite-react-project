import Button from "./button/Button";

export default function TabsSection({ active, onChange }) {
  return (
    <section className="tabsSection">
      <Button isActive={(active === "main")} onClick={() => onChange("main")}>
        Главная
      </Button>
      <Button
        isActive={(active === "description")}
        onClick={() => onChange("description")}
      >
        Описание
      </Button>
      <Button isActive={(active === "about")} onClick={() => onChange("about")}>
        Обо мне
      </Button>
    </section>
  );
}
