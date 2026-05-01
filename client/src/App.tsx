import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import AdmissionsOverview from "@/pages/admissions/overview";
import Admissions2026 from "@/pages/admissions/2026";
import Admissions2025 from "@/pages/admissions/2025";
import Admissions2024 from "@/pages/admissions/2024";
import Admissions2023 from "@/pages/admissions/2023";
import Admissions2022 from "@/pages/admissions/2022";
import AdminConsultations from "@/pages/admin/consultations";
import InfoTuition from "@/pages/info-tuition";
import InfoTransport from "@/pages/info-transport";
import InfoTuitionGimhae from "@/pages/info-tuition-gimhae";
import InfoTransportGimhae from "@/pages/info-transport-gimhae";
import bgImage from "@assets/optimized/bg-pink-hills.webp";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/admin/consultations" component={AdminConsultations} />
      <Route path="/admissions" component={AdmissionsOverview} />
      <Route path="/admissions/overview" component={AdmissionsOverview} />
      <Route path="/admissions/2026" component={Admissions2026} />
      <Route path="/admissions/2025" component={Admissions2025} />
      <Route path="/admissions/2024" component={Admissions2024} />
      <Route path="/admissions/2023" component={Admissions2023} />
      <Route path="/admissions/2022" component={Admissions2022} />
      <Route path="/info/tuition" component={InfoTuition} />
      <Route path="/info/transport" component={InfoTransport} />
      <Route path="/info/tuition/gimhae" component={InfoTuitionGimhae} />
      <Route path="/info/transport/gimhae" component={InfoTransportGimhae} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div style={{ position: "relative", minHeight: "100vh" }}>
          {/* Background: image at top (natural ratio) + matching fill color below */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0,
              backgroundColor: "#A37E69",
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "100% auto",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
              pointerEvents: "none",
            }}
          />
          {/* Light wash for readability */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
              backgroundColor: "rgba(255, 255, 255, 0.18)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", zIndex: 2 }}>
            <Toaster />
            <Router />
          </div>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
