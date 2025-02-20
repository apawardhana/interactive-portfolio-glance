
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "../hooks/useTranslation";

const Hero = () => {
  const { t } = useTranslation();

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
            {t("hero.title")}
            <br />
            <span className="text-gradient">{t("hero.subtitle")}</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
            {t("hero.description")}
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="group">
              {t("hero.contact")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              {t("hero.portfolio")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
