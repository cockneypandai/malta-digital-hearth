import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Siren,
  FirstAid,
  Pill,
  PawPrint,
  Warning,
  PhoneOutgoing,
  GlobeHemisphereWest,
  ShieldStar,
  Ambulance,
  Fire,
  Anchor,
  Hospital,
  Brain,
  ClockAfternoon,
  Dog,
  Heartbeat,
  ShieldWarning,
  CloudLightning,
  CarProfile,
  HandHeart,
  Wine,
  IdentificationCard,
  Flag,
  Phone,
  MapPin,
  List,
  CalendarCheck,
  MagnifyingGlass,
  Link as LinkIcon,
} from "@phosphor-icons/react";
import { PanicButton } from "@/components/emergency/PanicButton";
import { SectionHeader } from "@/components/emergency/SectionHeader";
import { EmergencyCard } from "@/components/emergency/EmergencyCard";

const Emergency = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-emergency/30 pb-4">
        <div className="container mx-auto px-4 pt-4">
          {/* Brand & Back */}
          <header className="flex justify-between items-center mb-4">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-3xl font-bold tracking-tight text-foreground">
                Emergency<span className="text-red-500">Hub</span>
              </h1>
            </motion.div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-muted/50 hover:bg-muted text-foreground/80 hover:text-foreground px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              <ArrowLeft weight="bold" className="w-4 h-4" />
              Exit
            </Link>
          </header>

          {/* Panic Button */}
          <PanicButton />
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="container mx-auto px-4 pt-[220px] pb-16">
        {/* Emergency Services */}
        <SectionHeader title="Emergency Services" icon={<Siren weight="duotone" />} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <EmergencyCard
            title="Police Department"
            icon={<ShieldStar weight="duotone" />}
            description="For life-threatening emergencies."
            scope={{ label: "Emergency Only", type: "emergency" }}
            primaryAction={{
              label: "112 (Emergency)",
              href: "tel:112",
              icon: <Phone weight="bold" />,
            }}
            secondaryActions={[
              { label: "119 (Report Info)", href: "tel:119", icon: <Phone weight="bold" /> },
            ]}
            tertiaryInfo="HQ: +356 2122 4001"
          />
          <EmergencyCard
            title="Ambulance"
            icon={<Ambulance weight="duotone" />}
            description="Life-threatening medical emergencies."
            scope={{ label: "Emergency Only", type: "emergency" }}
            primaryAction={{
              label: "112",
              href: "tel:112",
              icon: <Phone weight="bold" />,
            }}
          />
          <EmergencyCard
            title="Fire & Rescue"
            icon={<Fire weight="duotone" />}
            description="Fire, entrapment, or rescue operations."
            scope={{ label: "Emergency Only", type: "emergency" }}
            primaryAction={{
              label: "112",
              href: "tel:112",
              icon: <Phone weight="bold" />,
            }}
          />
          <EmergencyCard
            title="Armed Forces (Rescue)"
            icon={<Anchor weight="duotone" />}
            description="Air/Sea rescue and search operations."
            scope={{ label: "Urgent Rescue", type: "urgent" }}
            primaryAction={{
              label: "+356 2249 4000",
              href: "tel:+35622494000",
              icon: <Phone weight="bold" />,
            }}
          />
        </div>

        {/* Medical Emergencies */}
        <SectionHeader title="Medical Emergencies" icon={<FirstAid weight="duotone" />} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <EmergencyCard
            title="Mater Dei A&E"
            icon={<Hospital weight="duotone" />}
            description="Main hospital emergency department (Malta)."
            scope={{ label: "Emergency Dept", type: "emergency" }}
            primaryAction={{
              label: "+356 2545 0000",
              href: "tel:+35625450000",
              icon: <Phone weight="bold" />,
            }}
          />
          <EmergencyCard
            title="Gozo General A&E"
            icon={<Hospital weight="duotone" />}
            description="Main hospital emergency department (Gozo)."
            scope={{ label: "Emergency Dept", type: "emergency" }}
            primaryAction={{
              label: "+356 2156 1600",
              href: "tel:+35621561600",
              icon: <Phone weight="bold" />,
            }}
          />
          <EmergencyCard
            title="Mental Health Crisis"
            icon={<Brain weight="duotone" />}
            description="Immediate support and crisis intervention."
            scope={{ label: "Crisis Support", type: "urgent" }}
            primaryAction={{
              label: "1579 (National)",
              href: "tel:1579",
              icon: <Phone weight="bold" />,
            }}
            secondaryActions={[
              { label: "1770 (Rich)", href: "tel:1770", icon: <Phone weight="bold" /> },
            ]}
          />
        </div>

        {/* Pharmacies */}
        <SectionHeader title="Open / On-Call Pharmacies" icon={<Pill weight="duotone" />} />
        <div className="grid grid-cols-1 gap-4">
          <EmergencyCard
            title="Today's Open Pharmacies"
            icon={<ClockAfternoon weight="duotone" />}
            description="Official schedule of pharmacies open today, tonight, and weekends."
            scope={{ label: "Live Roster", type: "urgent" }}
            fullWidth
            primaryAction={{
              label: "View Pharmacy Roster",
              href: "https://www.pharmacy.com.mt/roster/",
              icon: <CalendarCheck weight="bold" />,
              isExternal: true,
            }}
          />
        </div>

        {/* Animal Emergencies */}
        <SectionHeader title="Animal Emergencies" icon={<PawPrint weight="duotone" />} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <EmergencyCard
            title="Animal Welfare"
            icon={<Dog weight="duotone" />}
            description="Injured strays or animal cruelty reports (24/7)."
            scope={{ label: "24/7 Report", type: "urgent" }}
            primaryAction={{
              label: "153 (Ext 17)",
              href: "tel:153",
              icon: <Phone weight="bold" />,
            }}
            tertiaryInfo="Fallback: 1717"
          />
          <EmergencyCard
            title="Urgent Vet Care"
            icon={<Heartbeat weight="duotone" />}
            description="Contact your nearest 24hr clinic immediately."
            scope={{ label: "User Search", type: "urgent" }}
            primaryAction={{
              label: "Find Nearest Vet",
              href: "https://www.google.com/maps/search/emergency+vet",
              icon: <MapPin weight="bold" />,
              isExternal: true,
            }}
          />
        </div>

        {/* Public Safety */}
        <SectionHeader title="Public Safety & Alerts" icon={<Warning weight="duotone" />} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <EmergencyCard
            title="Civil Protection"
            icon={<ShieldWarning weight="duotone" />}
            description="Assistance during floods, storms, or disasters."
            scope={{ label: "Disaster Aid", type: "urgent" }}
            primaryAction={{
              label: "+356 2393 0000",
              href: "tel:+35623930000",
              icon: <Phone weight="bold" />,
            }}
          />
          <EmergencyCard
            title="Weather Warnings"
            icon={<CloudLightning weight="duotone" />}
            description="Severe weather updates (Met Office)."
            scope={{ label: "Live Alerts", type: "urgent" }}
            primaryAction={{
              label: "View Warnings",
              href: "https://www.maltairport.com/weather/",
              icon: <LinkIcon weight="bold" />,
              isExternal: true,
            }}
          />
          <EmergencyCard
            title="Roadside Assistance"
            icon={<CarProfile weight="duotone" />}
            description="Urgent breakdown or accident recovery only."
            scope={{ label: "Vehicle Recovery", type: "urgent" }}
            fullWidth
            primaryAction={{
              label: "Find Nearby Service",
              href: "https://www.google.com/maps/search/roadside+assistance+malta",
              icon: <MagnifyingGlass weight="bold" />,
              isExternal: true,
            }}
          />
        </div>

        {/* Critical Hotlines */}
        <SectionHeader title="Critical Hotlines" icon={<PhoneOutgoing weight="duotone" />} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <EmergencyCard
            title="Supportline 179"
            icon={<HandHeart weight="duotone" />}
            description="Domestic violence, child abuse, homelessness, suicide."
            scope={{ label: "Free Crisis Line", type: "urgent" }}
            primaryAction={{
              label: "179",
              href: "tel:179",
              icon: <Phone weight="bold" />,
            }}
          />
          <EmergencyCard
            title="OASI Foundation"
            icon={<Wine weight="duotone" />}
            description="Substance abuse immediate support."
            scope={{ label: "Substance Use", type: "urgent" }}
            primaryAction={{
              label: "+356 2156 3333",
              href: "tel:+35621563333",
              icon: <Phone weight="bold" />,
            }}
          />
        </div>

        {/* Foreign Nationals */}
        <SectionHeader title="Foreign Nationals" icon={<GlobeHemisphereWest weight="duotone" />} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <EmergencyCard
            title="Passport Office"
            icon={<IdentificationCard weight="duotone" />}
            description="Urgent travel or lost passport assistance."
            scope={{ label: "Documents", type: "urgent" }}
            primaryAction={{
              label: "+356 2590 4100",
              href: "tel:+35625904100",
              icon: <Phone weight="bold" />,
            }}
          />
          <EmergencyCard
            title="Embassies & Consulates"
            icon={<Flag weight="duotone" />}
            description="Find your country's representative."
            scope={{ label: "Representation", type: "urgent" }}
            primaryAction={{
              label: "View Directory",
              href: "https://foreign.gov.mt/en/Embassies/Pages/Embassies-in-Malta.aspx",
              icon: <List weight="bold" />,
              isExternal: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Emergency;
