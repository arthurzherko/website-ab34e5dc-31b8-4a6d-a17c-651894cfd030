import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gamepad2, Monitor, Trophy } from "lucide-react"

export const HeroSection = () => {
  return (
    <div className="container relative min-h-[calc(100vh-4rem)] py-20">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
              Игровая комната{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                нового поколения
              </span>
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground">
              Погрузитесь в мир игр на самом современном оборудовании. PS5, мощные игровые ПК и комфортная атмосфера ждут вас.
            </p>
          </div>
          <div className="flex gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Забронировать
            </Button>
            <Button size="lg" variant="outline">
              Узнать больше
            </Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-border/50 bg-card/50 backdrop-blur">
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <Gamepad2 className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">PlayStation 5</h3>
              <p className="text-center text-sm text-muted-foreground">
                4K gaming с поддержкой ray tracing
              </p>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-card/50 backdrop-blur">
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <Monitor className="h-12 w-12 text-secondary" />
              <h3 className="text-xl font-semibold">Игровые ПК</h3>
              <p className="text-center text-sm text-muted-foreground">
                RTX 4080, 360Hz мониторы
              </p>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-card/50 backdrop-blur md:col-span-2">
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <Trophy className="h-12 w-12 text-accent" />
              <h3 className="text-xl font-semibold">Турниры</h3>
              <p className="text-center text-sm text-muted-foreground">
                Регулярные турниры с призами
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}