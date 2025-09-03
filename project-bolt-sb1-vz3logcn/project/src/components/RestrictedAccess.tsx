import React, { useState } from 'react';
import { Lock, Shield, AlertCircle } from 'lucide-react';

interface RestrictedAccessProps {
  onAccessGranted: () => void;
}

export function RestrictedAccess({ onAccessGranted }: RestrictedAccessProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate a brief loading state for better UX
    setTimeout(() => {
      if (code === '242559') {
        onAccessGranted();
      } else {
        setError('Código incorrecto. Verifica e intenta nuevamente.');
        setCode('');
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800 mb-4">
              Acceso Restringido
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Esta información es confidencial y está destinada únicamente para gerentes y directores de tecnología autorizados.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="access-code" className="block text-sm font-semibold text-slate-700 mb-3">
                Código de Acceso
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="access-code"
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-center text-lg font-mono bg-slate-50 focus:bg-white"
                  placeholder="Ingresa tu código"
                  maxLength={6}
                  disabled={isLoading}
                />
              </div>
              {error && (
                <div className="mt-3 flex items-center text-blue-600 text-sm">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  {error}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={!code || isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Verificando...
                </div>
              ) : (
                'Acceder'
              )}
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-200">
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-800">
                  <p className="font-semibold mb-1">Información Confidencial</p>
                  <p className="leading-relaxed">El contenido de esta página contiene estrategias y casos de estudio exclusivos para líderes de tecnología.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-white/70 text-sm">
            ¿No tienes código de acceso? Contacta a tu representante de Montclaire.
          </p>
        </div>
      </div>
    </div>
  );
}