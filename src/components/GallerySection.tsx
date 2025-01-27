import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export const GallerySection = () => {
  const images = [
    {
      src: "/placeholder.svg",
      alt: "Игровая зона PS5",
    },
    {
      src: "/placeholder.svg",
      alt: "Компьютерный зал",
    },
    {
      src: "/placeholder.svg",
      alt: "Зона отдыха",
    },
    {
      src: "/placeholder.svg",
      alt: "Турнирная зона",
    },
  ]

  return (
    <section className="container py-20">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Наша игровая комната</h2>
        <p className="mt-4 text-muted-foreground">
          Современное оборудование и комфортная атмосфера
        </p>
      </div>
      <div className="mx-auto max-w-5xl">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-full"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </AspectRatio>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}