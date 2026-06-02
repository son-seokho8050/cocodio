import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

const AdmissionsOverview = lazy(() => import("@/pages/admissions/overview"));
const Admissions2026 = lazy(() => import("@/pages/admissions/2026"));
const Admissions2025 = lazy(() => import("@/pages/admissions/2025"));
const Admissions2024 = lazy(() => import("@/pages/admissions/2024"));
const Admissions2023 = lazy(() => import("@/pages/admissions/2023"));
const Admissions2022 = lazy(() => import("@/pages/admissions/2022"));
const AdminConsultations = lazy(() => import("@/pages/admin/consultations"));
const InfoTuition = lazy(() => import("@/pages/info-tuition"));
const InfoTransport = lazy(() => import("@/pages/info-transport"));
const InfoTuitionGimhae = lazy(() => import("@/pages/info-tuition-gimhae"));
const InfoTransportGimhae = lazy(() => import("@/pages/info-transport-gimhae"));

function Router() {
  return (
    <Suspense fallback={null}>
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
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
