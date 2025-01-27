import { Separator } from "@/components/ui/separator"

export const Footer = () => {
  return (
    <footer className="border-t border-border/40">
      <div className="container py-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">О нас</h3>
            <p className="text-sm text-muted-foreground">
              Современная игровая комната с лучшим оборудованием и комфортной атмосферой
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Контакты</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Телефон: +7 (999) 123-45-67</li>
              <li>Email: info@gameroom.ru</li>
              <li>Адрес: ул. Примерная, 123</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Режим работы</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Пн-Пт: 10:00 - 23:00</li>
              <li>Сб-Вс: 10:00 - 00:00</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Соцсети</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>VK</li>
              <li>Telegram</li>
              <li>Discord</li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          © 2024 Игровая комната. Все права защищены.
        </div>
      </div>
    </footer>
  )
}