
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="section-padding min-h-[90vh] flex items-center justify-center">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="heading-xl">
            Virtual Assistant untuk
            <br />
            <span className="text-gradient">Kebutuhan Digital Anda</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
            Saya membantu Anda mengelola tugas administratif dan digital dengan efisien,
            sehingga Anda bisa fokus pada pertumbuhan bisnis Anda.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="group">
              Hubungi Saya
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Lihat Portfolio
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
