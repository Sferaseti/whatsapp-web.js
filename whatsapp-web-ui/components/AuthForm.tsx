import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User, ArrowRight, Github } from 'lucide-react';

type AuthFormProps = {
  defaultIsLogin?: boolean;
};

export default function AuthForm({ defaultIsLogin = true }: AuthFormProps) {
  const [isLogin, setIsLogin] = useState(defaultIsLogin);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [focused, setFocused] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 mb-4 shadow-lg shadow-purple-500/50">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            {isLogin ? 'С возвращением' : 'Создать аккаунт'}
          </h1>
          <p className="text-slate-400">
            {isLogin ? 'Войдите в свой аккаунт' : 'Присоединяйтесь к нам сегодня'}
          </p>
        </div>

        {/* Main form card */}
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
          {/* Glassmorphism shine effect */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
          
          <div className="space-y-6">
            {/* Name field for registration */}
            {!isLogin && (
              <div className="relative">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Полное имя
                </label>
                <div className={`relative transition-all duration-300 ${focused === 'name' ? 'scale-[1.02]' : ''}`}>
                  <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focused === 'name' ? 'text-purple-400' : 'text-slate-500'}`} />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused('')}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                    placeholder="Иван Иванов"
                  />
                </div>
              </div>
            )}

            {/* Email field */}
            <div className="relative">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email адрес
              </label>
              <div className={`relative transition-all duration-300 ${focused === 'email' ? 'scale-[1.02]' : ''}`}>
                <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focused === 'email' ? 'text-purple-400' : 'text-slate-500'}`} />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused('')}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Password field */}
            <div className="relative">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Пароль
              </label>
              <div className={`relative transition-all duration-300 ${focused === 'password' ? 'scale-[1.02]' : ''}`}>
                <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focused === 'password' ? 'text-purple-400' : 'text-slate-500'}`} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  onFocus={() => setFocused('password')}
                  onBlur={() => setFocused('')}
                  className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-purple-400 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember me & Forgot password */}
            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/5 checked:bg-purple-500 checked:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all" />
                  <span className="text-slate-400 group-hover:text-slate-300 transition-colors">Запомнить меня</span>
                </label>
                <button type="button" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Забыли пароль?
                </button>
              </div>
            )}

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  {isLogin ? 'Войти' : 'Зарегистрироваться'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-slate-900/50 text-slate-400">или продолжить с</span>
              </div>
            </div>

            {/* Social login buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="hidden sm:inline">Google</span>
              </button>
              <button
                type="button"
                className="py-3 px-4 bg-white/5 hover:bg白/10 border border-white/10 rounded-xl text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Github className="w-5 h-5" />
                <span className="hidden sm:inline">GitHub</span>
              </button>
            </div>
          </div>

          {/* Toggle login/register */}
          <div className="mt-6 text-center">
            <p className="text-slate-400">
              {isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}{' '}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
              >
                {isLogin ? 'Зарегистрироваться' : 'Войти'}
              </button>
            </p>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-center text-slate-500 text-sm mt-6">
          Продолжая, вы соглашаетесь с нашими{' '}
          <button className="text-slate-400 hover:text-slate-300 transition-colors underline">
            Условиями использования
          </button>
        </p>
      </div>
    </div>
  );
}