"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/data";
import SectionHeader from "@/components/ui/SectionHeader";
import TiltCard from "@/components/ui/TiltCard";

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[400px] bg-secondary/5 blur-[130px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="What I Offer"
          title="Services &"
          highlight="Solutions"
          description="From concept to deployment — I provide end-to-end solutions that drive real business value."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <TiltCard key={service.id} intensity={8}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="glass border border-white/8 rounded-3xl p-6 hover:border-primary/30 transition-all duration-300 h-full group relative overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.gradient} opacity-5`} />

                {/* Icon */}
                <div className="text-4xl mb-5">{service.icon}</div>

                {/* Gradient border line */}
                <div className={`h-0.5 w-12 mb-5 rounded-full bg-gradient-to-r ${service.gradient} opacity-60`} />

                <h3 className="text-lg font-bold font-display text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-gray-400">
                      <CheckCircle2 size={13} className="text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
