import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Clock, 
  Target, 
  AlertTriangle,
  CheckCircle,
  BarChart3,
  PieChart,
  Activity,
  Zap,
  Shield,
  Truck,
  Factory,
  Cpu,
  Eye,
  Wrench,
  Globe,
  Lock,
  Grid3X3,
  Table,
  TrendingDown as SavingsIcon,
  Sparkles,
  Star,
  Rocket,
  Award,
  Crown,
  Diamond,
  Flame,
  Hexagon
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  cost: number;
  benefits: string;
  etc: number;
  roi: string;
  cpi: number;
  icon: React.ReactNode;
  category: string;
}

interface DashboardProps {
  onBack: () => void;
}

export function Dashboard({ onBack }: DashboardProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTab, setActiveTab] = useState<'cards' | 'table' | 'savings'>('cards');

  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Driven Predictive Maintenance System",
      description: "Developing and integrating a proprietary AI platform to analyze data from on-board vehicle sensors to predict component failures before they happen.",
      cost: 1250000,
      benefits: "Reduces unplanned downtime by 30%, extends component lifespan by 15%",
      etc: 450000,
      roi: "250% over 3 years",
      cpi: 1.15,
      icon: <Activity className="w-6 h-6" />,
      category: "AI & Analytics"
    },
    {
      id: 2,
      title: "Digital Twin for Factory Floor Simulation",
      description: "Creating a virtual model of BelAZ's main manufacturing plant to test new assembly line layouts and production flows in a risk-free environment.",
      cost: 780000,
      benefits: "Increases production line efficiency by 10%, reduces time for new model integration by 20%",
      etc: 290000,
      roi: "180% over 2 years",
      cpi: 0.98,
      icon: <Factory className="w-6 h-6" />,
      category: "Manufacturing"
    },
    {
      id: 3,
      title: "Autonomous Haulage System (AHS) Pilot Program",
      description: "Licensing and implementing an autonomous haulage system for a fleet of 50 trucks, including software, GPS integration, and on-site training.",
      cost: 5500000,
      benefits: "Improves operational safety, increases haulage efficiency by 18%, allows for 24/7 operation",
      etc: 2800000,
      roi: "400% over 5 years",
      cpi: 1.05,
      icon: <Truck className="w-6 h-6" />,
      category: "Automation"
    },
    {
      id: 4,
      title: "Supply Chain Blockchain Integration",
      description: "Implementing a blockchain-based system to track high-value parts from suppliers to the factory floor, enhancing transparency and reducing counterfeit parts.",
      cost: 450000,
      benefits: "Reduces counterfeit parts by 90%, lowers administrative costs by 15%",
      etc: 120000,
      roi: "120% over 3 years",
      cpi: 1.20,
      icon: <Shield className="w-6 h-6" />,
      category: "Supply Chain"
    },
    {
      id: 5,
      title: "Advanced Material Stress Analysis Software",
      description: "Licensing and integration of specialized software for finite element analysis to simulate material stress on new truck chassis designs.",
      cost: 310000,
      benefits: "Reduces prototype costs by 40%, shortens design cycle by 20%",
      etc: 80000,
      roi: "210% over 2 years",
      cpi: 1.02,
      icon: <Cpu className="w-6 h-6" />,
      category: "R&D"
    },
    {
      id: 6,
      title: "IoT Sensor Network for Vehicle Health Monitoring",
      description: "Installing an extensive network of IoT sensors on every new vehicle to monitor tire pressure, engine temperature, and fuel consumption in real time.",
      cost: 980000,
      benefits: "Improves fuel efficiency by 5%, allows for real-time fleet management",
      etc: 400000,
      roi: "280% over 4 years",
      cpi: 0.95,
      icon: <Eye className="w-6 h-6" />,
      category: "IoT"
    },
    {
      id: 7,
      title: "Virtual Reality (VR) Training Simulator",
      description: "Development of a custom VR training program for new BelAZ operators to practice driving and operating controls in a safe, simulated environment.",
      cost: 620000,
      benefits: "Reduces new operator training time by 50%, improves safety",
      etc: 190000,
      roi: "150% over 2.5 years",
      cpi: 1.10,
      icon: <Target className="w-6 h-6" />,
      category: "Training"
    },
    {
      id: 8,
      title: "Automated Quality Control with Machine Vision",
      description: "Implementation of robotic arms with high-resolution cameras on the assembly line to perform automated visual inspections with precision.",
      cost: 1500000,
      benefits: "Reduces defects by 70%, increases quality control speed by 200%",
      etc: 600000,
      roi: "300% over 3 years",
      cpi: 1.08,
      icon: <Eye className="w-6 h-6" />,
      category: "Quality Control"
    },
    {
      id: 9,
      title: "Enterprise Resource Planning (ERP) System Upgrade",
      description: "Major upgrade to BelAZ's existing ERP system to integrate all departments into a single, cohesive platform for better data visibility.",
      cost: 2500000,
      benefits: "Improves data accuracy, reduces administrative overhead by 20%",
      etc: 1100000,
      roi: "190% over 4 years",
      cpi: 1.01,
      icon: <BarChart3 className="w-6 h-6" />,
      category: "Enterprise Systems"
    },
    {
      id: 10,
      title: "Global Logistics & Tracking Platform",
      description: "New software platform to track the shipment and delivery of BelAZ vehicles and parts to clients worldwide in real-time.",
      cost: 410000,
      benefits: "Increases customer satisfaction, reduces shipping errors by 15%",
      etc: 150000,
      roi: "105% over 2 years",
      cpi: 1.12,
      icon: <Globe className="w-6 h-6" />,
      category: "Logistics"
    },
    {
      id: 11,
      title: "Component Design Optimization AI",
      description: "Licensing of specialized AI software that helps engineers rapidly design and optimize component geometry for maximum strength and minimal weight.",
      cost: 265000,
      benefits: "Reduces component weight by 5%, improves fuel efficiency",
      etc: 95000,
      roi: "160% over 2 years",
      cpi: 1.03,
      icon: <Zap className="w-6 h-6" />,
      category: "AI & Analytics"
    },
    {
      id: 12,
      title: "Big Data Analytics for Sales & Marketing",
      description: "Implementing a big data platform to analyze market trends, customer behavior, and sales data for more targeted marketing campaigns.",
      cost: 350000,
      benefits: "Increases sales leads by 25%, improves sales forecasting accuracy by 30%",
      etc: 105000,
      roi: "220% over 3 years",
      cpi: 1.09,
      icon: <PieChart className="w-6 h-6" />,
      category: "Analytics"
    },
    {
      id: 13,
      title: "Cybersecurity Infrastructure Overhaul",
      description: "Upgrading BelAZ's entire network security, including firewalls, intrusion detection systems, and employee training to protect against cyber threats.",
      cost: 875000,
      benefits: "Reduces risk of data breaches, ensures operational continuity",
      etc: 350000,
      roi: "Risk mitigation - avoids potential losses of millions",
      cpi: 1.00,
      icon: <Lock className="w-6 h-6" />,
      category: "Security"
    },
    {
      id: 14,
      title: "Fleet Management Software for After-Sales Service",
      description: "Development of custom software for BelAZ's global service centers to track maintenance schedules, part inventory, and service history.",
      cost: 550000,
      benefits: "Improves customer service, increases recurring revenue from service contracts",
      etc: 220000,
      roi: "140% over 3 years",
      cpi: 1.15,
      icon: <Wrench className="w-6 h-6" />,
      category: "Service"
    },
    {
      id: 15,
      title: "3D Printing for Prototyping and Tooling",
      description: "Integration of industrial-grade 3D printers into R&D and manufacturing departments for quick creation of functional prototypes and specialized tooling.",
      cost: 400000,
      benefits: "Reduces prototyping time by 75%, lowers costs for custom tooling",
      etc: 160000,
      roi: "190% over 2 years",
      cpi: 1.06,
      icon: <Target className="w-6 h-6" />,
      category: "Manufacturing"
    },
    {
      id: 16,
      title: "Augmented Reality (AR) Assisted Assembly",
      description: "Using AR headsets for technicians to see digital instructions and diagrams overlaid on their real-world view during complex assembly tasks.",
      cost: 670000,
      benefits: "Reduces assembly errors by 60%, shortens assembly time by 10%",
      etc: 250000,
      roi: "270% over 3 years",
      cpi: 1.07,
      icon: <Eye className="w-6 h-6" />,
      category: "Manufacturing"
    },
    {
      id: 17,
      title: "Smart Factory Environmental Monitoring",
      description: "Implementation of sensor networks across the factory floor to monitor energy consumption, air quality, and temperature for optimization.",
      cost: 290000,
      benefits: "Reduces energy consumption by 12%, improves working conditions",
      etc: 100000,
      roi: "115% over 4 years",
      cpi: 1.18,
      icon: <Activity className="w-6 h-6" />,
      category: "Environmental"
    }
  ];

  const categories = ['all', 'AI & Analytics', 'Manufacturing', 'Automation', 'Supply Chain', 'R&D', 'IoT', 'Training', 'Quality Control', 'Enterprise Systems', 'Logistics', 'Analytics', 'Security', 'Service', 'Environmental'];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const totalInvestment = projects.reduce((sum, project) => sum + project.cost, 0);
  const totalETC = projects.reduce((sum, project) => sum + project.etc, 0);
  const avgCPI = projects.reduce((sum, project) => sum + project.cpi, 0) / projects.length;

  // Generate random savings for each project (memoized to keep consistent during re-renders)
  const projectSavings = useMemo(() => {
    return projects.map(project => {
      // Generate random savings between 35-80% for money and 50-85% for time
      const moneySavings = Math.floor(Math.random() * (80 - 35 + 1)) + 35;
      const timeSavings = Math.floor(Math.random() * (85 - 50 + 1)) + 50;
      const savedMoney = project.cost * (moneySavings / 100);
      
      return {
        ...project,
        moneySavings,
        timeSavings,
        savedMoney
      };
    });
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getCPIColor = (cpi: number) => {
    if (cpi > 1.1) return 'text-amber-600 bg-amber-50';
    if (cpi < 1.0) return 'text-emerald-600 bg-emerald-50';
    return 'text-blue-600 bg-blue-50';
  };

  const getCPIIcon = (cpi: number) => {
    if (cpi > 1.1) return <AlertTriangle className="w-4 h-4" />;
    if (cpi < 1.0) return <TrendingDown className="w-4 h-4" />;
    return <CheckCircle className="w-4 h-4" />;
  };

  const totalSavedMoney = projectSavings.reduce((sum, project) => sum + project.savedMoney, 0);
  const avgMoneySavings = projectSavings.reduce((sum, project) => sum + project.moneySavings, 0) / projectSavings.length;
  const avgTimeSavings = projectSavings.reduce((sum, project) => sum + project.timeSavings, 0) / projectSavings.length;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'table':
        return (
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 overflow-hidden hover:shadow-blue-500/10 transition-all duration-500 relative">
            {/* Table background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/2 via-purple-500/2 to-emerald-500/2"></div>
            <div className="overflow-x-auto">
              <table className="w-full relative z-10">
                <thead className="bg-gradient-to-r from-slate-50 via-blue-50/50 to-purple-50/50 border-b border-slate-200/50 backdrop-blur-sm">
                  <tr>
                    <th className="text-left py-6 px-6 font-bold text-slate-800 text-lg">
                      <div className="flex items-center space-x-2">
                        <Rocket className="w-5 h-5 text-blue-600 animate-pulse" />
                        <span>Proyecto</span>
                      </div>
                    </th>
                    <th className="text-left py-6 px-6 font-bold text-slate-800 text-lg">
                      <div className="flex items-center space-x-2">
                        <Target className="w-5 h-5 text-purple-600 animate-spin-slow" />
                        <span>Categoría</span>
                      </div>
                    </th>
                    <th className="text-right py-6 px-6 font-bold text-slate-800 text-lg">
                      <div className="flex items-center justify-end space-x-2">
                        <Diamond className="w-5 h-5 text-emerald-600 animate-bounce" />
                        <span>Inversión</span>
                      </div>
                    </th>
                    <th className="text-center py-6 px-6 font-bold text-slate-800 text-lg">
                      <div className="flex items-center justify-center space-x-2">
                        <DollarSign className="w-5 h-5 text-amber-600 animate-pulse" />
                        <span>Ahorro Dinero</span>
                      </div>
                    </th>
                    <th className="text-center py-6 px-6 font-bold text-slate-800 text-lg">
                      <div className="flex items-center justify-center space-x-2">
                        <Clock className="w-5 h-5 text-indigo-600 animate-spin-slow" />
                        <span>Ahorro Tiempo</span>
                      </div>
                    </th>
                    <th className="text-left py-6 px-6 font-bold text-slate-800 text-lg">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-green-600 animate-bounce" />
                        <span>ROI</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.map((project, index) => (
                    (() => {
                      const projectWithSavings = projectSavings.find(p => p.id === project.id);
                      return (
                    <tr key={project.id} className={`border-b border-slate-100/50 hover:bg-gradient-to-r hover:from-blue-50/80 hover:via-purple-50/50 hover:to-emerald-50/80 transition-all duration-500 transform hover:scale-[1.03] hover:shadow-lg ${index % 2 === 0 ? 'bg-white/80' : 'bg-slate-50/80'} animate-fade-in-stagger group`} style={{animationDelay: `${index * 100}ms`}}>
                      <td className="py-6 px-6">
                        <div className="flex items-center space-x-3">
                          <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 transform">
                            <div className="text-white group-hover:animate-bounce">
                              {project.icon}
                            </div>
                          </div>
                          <div>
                            <p className="font-bold text-slate-800 hover:text-blue-600 transition-colors duration-300 text-lg group-hover:animate-pulse">{project.title}</p>
                            <p className="text-sm text-slate-600 max-w-md truncate group-hover:text-slate-700 transition-colors duration-300">{project.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-6 px-6">
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-full text-sm font-bold shadow-md hover:shadow-lg hover:from-purple-100 hover:to-blue-100 hover:text-purple-700 transition-all duration-300 transform hover:scale-110">
                          {project.category}
                        </span>
                      </td>
                      <td className="py-6 px-6 text-right font-bold text-slate-800 text-lg group-hover:text-emerald-600 transition-colors duration-300">
                        {formatCurrency(project.cost)}
                      </td>
                      <td className="py-6 px-6 text-center">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 hover:from-emerald-200 hover:to-green-200 transition-all duration-300 hover:scale-125 transform shadow-lg hover:shadow-emerald-500/50 group-hover:animate-pulse">
                          <DollarSign className="w-4 h-4 animate-bounce" />
                          <span className="font-bold text-lg">{projectWithSavings?.moneySavings}%</span>
                        </div>
                      </td>
                      <td className="py-6 px-6 text-center">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 hover:from-blue-200 hover:to-indigo-200 transition-all duration-300 hover:scale-125 transform shadow-lg hover:shadow-blue-500/50 group-hover:animate-pulse">
                          <Clock className="w-4 h-4 animate-pulse" />
                          <span className="font-bold text-lg">{projectWithSavings?.timeSavings}%</span>
                        </div>
                      </td>
                      <td className="py-6 px-6 font-bold text-emerald-600 text-lg group-hover:text-emerald-500 transition-colors duration-300 group-hover:animate-pulse">
                        {project.roi}
                      </td>
                    </tr>
                      );
                    })()
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'savings':
        return (
          <div className="space-y-6">
            {/* Savings Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-green-600 text-white p-8 rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-700 transform hover:scale-115 hover:-translate-y-4 hover:rotate-2 group animate-fade-in-stagger relative overflow-hidden">
                {/* Card background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full animate-float-reverse"></div>
                <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 transform">
                    <DollarSign className="w-8 h-8 group-hover:animate-spin" />
                  </div>
                  <div className="text-right">
                    <span className="text-4xl font-bold group-hover:animate-pulse animate-counter">{formatCurrency(totalSavedMoney)}</span>
                    <div className="flex items-center justify-end mt-1">
                      <Sparkles className="w-4 h-4 animate-pulse mr-1" />
                      <span className="text-xs font-bold opacity-90">TOTAL AHORRADO</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-2 group-hover:animate-bounce">Ahorro Total en Dinero</h3>
                <p className="opacity-90 text-lg group-hover:opacity-100 transition-opacity duration-300">Comparado con métodos tradicionales</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-700 transform hover:scale-115 hover:-translate-y-4 hover:rotate-2 group animate-fade-in-stagger relative overflow-hidden" style={{animationDelay: '200ms'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full animate-float-reverse"></div>
                <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 transform">
                    <Award className="w-8 h-8 group-hover:animate-bounce" />
                  </div>
                  <div className="text-right">
                    <span className="text-4xl font-bold group-hover:animate-pulse animate-counter">{avgMoneySavings.toFixed(0)}%</span>
                    <div className="flex items-center justify-end mt-1">
                      <Star className="w-4 h-4 animate-pulse mr-1" />
                      <span className="text-xs font-bold opacity-90">PROMEDIO</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-2 group-hover:animate-bounce">Ahorro Promedio en Costos</h3>
                <p className="opacity-90 text-lg group-hover:opacity-100 transition-opacity duration-300">Reducción de gastos operativos</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 text-white p-8 rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-700 transform hover:scale-115 hover:-translate-y-4 hover:rotate-2 group animate-fade-in-stagger relative overflow-hidden" style={{animationDelay: '400ms'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full animate-float-reverse"></div>
                <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 transform">
                    <Rocket className="w-8 h-8 group-hover:animate-pulse" />
                  </div>
                  <div className="text-right">
                    <span className="text-4xl font-bold group-hover:animate-pulse animate-counter">{avgTimeSavings.toFixed(0)}%</span>
                    <div className="flex items-center justify-end mt-1">
                      <Zap className="w-4 h-4 animate-pulse mr-1" />
                      <span className="text-xs font-bold opacity-90">VELOCIDAD</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-2 group-hover:animate-bounce">Ahorro Promedio en Tiempo</h3>
                <p className="opacity-90 text-lg group-hover:opacity-100 transition-opacity duration-300">Aceleración de implementación</p>
                </div>
              </div>
            </div>

            {/* Savings Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {projectSavings.filter(project => 
                selectedCategory === 'all' || project.category === selectedCategory
              ).map((project) => (
                <div key={project.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-700 overflow-hidden transform hover:scale-110 hover:-translate-y-4 hover:rotate-1 group animate-fade-in-stagger relative" style={{animationDelay: `${project.id * 100}ms`}}>
                  {/* Card background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="p-8 relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-4 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl shadow-lg group-hover:shadow-emerald-500/50 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 transform">
                        <div className="text-white group-hover:animate-bounce">
                          {project.icon}
                        </div>
                      </div>
                      <span className="text-xs font-bold px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-full group-hover:from-emerald-100 group-hover:to-blue-100 group-hover:text-emerald-700 transition-all duration-300 transform hover:scale-110 shadow-md">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-800 text-xl mb-6 leading-tight group-hover:text-emerald-600 transition-colors duration-300 group-hover:animate-pulse">
                      {project.title}
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-200/50 hover:from-emerald-100 hover:to-green-100 transition-all duration-500 hover:scale-110 transform shadow-lg hover:shadow-emerald-500/30 relative overflow-hidden group/savings">
                        <div className="absolute top-0 right-0 w-12 h-12 bg-emerald-200/30 rounded-full animate-ping"></div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <DollarSign className="w-5 h-5 text-emerald-600 animate-bounce" />
                            <span className="text-sm font-bold text-emerald-700">Ahorro en Dinero</span>
                          </div>
                          <span className="font-bold text-3xl text-emerald-600 animate-counter group-hover/savings:animate-pulse">{project.moneySavings}%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-emerald-700 font-semibold">Cantidad ahorrada:</span>
                          <span className="font-bold text-emerald-800 text-lg">{formatCurrency(project.savedMoney)}</span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200/50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-500 hover:scale-110 transform shadow-lg hover:shadow-blue-500/30 relative overflow-hidden group/time">
                        <div className="absolute top-0 right-0 w-12 h-12 bg-blue-200/30 rounded-full animate-ping"></div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-5 h-5 text-blue-600 animate-pulse" />
                            <span className="text-sm font-bold text-blue-700">Ahorro en Tiempo</span>
                          </div>
                          <span className="font-bold text-3xl text-blue-600 animate-counter group-hover/time:animate-pulse">{project.timeSavings}%</span>
                        </div>
                        <p className="text-sm text-blue-700 font-semibold">Implementación acelerada vs. métodos tradicionales</p>
                      </div>

                      <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-6 rounded-xl hover:from-slate-100 hover:to-gray-100 transition-all duration-500 shadow-lg hover:shadow-slate-500/20 hover:scale-105 transform">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600 font-semibold">Costo Original:</span>
                          <span className="font-bold text-slate-800">{formatCurrency(project.cost)}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm mt-1">
                          <span className="text-slate-600 font-semibold">Costo con Montclaire:</span>
                          <span className="font-bold text-emerald-600">{formatCurrency(project.cost - project.savedMoney)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default: // cards view
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 overflow-hidden transform hover:scale-110 hover:-translate-y-4 hover:rotate-1 group animate-fade-in-stagger relative" style={{animationDelay: `${project.id * 100}ms`}}>
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-8 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 transform">
                      <div className="text-white group-hover:animate-bounce">
                        {project.icon}
                      </div>
                    </div>
                    <span className="text-xs font-bold px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-full group-hover:from-blue-100 group-hover:to-purple-100 group-hover:text-blue-700 transition-all duration-300 transform hover:scale-110 shadow-md">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-800 text-xl mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300 group-hover:animate-pulse">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-8 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Diamond className="w-4 h-4 text-slate-500 animate-pulse" />
                        <span className="text-sm font-bold text-slate-600">Inversión</span>
                      </div>
                      <span className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 text-lg">{formatCurrency(project.cost)}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-slate-500 animate-spin-slow" />
                        <span className="text-sm font-bold text-slate-600">ETC</span>
                      </div>
                      <span className="font-bold text-slate-800 text-lg">{formatCurrency(project.etc)}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-slate-500 animate-bounce" />
                        <span className="text-sm font-bold text-slate-600">ROI</span>
                      </div>
                      <span className="font-bold text-emerald-600 text-lg group-hover:animate-pulse">{project.roi}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <BarChart3 className="w-4 h-4 text-slate-500 animate-pulse" />
                        <span className="text-sm font-bold text-slate-600">CPI</span>
                      </div>
                      <div className={`flex items-center space-x-2 px-3 py-1 rounded-full ${getCPIColor(project.cpi)}`}>
                        {getCPIIcon(project.cpi)}
                        <span className="font-bold text-lg">{project.cpi}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-500 shadow-inner hover:shadow-lg transform hover:scale-105">
                    <div className="flex items-center space-x-2 mb-3">
                      <Award className="w-4 h-4 text-blue-600 animate-pulse" />
                      <p className="text-sm text-slate-700 font-bold">Beneficios Clave:</p>
                    </div>
                    <p className="text-sm text-slate-700 group-hover:text-blue-700 transition-colors duration-300 leading-relaxed">{project.benefits}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full animate-float blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full animate-float-reverse blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-400/5 to-purple-400/5 rounded-full animate-pulse-slow blur-3xl"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400/30 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-emerald-400/30 rounded-full animate-ping delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-amber-400/30 rounded-full animate-ping delay-3000"></div>
      </div>
      
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl shadow-xl border-b border-slate-200/50 relative z-10">
        {/* Header gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-emerald-600/5"></div>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center text-slate-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:-translate-x-1 group"
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Volver
              </button>
              <div className="h-6 w-px bg-gradient-to-b from-blue-400 to-purple-400 animate-pulse"></div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg animate-pulse-slow">
                  <BarChart3 className="w-6 h-6 text-white animate-bounce" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent animate-gradient-shift">Dashboard BelAZ</h1>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-blue-100 px-4 py-2 rounded-full animate-pulse-slow">
                <Star className="w-4 h-4 text-emerald-600 animate-spin-slow" />
                <span className="text-sm font-semibold text-slate-700">Caso de Estudio</span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full">
                <Crown className="w-4 h-4 text-purple-600 animate-bounce" />
                <span className="text-sm font-semibold text-slate-700">Montclaire</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-110 hover:-translate-y-4 hover:rotate-1 group animate-fade-in-stagger relative overflow-hidden">
            {/* Card background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 transform">
                <BarChart3 className="w-6 h-6 text-white group-hover:animate-bounce" />
              </div>
              <div className="text-right">
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:animate-pulse animate-counter">{projects.length}</span>
                <div className="flex items-center justify-end mt-1">
                  <Sparkles className="w-4 h-4 text-blue-500 animate-pulse mr-1" />
                  <span className="text-xs font-semibold text-blue-600 animate-bounce">ACTIVOS</span>
                </div>
              </div>
            </div>
            <h3 className="font-bold text-slate-800 mb-2 text-lg group-hover:text-blue-600 transition-colors duration-300">Proyectos Activos</h3>
            <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">Portfolio completo en ejecución</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 transform hover:scale-110 hover:-translate-y-4 hover:rotate-1 group animate-fade-in-stagger relative overflow-hidden" style={{animationDelay: '200ms'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-lg group-hover:shadow-emerald-500/50 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 transform">
                <DollarSign className="w-6 h-6 text-white group-hover:animate-spin" />
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent group-hover:animate-pulse">{formatCurrency(totalInvestment)}</span>
                <div className="flex items-center justify-end mt-1">
                  <Diamond className="w-4 h-4 text-emerald-500 animate-pulse mr-1" />
                  <span className="text-xs font-semibold text-emerald-600 animate-bounce">TOTAL</span>
                </div>
              </div>
            </div>
            <h3 className="font-bold text-slate-800 mb-2 text-lg group-hover:text-emerald-600 transition-colors duration-300">Inversión Total</h3>
            <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">Presupuesto estratégico asignado</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/50 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 transform hover:scale-110 hover:-translate-y-4 hover:rotate-1 group animate-fade-in-stagger relative overflow-hidden" style={{animationDelay: '400ms'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-4 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl shadow-lg group-hover:shadow-amber-500/50 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 transform">
                <Flame className="w-6 h-6 text-white group-hover:animate-bounce" />
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent group-hover:animate-pulse">{formatCurrency(totalSavedMoney)}</span>
                <div className="flex items-center justify-end mt-1">
                  <Award className="w-4 h-4 text-amber-500 animate-pulse mr-1" />
                  <span className="text-xs font-semibold text-amber-600 animate-bounce">AHORRADO</span>
                </div>
              </div>
            </div>
            <h3 className="font-bold text-slate-800 mb-2 text-lg group-hover:text-amber-600 transition-colors duration-300">Ahorro Total en Costos</h3>
            <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">vs. métodos tradicionales</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-110 hover:-translate-y-4 hover:rotate-1 group animate-fade-in-stagger relative overflow-hidden" style={{animationDelay: '600ms'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-indigo-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 transform">
                <Rocket className="w-6 h-6 text-white group-hover:animate-pulse" />
              </div>
              <div className="text-right">
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent group-hover:animate-pulse animate-counter">{avgTimeSavings.toFixed(0)}%</span>
                <div className="flex items-center justify-end mt-1">
                  <Zap className="w-4 h-4 text-purple-500 animate-pulse mr-1" />
                  <span className="text-xs font-semibold text-purple-600 animate-bounce">VELOCIDAD</span>
                </div>
              </div>
            </div>
            <h3 className="font-bold text-slate-800 mb-2 text-lg group-hover:text-purple-600 transition-colors duration-300">Ahorro Promedio en Tiempo</h3>
            <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">Aceleración de implementación</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-slate-200/50 mb-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 animate-fade-in-up relative overflow-hidden">
          {/* Tab navigation background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 via-purple-500/3 to-emerald-500/3"></div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg animate-pulse-slow">
                <Hexagon className="w-6 h-6 text-white animate-spin-slow" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-xl">Vista del Portfolio</h3>
                <p className="text-sm text-slate-600">Explora los proyectos de diferentes formas</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setActiveTab('cards')}
                className={`flex items-center px-6 py-3 rounded-xl text-sm font-bold transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-lg ${
                  activeTab === 'cards'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-blue-500/50 animate-pulse-slow'
                    : 'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 hover:from-blue-100 hover:to-blue-200 hover:text-blue-700 hover:shadow-blue-500/20'
                }`}
              >
                <Grid3X3 className="w-5 h-5 mr-2 animate-pulse" />
                Tarjetas
              </button>
              <button
                onClick={() => setActiveTab('table')}
                className={`flex items-center px-6 py-3 rounded-xl text-sm font-bold transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-lg ${
                  activeTab === 'table'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-blue-500/50 animate-pulse-slow'
                    : 'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 hover:from-emerald-100 hover:to-emerald-200 hover:text-emerald-700 hover:shadow-emerald-500/20'
                }`}
              >
                <Table className="w-5 h-5 mr-2 animate-bounce" />
                Tabla
              </button>
              <button
                onClick={() => setActiveTab('savings')}
                className={`flex items-center px-6 py-3 rounded-xl text-sm font-bold transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-lg ${
                  activeTab === 'savings'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-blue-500/50 animate-pulse-slow'
                    : 'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 hover:from-amber-100 hover:to-amber-200 hover:text-amber-700 hover:shadow-amber-500/20'
                }`}
              >
                <SavingsIcon className="w-5 h-5 mr-2 animate-pulse" />
                Ahorros
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter - Only show for cards and table views */}
        {activeTab !== 'savings' && (
          <div className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-slate-200/50 mb-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 animate-fade-in-up relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/3 via-blue-500/3 to-emerald-500/3"></div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-lg animate-pulse-slow">
                <Target className="w-6 h-6 text-white animate-spin-slow" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-xl">Filtrar por Categoría</h3>
                <p className="text-sm text-slate-600">Explora proyectos por área de especialización</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-lg ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-purple-500/50 animate-pulse-slow'
                      : 'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 hover:from-purple-100 hover:to-indigo-100 hover:text-purple-700 hover:shadow-purple-500/20'
                  }`}
                >
                  {category === 'all' ? 'Todos los Proyectos' : category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Category Filter for Savings View */}
        {activeTab === 'savings' && (
          <div className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-slate-200/50 mb-8 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 animate-fade-in-up relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/3 via-blue-500/3 to-purple-500/3"></div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl shadow-lg animate-pulse-slow">
                <DollarSign className="w-6 h-6 text-white animate-spin-slow" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-xl">Filtrar Ahorros por Categoría</h3>
                <p className="text-sm text-slate-600">Analiza el impacto económico por área</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-lg ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-emerald-500/50 animate-pulse-slow'
                      : 'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 hover:from-emerald-100 hover:to-blue-100 hover:text-emerald-700 hover:shadow-emerald-500/20'
                  }`}
                >
                  {category === 'all' ? 'Todos los Proyectos' : category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content */}
        {renderTabContent()}

        {/* Summary Section */}
        <div className="mt-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white p-12 rounded-3xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up relative overflow-hidden group">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full animate-float group-hover:animate-bounce"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full animate-float-reverse group-hover:animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/10 rounded-full animate-pulse-slow"></div>
            
            {/* Floating sparkles */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white rounded-full animate-ping delay-1000"></div>
            <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-ping delay-2000"></div>
          </div>
          <div className="text-center relative z-10">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Crown className="w-8 h-8 text-yellow-300 animate-bounce" />
              <h3 className="text-3xl md:text-4xl font-bold animate-fade-in">Resumen del Portfolio BelAZ</h3>
              <Crown className="w-8 h-8 text-yellow-300 animate-bounce delay-500" />
            </div>
            <p className="text-xl opacity-90 mb-12 max-w-4xl mx-auto animate-fade-in-delay leading-relaxed">
              Un enfoque integral de transformación digital que abarca desde IA predictiva hasta automatización completa, 
              diseñado para maximizar la eficiencia operacional y el retorno de inversión.
            </p>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center group cursor-pointer">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2 shadow-xl hover:shadow-2xl">
                  <div className="text-5xl font-bold text-blue-200 mb-4 group-hover:text-white transition-colors duration-500 transform group-hover:scale-125 animate-counter">17</div>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Rocket className="w-5 h-5 text-blue-300 group-hover:animate-bounce" />
                    <p className="text-xl font-bold group-hover:text-blue-200 transition-colors duration-300">Proyectos Estratégicos</p>
                  </div>
                  <p className="text-blue-200 opacity-80 group-hover:opacity-100 transition-opacity duration-300">Transformación completa</p>
                </div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2 shadow-xl hover:shadow-2xl">
                  <div className="text-4xl font-bold text-blue-200 mb-4 group-hover:text-white transition-colors duration-500 transform group-hover:scale-125">{formatCurrency(totalInvestment)}</div>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Diamond className="w-5 h-5 text-emerald-300 group-hover:animate-spin" />
                    <p className="text-xl font-bold group-hover:text-blue-200 transition-colors duration-300">Inversión Total</p>
                  </div>
                  <p className="text-blue-200 opacity-80 group-hover:opacity-100 transition-opacity duration-300">Capital estratégico</p>
                </div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2 shadow-xl hover:shadow-2xl">
                  <div className="text-5xl font-bold text-blue-200 mb-4 group-hover:text-white transition-colors duration-500 transform group-hover:scale-125 animate-counter">{avgTimeSavings.toFixed(0)}%</div>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Zap className="w-5 h-5 text-purple-300 group-hover:animate-pulse" />
                    <p className="text-xl font-bold group-hover:text-blue-200 transition-colors duration-300">Ahorro en Tiempo</p>
                  </div>
                  <p className="text-blue-200 opacity-80 group-hover:opacity-100 transition-opacity duration-300">Aceleración promedio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}