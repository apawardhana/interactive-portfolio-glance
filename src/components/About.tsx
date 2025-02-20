
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const skills = [
  "Microsoft Office Suite",
  "Google Workspace",
  "Data Entry & Analysis",
  "Email Management",
  "Calendar Management",
  "Task Organization",
  "Customer Service",
  "Social Media Management",
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="heading-lg">Tentang Saya</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Sebagai Virtual Assistant berpengalaman, saya membantu klien mengelola
              tugas administratif dan digital mereka dengan efisien dan profesional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold">Pengalaman</h3>
              <p className="text-gray-600">
                Saya adalah Virtual Assistant yang detail-oriented dengan keahlian dalam data entry, web research,
                email management, dan administrative support. Saya membantu bisnis tetap terorganisir, 
                menghemat waktu, dan meningkatkan efisiensi dengan menangani tugas repetitif secara akurat dan profesional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold">Keahlian</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-gray-600"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
