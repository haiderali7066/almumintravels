"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { BookOpen, Star, Heart } from "lucide-react";
import { motion } from "framer-motion";

// export const metadata = {
//   title: "Pilgrim Guide - Al Mumin Travels UK",
//   description:
//     "Step-by-step guide for Hajj and Umrah pilgrims, including preparation, rituals, duas, and helpful tips for a spiritually fulfilling journey.",
// };

export default function Guide() {
  const hajjSteps = [
    {
      title: "Preparation Before Travel",
      desc: `Ensure your documents (passport, visa, vaccination certificates) are ready.
      Learn about Ihram, Tawaf, Sa'i, and other rituals.
      Pack comfortable clothing and essentials for long walks.`,
    },
    {
      title: "Entering Ihram",
      desc: `Wear the Ihram garments.
      Make the Niyyah (intention) for Hajj or Umrah.
      Recite the Talbiyah repeatedly: "Labbayka Allahumma Labbayk..."`,
    },
    {
      title: "Arrival in Makkah",
      desc: `Perform Tawaf around the Kaaba (circumambulation) seven times.
      Pray at Maqam Ibrahim if possible.
      Perform Sa'i between Safa and Marwah seven times.`,
    },
    {
      title: "Day of Arafat (Hajj only)",
      desc: `Proceed to Mount Arafat and perform the Wuquf (standing) from noon to sunset.
      Make sincere Duas for forgiveness and guidance.`,
    },
    {
      title: "Muzdalifah & Mina",
      desc: `After sunset, travel to Muzdalifah, perform Maghrib and Isha prayers.
      Collect pebbles for the stoning ritual (Ramy) at Mina.`,
    },
    {
      title: "Ramy & Sacrifice",
      desc: `Throw the pebbles at Jamarat (stoning ritual).
      If performing Hajj Qurban, participate in the animal sacrifice.`,
    },
    {
      title: "Tawaf al-Ifadah & Sa'i",
      desc: `Perform Tawaf al-Ifadah.
      Complete Sa'i if not done earlier.`,
    },
    {
      title: "Return & Farewell Tawaf",
      desc: `After completing all rituals, perform Tawaf al-Wada (farewell Tawaf) before leaving Makkah.`,
    },
    {
      title: "Visit Madinah",
      desc: `Visit Masjid Nabawi, offer prayers, and reflect at the Prophet's grave.
      Explore historical Islamic sites respectfully.`,
    },
  ];

  const umrahSteps = [
    {
      title: "Preparation & Intention",
      desc: `Pack essential items.
      Enter Ihram from the designated Miqat.
      Make the Niyyah for Umrah.
      Recite Talbiyah: "Labbayka Allahumma Labbayk..."`,
    },
    {
      title: "Tawaf (Circumambulation)",
      desc: `Perform seven rounds around the Kaaba.
      Pray at Maqam Ibrahim after completion.`,
    },
    {
      title: "Sa'i Between Safa & Marwah",
      desc: `Walk seven times between Safa and Marwah.
      Remember the story of Hajar (AS) during Sa'i.`,
    },
    {
      title: "Shaving or Trimming Hair",
      desc: `Men: shave or trim hair.
      Women: trim a small portion of hair.
      This marks completion of Umrah rituals.`,
    },
  ];

  const duas = [
    {
      title: "Talbiyah",
      arabic: "لَبَّيْكَ اللّهُمَّ لَبَّيْك",
      transliteration: "Labbayka Allahumma Labbayk",
      meaning: "Here I am, O Allah, here I am.",
    },
    {
      title: "Dua on Arafat",
      arabic: "اللّهُمَّ اغْفِرْ لِي وَارْحَمْنِي",
      transliteration: "Allahumma ighfir li warhamni",
      meaning: "O Allah, forgive me and have mercy on me.",
    },
    {
      title: "Dua After Tawaf",
      arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً",
      transliteration: "Rabbana atina fid-dunya hasanatan",
      meaning:
        "Our Lord, give us good in this world and good in the Hereafter.",
    },
  ];

  const tips = [
    "Stay hydrated and carry a water bottle during rituals.",
    "Wear comfortable footwear for long walking.",
    "Respect local customs and follow guide instructions.",
    "Keep travel documents safe and accessible.",
    "Be patient during crowded rituals and maintain a positive attitude.",
    "Follow health protocols and maintain hygiene.",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="w-full">
      <Header />

      {/* Hero */}
      <section className="relative py-12 md:py-24 px-4 bg-[#0f2f24]">
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white text-balance"
          >
            Complete Pilgrim Guide
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-white/85 text-balance max-w-3xl mx-auto"
          >
            Step-by-step instructions for Hajj and Umrah with essential Duas,
            tips, and information to ensure a safe and spiritually fulfilling
            journey.
          </motion.p>
        </div>
      </section>

      {/* Hajj Steps */}
      <section className="py-12 md:py-20 px-4 bg-muted/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
            How to Perform Hajj
          </h2>
          <div className="space-y-6">
            {hajjSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/50 transition"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {idx + 1}. {step.title}
                </h3>
                <p className="text-muted-foreground whitespace-pre-line">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Umrah Steps */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
            How to Perform Umrah
          </h2>
          <div className="space-y-6">
            {umrahSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/50 transition"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {idx + 1}. {step.title}
                </h3>
                <p className="text-muted-foreground whitespace-pre-line">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Duas */}
      <section className="py-12 md:py-20 px-4 bg-muted/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
            Important Duas
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {duas.map((dua, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/50 transition"
              >
                <h3 className="font-semibold text-lg mb-2 text-primary">
                  {dua.title}
                </h3>
                <p className="text-xl mb-1">{dua.arabic}</p>
                <p className="text-muted-foreground italic mb-1">
                  {dua.transliteration}
                </p>
                <p className="text-muted-foreground">{dua.meaning}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-12 md:py-20 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
            Helpful Tips & Information
          </h2>
          <ul className="space-y-4 list-disc list-inside text-muted-foreground text-lg">
            {tips.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </div>
      </section>

      

      <Footer />
    </main>
  );
}
