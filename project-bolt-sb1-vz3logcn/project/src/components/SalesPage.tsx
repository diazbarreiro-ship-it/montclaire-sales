import React from 'react';
import { AlertTriangle, CheckCircle, TrendingDown, TrendingUp, Users, Clock, DollarSign, Shield, Target, Award, Zap, ExternalLink, BarChart3, Sparkles, Rocket, Star } from 'lucide-react';

interface SalesPageProps {
  onNavigateToDashboard: () => void;
  onNavigateToConsultation: () => void;
}

export function SalesPage({ onNavigateToDashboard, onNavigateToConsultation }: SalesPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-green-400 rounded-full animate-ping delay-2000"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-bounce">
              <Target className="w-4 h-4 mr-2" />
              PARA GERENTES Y DIRECTORES DE TECNOLOGÍA
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 animate-fade-in">
              ¿Cuánto dinero les están <span className="text-blue-400">robando</span> las empresas de software?
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay">
              Descubre cómo Montclaire ha ayudado a 4 empresas a reducir hasta el 80% sus costos de licenciamiento y consultoría.
            </p>
          </div>
        </div>
      </div>

      {/* Montclaire Process CTA Banner - More Prominent */}
      <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 text-white py-12 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold mb-6 animate-bounce">
              <Sparkles className="w-4 h-4 mr-2" />
              METODOLOGÍA EXCLUSIVA
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Descubre el Montclaire Impact Loop™
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
              La primera consultoría estratégica en IA que garantiza resultados medibles en cada paso
            </p>
            <button
              onClick={onNavigateToConsultation}
              className="bg-white text-purple-700 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-purple-50 transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-purple-500/25 inline-flex items-center group"
            >
              <Rocket className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              Explorar Metodología Impact Loop™
              <Star className="w-5 h-5 ml-3 group-hover:animate-spin" />
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard CTA Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-10 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-slide-right"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2 animate-fade-in">Explora el Caso de Estudio BelAZ</h3>
              <p className="text-xl opacity-90 animate-fade-in-delay">
                Descubre cómo transformamos 17 proyectos críticos con ahorros de hasta 80%
              </p>
            </div>
            <button
              onClick={onNavigateToDashboard}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-blue-500/25 flex items-center group animate-pulse-slow"
            >
              <BarChart3 className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              Ver Dashboard BelAZ
            </button>
          </div>
        </div>
      </div>

      {/* Problem Identification */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">
            ¿Te suena familiar?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Estos son los problemas más comunes que enfrentan los líderes de tecnología
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            {[
              "Te venden la idea de que su software \"automatizará todo\"...",
              "Te prometen resultados \"rápidos y geniales\"...",
              "Pasa un año (o más) y tu proyecto sigue sin funcionar.",
              "No se adapta a tus reglas de negocio."
            ].map((problem, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-slate-50 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-stagger" style={{animationDelay: `${index * 200}ms`}}>
                <AlertTriangle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0 animate-pulse" />
                <p className="text-slate-700 text-lg leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-right">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">El resultado final:</h3>
            <div className="space-y-5">
              <div className="flex items-center text-slate-700 hover:text-slate-900 transition-colors duration-300">
                <Clock className="w-6 h-6 text-blue-600 mr-4 animate-spin-slow" />
                <span className="text-lg">Proyectos que nunca terminan</span>
              </div>
              <div className="flex items-center text-slate-700 hover:text-slate-900 transition-colors duration-300">
                <DollarSign className="w-6 h-6 text-blue-600 mr-4 animate-bounce" />
                <span className="text-lg">Sobrecostos descontrolados</span>
              </div>
              <div className="flex items-center text-slate-700 hover:text-slate-900 transition-colors duration-300">
                <Users className="w-6 h-6 text-blue-600 mr-4 animate-pulse" />
                <span className="text-lg">Consultores que trabajan en mil proyectos</span>
              </div>
            </div>
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200 animate-fade-in-delay hover:bg-blue-100 transition-colors duration-300">
              <p className="text-blue-800 font-semibold text-lg italic">
                "Eso no estaba en el alcance, hay que hacer un change request"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Revolution */}
      {/* Strategy Problem Section */}
      <div className="bg-white py-20 relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400 rounded-full animate-float-reverse"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-bounce">
              <AlertTriangle className="w-4 h-4 mr-2" />
              LA VERDADERA CAUSA DEL PROBLEMA
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-8 animate-fade-in">
              El problema no es la <span className="text-blue-600">tecnología</span>, sino la <span className="text-amber-600">estrategia</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay">
              Hoy, la IA está disponible para todos, y muchas organizaciones ya cuentan con herramientas avanzadas, 
              plataformas de análisis y soluciones de automatización.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8 animate-fade-in-left">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-200 hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-amber-100 rounded-xl mr-4 group-hover:bg-amber-200 transition-colors duration-300 group-hover:scale-110 transform">
                    <AlertTriangle className="w-8 h-8 text-amber-600 group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors duration-300">El Verdadero Desafío</h3>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                  Sin embargo, el verdadero desafío no es la falta de tecnología: es que los esfuerzos dentro 
                  de las empresas están <span className="font-bold text-amber-600">fragmentados</span>.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl border border-red-200 hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-red-100 rounded-xl mr-4 group-hover:bg-red-200 transition-colors duration-300 group-hover:scale-110 transform">
                    <Users className="w-8 h-8 text-red-600 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 group-hover:text-red-600 transition-colors duration-300">Esfuerzos Aislados</h3>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                  Cada célula de trabajo, cada persona o área, suele intentar automatizar tareas para ahorrar trabajo 
                  a nivel individual o de departamento, pero no hay una <span className="font-bold text-red-600">estrategia organizacional unificada</span>.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-slate-100 rounded-xl mr-4 group-hover:bg-slate-200 transition-colors duration-300 group-hover:scale-110 transform">
                    <TrendingDown className="w-8 h-8 text-slate-600 group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 group-hover:text-slate-600 transition-colors duration-300">El Resultado</h3>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                  Esto genera redundancia, esfuerzos aislados, y un desperdicio de recursos que impide que la IA 
                  se convierta en un <span className="font-bold text-slate-600">motor de ventaja competitiva real</span>.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-12 rounded-2xl text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 animate-fade-in-right relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full animate-float"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full animate-float-reverse"></div>
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-12">
                  <Target className="w-10 h-10 text-white animate-pulse" />
                </div>
                <h3 className="text-3xl font-bold text-center mb-8 animate-fade-in">La Solución Montclaire</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 hover:bg-white/10 p-4 rounded-lg transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-blue-300 mt-1 flex-shrink-0 animate-pulse" />
                    <p className="text-lg leading-relaxed">Alineamos esfuerzos organizacionales</p>
                  </div>
                  <div className="flex items-start space-x-4 hover:bg-white/10 p-4 rounded-lg transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-blue-300 mt-1 flex-shrink-0 animate-pulse" />
                    <p className="text-lg leading-relaxed">Coordinamos iniciativas de IA</p>
                  </div>
                  <div className="flex items-start space-x-4 hover:bg-white/10 p-4 rounded-lg transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-blue-300 mt-1 flex-shrink-0 animate-pulse" />
                    <p className="text-lg leading-relaxed">Diseñamos estrategias unificadas</p>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 transform">
                  <p className="text-center text-xl font-bold animate-pulse-slow">
                    Resultados globales medibles y sostenibles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Revolution */}
      <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-40 h-40 bg-blue-400 rounded-full animate-float"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-400 rounded-full animate-float-reverse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-400 rounded-full animate-pulse-slow opacity-30"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-900 px-8 py-4 rounded-full font-bold text-lg mb-8 animate-bounce hover:animate-pulse transition-all duration-300">
              <Zap className="w-5 h-5 inline mr-2 animate-pulse" />
              LA REVOLUCIÓN TECNOLÓGICA
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight animate-fade-in">
              La Inteligencia Artificial cambió las reglas del juego
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto animate-fade-in-delay">
              Pero las grandes empresas de software y las consultorías NO quieren que lo sepas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <div className="text-center group">
              <div className="bg-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 shadow-xl">
                <TrendingDown className="w-10 h-10 group-hover:animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors duration-300">80% Menos Costos</h3>
              <p className="opacity-90 text-lg leading-relaxed group-hover:opacity-100 transition-opacity duration-300">
                Con IA estratégica vs. consultorías tradicionales
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 shadow-xl">
                <Clock className="w-10 h-10 group-hover:animate-spin" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors duration-300">Semanas, no Años</h3>
              <p className="opacity-90 text-lg leading-relaxed group-hover:opacity-100 transition-opacity duration-300">
                Implementación acelerada con IA
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 shadow-xl">
                <Shield className="w-10 h-10 group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors duration-300">Sin Dependencias</h3>
              <p className="opacity-90 text-lg leading-relaxed group-hover:opacity-100 transition-opacity duration-300">
                Control total de tu tecnología
              </p>
            </div>
          </div>

          <div className="bg-blue-800/50 p-10 rounded-2xl backdrop-blur-sm hover:bg-blue-700/50 transition-all duration-500 transform hover:scale-105 shadow-2xl">
            <p className="text-center text-xl font-semibold leading-relaxed">
              Corporativos en mercados de alto riesgo ya lograron migrar sistemas críticos en semanas, 
              sin consultorías externas, reduciendo sus costos hasta en 80%.
            </p>
          </div>
        </div>
      </div>

      {/* The Uncomfortable Truth */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-8">
            La verdad incómoda
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Estas son las realidades que las consultorías tradicionales no quieren que sepas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            "Ninguna Big Four tiene el conocimiento técnico para hacer esta transformación.",
            "Ninguna consultoría tradicional te dará un mapa real de cómo ahorrar.",
            "Actualmente tu empresa no tiene una estrategia real de implementación de inteligencia artificial."
          ].map((truth, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:bg-white group animate-fade-in-stagger" style={{animationDelay: `${index * 300}ms`}}>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-all duration-300 group-hover:scale-110">
                <AlertTriangle className="w-6 h-6 text-blue-600 group-hover:animate-pulse" />
              </div>
              <p className="text-slate-700 font-medium text-lg leading-relaxed group-hover:text-slate-900 transition-colors duration-300">{truth}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-10 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 animate-fade-in-up">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">En Montclaire somos diferentes:</h3>
            <p className="text-xl mb-8 leading-relaxed max-w-4xl mx-auto">
              No implementamos software innecesario. Diseñamos estratégicamente el uso de IA 
              para que tu organización ahorre millones y libere recursos para proyectos de verdadero impacto.
            </p>
            <div className="inline-flex items-center bg-blue-500 px-8 py-4 rounded-full hover:bg-blue-400 transition-all duration-300 transform hover:scale-110 animate-pulse-slow">
              <Award className="w-6 h-6 mr-3 animate-bounce" />
              <span className="font-bold text-lg">Resultados Garantizados</span>
            </div>
          </div>
        </div>
      </div>

      {/* Credibility */}
      <div className="bg-slate-50 py-20 relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400 rounded-full animate-float-reverse"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 animate-fade-in">
              Respaldados por la experiencia de élite
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto animate-fade-in-delay">
              Montclaire está formada por consultores que han trabajado en las empresas más prestigiosas del mundo
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            {['Google', 'Microsoft', 'Salesforce', 'SAP', 'Huawei'].map((company, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 text-center transform hover:scale-110 hover:-translate-y-2 animate-fade-in-stagger group" style={{animationDelay: `${index * 150}ms`}}>
                <p className="font-semibold text-slate-800 text-lg">{company}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-slate-600 mb-6">También hemos dado servicio a:</p>
            <div className="flex justify-center space-x-8">
              {['Deloitte', 'IBM'].map((client, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 text-center transform hover:scale-110 hover:-translate-y-2 animate-fade-in-stagger" style={{animationDelay: `${(index + 5) * 150}ms`}}>
                  <p className="font-semibold text-slate-800 text-lg">{client}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Stats */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-20 relative overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white rounded-full animate-ping delay-1000"></div>
          <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-white rounded-full animate-ping delay-2000"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 animate-fade-in">
              Casos de éxito comprobados
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto animate-fade-in-delay">
              Resultados reales de empresas que confiaron en nuestra metodología
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="text-6xl font-bold text-blue-200 mb-4 group-hover:text-white transition-all duration-500 transform group-hover:scale-125 animate-counter">80%</div>
              <p className="text-2xl font-semibold mb-3">Reducción de Costos</p>
              <p className="opacity-90 text-lg">En licenciamiento y consultoría</p>
            </div>
            <div className="text-center group">
              <div className="text-6xl font-bold text-blue-200 mb-4 group-hover:text-white transition-all duration-500 transform group-hover:scale-125 animate-counter delay-300">Semanas</div>
              <p className="text-2xl font-semibold mb-3">vs. Años</p>
              <p className="opacity-90 text-lg">Migración de sistemas críticos</p>
            </div>
            <div className="text-center group">
              <div className="text-6xl font-bold text-blue-200 mb-4 group-hover:text-white transition-all duration-500 transform group-hover:scale-125 animate-counter delay-500">0</div>
              <p className="text-2xl font-semibold mb-3">Dependencias Externas</p>
              <p className="opacity-90 text-lg">Control total de tu tecnología</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white py-24 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform skew-x-12 animate-slide-diagonal"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 animate-fade-in">
            Agenda tu asesoría gratuita
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay">
            Conoce casos de estudio específicos de empresas como la tuya que ya han logrado ahorros de hasta el 80%. 
            Diseñemos juntos el éxito.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-8 animate-fade-in">En esta asesoría descubrirás:</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                "Casos de estudio específicos de tu industria",
                "Mapa estratégico de implementación de IA",
                "Análisis de potencial de ahorro para tu empresa",
                "Plan de acción personalizado sin compromiso"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 animate-fade-in-stagger hover:bg-white/5 p-4 rounded-lg transition-all duration-300" style={{animationDelay: `${index * 200}ms`}}>
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0 animate-pulse" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-12 py-6 rounded-xl text-xl font-bold hover:from-blue-600 hover:to-blue-700 transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-blue-500/50 animate-pulse-slow group">
            <span className="group-hover:animate-bounce inline-block">AGENDAR ASESORÍA GRATUITA AHORA</span>
          </button>

          <p className="text-sm opacity-75 mt-6 animate-fade-in-delay">
            Sin compromisos • Completamente gratuita • Resultados garantizados
          </p>
        </div>
      </div>

      {/* Final Message */}
      <div className="bg-gradient-to-br from-slate-700 via-slate-800 to-indigo-800 text-white py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400 rounded-full animate-float"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-400 rounded-full animate-float-reverse"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fade-in">
            Es momento de tomar control
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-600/50 p-8 rounded-xl backdrop-blur-sm hover:bg-slate-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group animate-fade-in-stagger">
              <CheckCircle className="w-10 h-10 text-blue-400 mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="font-bold text-xl mb-3">Pierde el miedo</h3>
              <p className="opacity-90 text-lg">La IA ya no es el futuro, es el presente</p>
            </div>
            <div className="bg-slate-600/50 p-8 rounded-xl backdrop-blur-sm hover:bg-slate-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group animate-fade-in-stagger" style={{animationDelay: '200ms'}}>
              <DollarSign className="w-10 h-10 text-blue-400 mx-auto mb-4 group-hover:animate-spin" />
              <h3 className="font-bold text-xl mb-3">Deja de pagar de más</h3>
              <p className="opacity-90 text-lg">Libérate de las consultorías costosas</p>
            </div>
            <div className="bg-slate-600/50 p-8 rounded-xl backdrop-blur-sm hover:bg-slate-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group animate-fade-in-stagger" style={{animationDelay: '400ms'}}>
              <TrendingUp className="w-10 h-10 text-blue-400 mx-auto mb-4 group-hover:animate-pulse" />
              <h3 className="font-bold text-xl mb-3">Empieza a ganar</h3>
              <p className="opacity-90 text-lg">Control y dinero con IA estratégica</p>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-2xl max-w-4xl mx-auto shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 animate-fade-in-up">
            <p className="font-bold text-xl leading-relaxed">
              No dejes que otra consultoría tradicional te robe más tiempo y dinero. 
              El cambio hacia la IA eficiente empieza hoy.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 text-white py-12 relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-gradient-shift"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-blue-400 mb-4 animate-pulse-slow">MONTCLAIRE</h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto animate-fade-in-delay">
            Consultoría estratégica en Inteligencia Artificial para empresas que buscan resultados reales
          </p>
        </div>
      </div>
    </div>
  );
}