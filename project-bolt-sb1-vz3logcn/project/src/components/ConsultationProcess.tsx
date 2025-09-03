import React, { useState } from 'react';
import { ArrowLeft, Target, Search, Vibrate as Strategy, Users, CheckCircle, Zap, BarChart3, Shield, Clock, Award, ArrowRight } from 'lucide-react';

interface ConsultationProcessProps {
  onBack: () => void;
}

export function ConsultationProcess({ onBack }: ConsultationProcessProps) {
  const [revealedSteps, setRevealedSteps] = useState<number[]>([]);
  const [showAllSteps, setShowAllSteps] = useState(false);

  const handleRevealStep = (stepNumber: number) => {
    if (!revealedSteps.includes(stepNumber)) {
      setRevealedSteps([...revealedSteps, stepNumber]);
    }
  };

  const handleRevealAll = () => {
    setShowAllSteps(true);
    setRevealedSteps([1, 2, 3, 4, 5]);
  };

  const steps = [
    {
      number: 1,
      title: "Demostración en tiempo real",
      subtitle: "Iniciando el Impact Loop",
      description: "El ciclo comienza con una demostración práctica, donde replicamos en tiempo real una de tus aplicaciones o procesos complejos de proyectos costosos. Esto nos permite visualizar de inmediato cómo la IA puede optimizar operaciones, reducir costos y acelerar resultados, sentando la base para decisiones estratégicas informadas.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      number: 2,
      title: "Auditoría exhaustiva",
      subtitle: "Validando el Loop",
      description: "El siguiente paso del Impact Loop™ es la auditoría. Analizamos hasta 15 contratos, estados de proyectos y licenciamiento tecnológico, evaluando riesgos, oportunidades y alineación con tus objetivos estratégicos. Esta fase asegura que todas las acciones posteriores estén basadas en datos precisos y un entendimiento profundo de tu ecosistema tecnológico.",
      icon: <Search className="w-8 h-8" />,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600"
    },
    {
      number: 3,
      title: "Estrategia personalizada",
      subtitle: "Diseñando el Loop",
      description: "Con la información obtenida, construimos una estrategia integral de adopción de IA, priorizando iniciativas de alto impacto. Aquí definimos roadmaps claros, integrando tecnología, procesos y talento, de modo que la transformación digital no sea solo posible, sino medible y rentable.",
      icon: <Strategy className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      number: 4,
      title: "Formación de la Célula SWAT",
      subtitle: "Activando el Loop",
      description: "Para ejecutar la estrategia, formamos una Célula SWAT de IA, un equipo especializado que lidera la implementación interna de las soluciones. Esta célula actúa como motor del Impact Loop™, asegurando que cada iniciativa estratégica se traduzca en resultados concretos y sostenibles.",
      icon: <Users className="w-8 h-8" />,
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600"
    },
    {
      number: 5,
      title: "Acompañamiento en la implementación",
      subtitle: "Cerrando el Loop",
      description: "Finalmente, Montclaire acompaña cada fase de la implementación, supervisando avances, ajustando estrategias y capacitando al personal. Así, el Impact Loop™ se completa, transformando la adopción de IA en un ciclo continuo de mejora, eficiencia y ventaja competitiva.",
      icon: <Target className="w-8 h-8" />,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center text-slate-600 hover:text-slate-800 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Volver
              </button>
              <div className="h-6 w-px bg-slate-300"></div>
              <h1 className="text-2xl font-bold text-slate-800">Proceso de Consultoría</h1>
            </div>
            <div className="text-sm text-slate-500">
              Montclaire Impact Loop™
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900 text-white py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-purple-400 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400 rounded-full animate-float-reverse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400 rounded-full animate-pulse-slow opacity-30"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-bounce">
            <Award className="w-4 h-4 mr-2" />
            METODOLOGÍA EXCLUSIVA
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 animate-fade-in">
            Montclaire Impact Loop™
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-8 animate-fade-in-delay">
            La primera consultoría estratégica en IA
          </p>
          <div className="bg-blue-800/50 p-10 rounded-2xl backdrop-blur-sm max-w-5xl mx-auto hover:bg-blue-700/50 transition-all duration-500 transform hover:scale-105 shadow-2xl animate-fade-in-up">
            <p className="text-lg leading-relaxed">
              En Montclaire, creemos que la inteligencia artificial no es solo tecnología: es un motor de transformación estratégica. 
              Nuestra metodología exclusiva, Montclaire Impact Loop™, está diseñada para generar un ciclo continuo de identificación 
              de oportunidades, auditoría precisa, estrategia efectiva y ejecución de alto impacto, asegurando que cada inversión 
              tecnológica se traduzca en resultados tangibles y sostenibles.
            </p>
          </div>
          
          {/* Interactive reveal button */}
          <div className="mt-12">
            <button
              onClick={handleRevealAll}
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-10 py-4 rounded-2xl text-lg font-bold hover:from-purple-600 hover:to-indigo-700 transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-purple-500/25 inline-flex items-center group"
            >
              <Zap className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              Revelar Proceso Completo
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        {!showAllSteps && (
          <div className="text-center mb-12">
            <p className="text-xl text-slate-600 mb-8">
              Haz clic en cada paso para descubrir la metodología completa
            </p>
          </div>
        )}
        
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={`relative transition-all duration-1000 ${
                showAllSteps || revealedSteps.includes(step.number) 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-30 transform translate-y-8 cursor-pointer hover:opacity-60'
              }`}
              onClick={() => !showAllSteps && handleRevealStep(step.number)}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (showAllSteps || revealedSteps.includes(step.number + 1)) && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-16 w-1 bg-gradient-to-b from-purple-400 to-transparent z-0 animate-fade-in"></div>
              )}
              
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className={`bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                    showAllSteps || revealedSteps.includes(step.number) ? 'animate-slide-in-left' : ''
                  }`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-4 ${step.bgColor} rounded-xl hover:scale-110 transition-transform duration-300`}>
                        <div className={step.textColor}>
                          {step.icon}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-sm font-bold text-slate-500 animate-pulse">PASO {step.number}</span>
                          <ArrowRight className="w-4 h-4 text-slate-400 animate-bounce" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">{step.title}</h3>
                        <p className="text-lg font-semibold text-slate-600">{step.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Visual Element */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className={`bg-gradient-to-br ${step.color} p-12 rounded-2xl text-white text-center shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 ${
                    showAllSteps || revealedSteps.includes(step.number) ? 'animate-slide-in-right' : ''
                  }`}>
                    <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-12">
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    <div className="text-6xl font-bold mb-4 opacity-90 hover:opacity-100 transition-opacity duration-300 animate-counter">
                      {step.number}
                    </div>
                    <h4 className="text-2xl font-bold mb-2">{step.title}</h4>
                    <p className="text-lg opacity-90">{step.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-20 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white rounded-full animate-ping delay-1000"></div>
          <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-white rounded-full animate-ping delay-2000"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 animate-fade-in">
              ¿Por qué el Impact Loop™ funciona?
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto animate-fade-in-delay">
              Nuestra metodología garantiza resultados porque cada paso está diseñado para maximizar el impacto y minimizar el riesgo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="bg-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 shadow-2xl animate-fade-in-stagger">
                <BarChart3 className="w-10 h-10 group-hover:animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-200 transition-colors duration-300">Resultados Medibles</h3>
              <p className="opacity-90 text-lg leading-relaxed group-hover:opacity-100 transition-opacity duration-300">
                Cada fase del loop genera métricas concretas y KPIs verificables
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 shadow-2xl animate-fade-in-stagger" style={{animationDelay: '200ms'}}>
                <Shield className="w-10 h-10 group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-200 transition-colors duration-300">Riesgo Controlado</h3>
              <p className="opacity-90 text-lg leading-relaxed group-hover:opacity-100 transition-opacity duration-300">
                Validación continua en cada paso minimiza la incertidumbre
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 shadow-2xl animate-fade-in-stagger" style={{animationDelay: '400ms'}}>
                <Clock className="w-10 h-10 group-hover:animate-spin" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-200 transition-colors duration-300">Implementación Rápida</h3>
              <p className="opacity-90 text-lg leading-relaxed group-hover:opacity-100 transition-opacity duration-300">
                Metodología probada que acelera la adopción de IA
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="bg-white py-20 relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400 rounded-full animate-float-reverse"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 animate-fade-in">
              Resultados del Impact Loop™
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in-delay">
              Métricas reales de empresas que han completado nuestro proceso de consultoría
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 group animate-fade-in-stagger">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300 animate-counter">80%</div>
              <p className="font-semibold text-slate-700 mb-1">Reducción de Costos</p>
              <p className="text-sm text-slate-500">En licenciamiento y consultoría</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 group animate-fade-in-stagger" style={{animationDelay: '200ms'}}>
              <div className="text-4xl font-bold text-emerald-600 mb-2 group-hover:text-emerald-700 transition-colors duration-300 animate-counter">65%</div>
              <p className="font-semibold text-slate-700 mb-1">Ahorro en Tiempo</p>
              <p className="text-sm text-slate-500">De implementación promedio</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 group animate-fade-in-stagger" style={{animationDelay: '400ms'}}>
              <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:text-purple-700 transition-colors duration-300 animate-counter">100%</div>
              <p className="font-semibold text-slate-700 mb-1">Éxito en Proyectos</p>
              <p className="text-sm text-slate-500">Completados con Impact Loop™</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 group animate-fade-in-stagger" style={{animationDelay: '600ms'}}>
              <div className="text-4xl font-bold text-amber-600 mb-2 group-hover:text-amber-700 transition-colors duration-300 animate-counter">4</div>
              <p className="font-semibold text-slate-700 mb-1">Semanas Promedio</p>
              <p className="text-sm text-slate-500">Para ver primeros resultados</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-900 text-white py-24 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform skew-x-12 animate-slide-diagonal"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 animate-fade-in">
            Inicia tu Impact Loop™ hoy
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay">
            Agenda una demostración gratuita y descubre cómo el Montclaire Impact Loop™ 
            puede transformar tu estrategia tecnológica en resultados tangibles.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-8 animate-fade-in">En tu primera sesión obtendrás:</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
              {[
                "Demostración en vivo de IA aplicada a tu industria",
                "Análisis preliminar de oportunidades de ahorro",
                "Roadmap estratégico personalizado sin compromiso",
                "Evaluación de tu portfolio tecnológico actual"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 animate-fade-in-stagger hover:bg-white/5 p-4 rounded-lg transition-all duration-300" style={{animationDelay: `${index * 200}ms`}}>
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0 animate-pulse" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-12 py-6 rounded-xl text-xl font-bold hover:from-blue-600 hover:to-blue-700 transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-blue-500/50 animate-pulse-slow group">
            <span className="group-hover:animate-bounce inline-block">INICIAR IMPACT LOOP™ GRATUITO</span>
          </button>

          <p className="text-sm opacity-75 mt-6 animate-fade-in-delay">
            Sin compromisos • Completamente gratuita • Resultados garantizados
          </p>
        </div>
      </div>
    </div>
  );
}