import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const PricingSection = () => {
  const prices = [
    {
      title: "PS5",
      price: "400₽",
      description: "За час игры",
      features: ["4K Gaming", "DualSense контроллер", "Большой выбор игр", "Комфортный диван"],
    },
    {
      title: "PRO PC",
      price: "350₽",
      description: "За час игры",
      features: ["RTX 4080", "360Hz монитор", "Механическая клавиатура", "Игровое кресло"],
      featured: true,
    },
    {
      title: "Стандарт PC",
      price: "250₽",
      description: "За час игры",
      features: ["RTX 3060", "144Hz монитор", "RGB периферия", "Удобное кресло"],
    },
  ]

  return (
    <section className="container py-20">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Наши тарифы</h2>
        <p className="mt-4 text-muted-foreground">
          Выберите подходящий тариф и погрузитесь в мир игр
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {prices.map((price) => (
          <Card
            key={price.title}
            className={cn(
              "relative overflow-hidden",
              price.featured && "border-primary shadow-lg"
            )}
          >
            {price.featured && (
              <div className="absolute right-0 top-0 mr-4 mt-4 rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                Популярный
              </div>
            )}
            <CardHeader>
              <CardTitle>{price.title}</CardTitle>
              <CardDescription>{price.description}</CardDescription>
              <div className="mt-4 text-4xl font-bold">{price.price}</div>
            </CardHeader>
            <CardContent>
              <ul className="mb-8 space-y-4">
                {price.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className="mr-3 h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={price.featured ? "default" : "outline"}>
                Забронировать
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}