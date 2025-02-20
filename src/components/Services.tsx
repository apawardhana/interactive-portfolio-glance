
import { motion } from "framer-motion";
import {
  Database,
  Mail,
  FileSpreadsheet,
  Cloud,
  Calculator,
  ListTodo,
} from "lucide-react";

const services = [
  {
    icon: FileSpreadsheet,
    title: "Data Entry & Spreadsheet Management",
    description: "Pengelolaan data dan spreadsheet yang akurat dan terorganisir",
  },
  {
    icon: Mail,
    title: "Email & Calendar Management",
    description: "Pengelolaan email dan jadwal untuk meningkatkan produktivitas",
  },
  {
    icon: Database,
    title: "Web Research & Data Collection",
    description: "Penelitian web dan pengumpulan data yang komprehensif",
  },
  {
    icon: Cloud,
    title: "File Organization & Cloud Management",
    description: "Pengelolaan file dan layanan cloud yang efisien",
  },
  {
    icon: Calculator,
    title: "Basic Accounting & Invoicing",
    description: "Pengelolaan keuangan dasar dan pembuatan invoice",
  },
  {
    icon: ListTodo,
    title: "Task & Project Management",
    description: "Manajemen tugas dan proyek yang terstruktur",
  },
];

const Services = () => {
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
          <h2 className="heading-lg">Layanan Saya</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Saya menyediakan berbagai layanan virtual assistant untuk membantu
            mengoptimalkan operasional bisnis Anda.
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
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
