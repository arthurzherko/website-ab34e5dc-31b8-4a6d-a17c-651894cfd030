import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Monitor, Trophy, Users, Calendar, Headphones } from "lucide-react"

export const Services = () => {
  const services = [
    {
      icon: <Gamepad2 className="h-8 w-8 text-primary" />,
      title: "PlayStation 5",
      description: "Играйте в последние хиты на PS5 с поддержкой 4K и ray tracing",
      features: ["DualSense контроллер", "Большая библиотека игр", "4K HDR телевизор", "Комфортный диван"],
    },
    {
      icon: <Monitor className="h-8 w-8 text-secondary" />,
      title: "Игровые ПК",
      description: "Мощные компьютеры для максимальной производительности в играх",
      features: ["RTX 4080", "360Hz мониторы", "Механические клавиатуры", "Игровые кресла"],
    },
    {
      icon: <Trophy className="h-8 w-8 text-accent" />,
      title: "Турниры",
      description: "Регулярные турниры по популярным киберспортивным дисциплинам",
      features: ["Призовой фонд", "Профессиональная организация", "Стримы", "Комментаторы"],
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Групповые мероприятия",
      description: "Организация игровых вечеринок и командных событий",
      features: ["До 20 человек", "Кейтеринг", "Техническая поддержка", "Индивидуальный подход"],
    },
    {
      icon: <Calendar className="h-8 w-8 text-secondary" />,
      title: "Абонементы",
      description: "Выгодные тарифы для постоянных клиентов",
      features: ["Скидки до 20%", "Бронирование мест", "Бонусная программа", "Специальные предложения"],
    },
    {
      icon: <Headphones className="h-8 w-8 text-accent" />,
      title: "VR-зона",
      description: "Погружение в виртуальную реальность с современными VR-гарнитурами",
      features: ["Meta Quest 3", "Большое пространство", "Популярные VR-игры", "Инструктаж"],
    },
  ]

  return (
    <main className="min-h-screen">
      <section className="container py-20">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h1 className="text-4xl font-bold">Наши услуги</h1>
          <p className="mt-4 text-muted-foreground">
            Широкий спектр развлечений для настоящих геймеров
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full">Забронировать</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}