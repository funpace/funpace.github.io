import React, { useEffect, useState } from 'react';
import LandingPage from './components/LandingPage';
import CheckoutPage from './components/CheckoutPage';
import PlansPage from './components/PlansPage';
import CheckoutSuccessPage from './components/CheckoutSuccessPage';

type PublicRoute = 'landing' | 'planos' | 'checkout' | 'checkout-success';
type PlanType = 'run' | 'pro';

const App: React.FC = () => {
  const [publicRoute, setPublicRoute] = useState<PublicRoute>(() => {
    if (window.location.hash === '#checkout-success') return 'checkout-success';
    if (window.location.hash === '#checkout') return 'checkout';
    if (window.location.hash === '#planos') return 'planos';
    return 'landing';
  });
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('run');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#checkout-success') {
        setPublicRoute('checkout-success');
        return;
      }
      if (window.location.hash === '#checkout') {
        setPublicRoute('checkout');
        return;
      }
      if (window.location.hash === '#planos') {
        setPublicRoute('planos');
        return;
      }
      setPublicRoute('landing');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openLanding = () => {
    window.location.hash = '';
    setPublicRoute('landing');
  };

  const openplanos = () => {
    window.location.hash = 'planos';
    setPublicRoute('planos');
  };

  const openCheckout = (plan?: PlanType) => {
    if (plan) {
      setSelectedPlan(plan);
    }
    window.location.hash = 'checkout';
    setPublicRoute('checkout');
  };

  if (publicRoute === 'planos') {
    return <PlansPage onBack={openLanding} onSelectPlan={openCheckout} />;
  }

  if (publicRoute === 'checkout') {
    return <CheckoutPage onBack={openplanos} plan={selectedPlan} />;
  }

  if (publicRoute === 'checkout-success') {
    return <CheckoutSuccessPage onGoToPlans={openplanos} onGoToHome={openLanding} />;
  }

  return <LandingPage onJoin={() => {}} onLogin={() => {}} onCheckout={openplanos} theme="dark" />;
};

export default App;
