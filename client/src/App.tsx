import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Portfolio from "@/pages/portfolio";
import AdmissionsOverview from "@/pages/admissions/overview";
import Admissions2025 from "@/pages/admissions/2025";
import Admissions2024 from "@/pages/admissions/2024";
import Admissions2023 from "@/pages/admissions/2023";
import Admissions2022 from "@/pages/admissions/2022";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/admissions" component={AdmissionsOverview} />
      <Route path="/admissions/overview" component={AdmissionsOverview} />
      <Route path="/admissions/2025" component={Admissions2025} />
      <Route path="/admissions/2024" component={Admissions2024} />
      <Route path="/admissions/2023" component={Admissions2023} />
      <Route path="/admissions/2022" component={Admissions2022} />
      <Route component={NotFound} />
    </Switch>
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
