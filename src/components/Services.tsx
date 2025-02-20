
import { motion } from "framer-motion";
import {
  Database,
  Mail,
  FileSpreadsheet,
  Cloud,
  Calculator,
  ListTodo,
} from "lucide-react";
import { useTranslation } from "../hooks/useTranslation";

const serviceIcons = {
  dataEntry: FileSpreadsheet,
  email: Mail,
  research: Database,
  cloud: Cloud,
  accounting: Calculator,
  task: ListTodo,
};

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: "dataEntry",
      icon: serviceIcons.dataEntry,
    },
    {
      key: "email",
      icon: serviceIcons.email,
    },
    {
      key: "research",
      icon: serviceIcons.research,
    },
    {
      key: "cloud",
      icon: serviceIcons.cloud,
    },
    {
      key: "accounting",
      icon: serviceIcons.accounting,
    },
    {
      key: "task",
      icon: serviceIcons.task,
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg">{t("services.title")}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {t("services.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card hover-card rounded-xl p-6"
            >
              <service.icon className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {t(`services.items.${service.key}.title`)}
              </h3>
              <p className="text-gray-600">
                {t(`services.items.${service.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
