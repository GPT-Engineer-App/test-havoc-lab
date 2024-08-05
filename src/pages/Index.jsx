import { useState } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Heart, Paw } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Heart, Paw } from "lucide-react";

const dogBreeds = [
  { name: "Labrador Retriever", image: "https://images.unsplash.com/photo-1579213838058-7a3094967f2f?w=500&h=500&fit=crop" },
  { name: "German Shepherd", image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=500&h=500&fit=crop" },
  { name: "Golden Retriever", image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=500&h=500&fit=crop" },
  { name: "French Bulldog", image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&h=500&fit=crop" },
  { name: "Bulldog", image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500&h=500&fit=crop" },
  { name: "Poodle", image: "https://images.unsplash.com/photo-1616587894289-86480e533129?w=500&h=500&fit=crop" },
  { name: "Beagle", image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=500&h=500&fit=crop" },
  { name: "Rottweiler", image: "https://images.unsplash.com/photo-1567752881298-894bb81f9379?w=500&h=500&fit=crop" },
];

const Index = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-4 text-blue-800">Paw-some World of Dogs</h1>
          <p className="text-xl text-gray-600">Discover the joy and companionship of man's best friend</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1534361960057-19889db9621e?w=1000&h=800&fit=crop" 
              alt="Happy dog" 
              className="rounded-lg shadow-2xl w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-800">Why Dogs are Amazing</h2>
            <p className="text-lg text-gray-700 mb-6">
              Dogs are more than just pets; they're loyal companions, protectors, and sources of unconditional love. 
              Their presence in our lives brings joy, reduces stress, and encourages us to be more active and social.
            </p>
            <Button 
              className="self-start flex items-center space-x-2"
              onClick={() => setLikes(likes + 1)}
            >
              <Heart className="w-5 h-5" />
              <span>Love Dogs ({likes})</span>
            </Button>
          </motion.div>
        </div>

        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-blue-800">Characteristics of Dogs</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Loyal and affectionate companions",
                "Wide variety of breeds, sizes, and colors",
                "Highly intelligent and trainable",
                "Excellent sense of smell and hearing",
                "Require regular exercise and mental stimulation",
                "Adaptable to various living environments"
              ].map((trait, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center space-x-2 text-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Paw className="w-5 h-5 text-blue-500" />
                  <span>{trait}</span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-800">Popular Dog Breeds</h2>
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {dogBreeds.map((breed, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="text-center">
                          <img src={breed.image} alt={breed.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                          <h3 className="font-semibold text-lg">{breed.name}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Index;
