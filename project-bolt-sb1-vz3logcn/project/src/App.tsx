import React, { useState } from 'react';
import { RestrictedAccess } from './components/RestrictedAccess';
import { SalesPage } from './components/SalesPage';
import { Dashboard } from './components/Dashboard';
import { ConsultationProcess } from './components/ConsultationProcess';

function App() {
  const [hasAccess, setHasAccess] = useState(false);
  const [currentPage, setCurrentPage] = useState<'sales' | 'dashboard' | 'consultation'>('sales');

  const handleAccessGranted = () => {
    setHasAccess(true);
  };

  const handleNavigateToDashboard = () => {
    setCurrentPage('dashboard');
  };

  const handleNavigateToConsultation = () => {
    setCurrentPage('consultation');
  };

  const handleBackToSales = () => {
    setCurrentPage('sales');
  };

  if (!hasAccess) {
    return <RestrictedAccess onAccessGranted={handleAccessGranted} />;
  }

  if (currentPage === 'dashboard') {
    return <Dashboard onBack={handleBackToSales} />;
  }

  if (currentPage === 'consultation') {
    return <ConsultationProcess onBack={handleBackToSales} />;
  }

  return <SalesPage onNavigateToDashboard={handleNavigateToDashboard} onNavigateToConsultation={handleNavigateToConsultation} />;
}

export default App;