import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const Contacts = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Адрес",
      content: "ул. Примерная, 123, Город",
    },
    {
      icon: <Phone className="h-6 w-6 text-secondary" />,
      title: "Телефон",
      content: "+7 (999) 123-45-67",
    },
    {
      icon: <Mail className="h-6 w-6 text-accent" />,
      title: "Email",
      content: "info@gameroom.ru",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Режим работы",
      content: "Пн-Пт: 10:00 - 23:00\nСб-Вс: 10:00 - 00:00",
    },
  ]

  return (
    <main className="min-h-screen">
      <section className="container py-20">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h1 className="text-4xl font-bold">Контакты</h1>
          <p className="mt-4 text-muted-foreground">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur">
                  <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                    {item.icon}
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">
                      {item.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d30.0!3d60.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDU5JzU5LjgiTiAzMMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sru!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border/50 bg-card/50 backdrop-blur">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Введите ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="example@mail.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    placeholder="Введите ваше сообщение"
                    rows={5}
                  />
                </div>
                <Button className="w-full">Отправить</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}