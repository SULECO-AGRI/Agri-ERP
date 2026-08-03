import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Mail, Lock, User, ArrowRight } from 'lucide-react';

export type AuthMode = 'signin' | 'signup';

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M23.49 12.27c0-.82-.07-1.42-.22-2.05H12v3.72h6.51c-.13 1.06-.83 2.65-2.39 3.72l-.02.14 3.47 2.68.24.02c2.21-2.03 3.48-5.02 3.48-8.23z" />
      <path fill="#34A853" d="M12 24c3.15 0 5.79-1.03 7.72-2.81l-3.68-2.83c-.99.67-2.31 1.14-4.04 1.14-3.09 0-5.71-2.03-6.64-4.84l-.14.01-3.6 2.78-.05.13C3.44 21.3 7.4 24 12 24z" />
      <path fill="#FBBC05" d="M5.36 14.65c-.24-.7-.38-1.45-.38-2.65s.14-1.95.38-2.65l-.01-.15-3.65-2.83-.12.06A11.97 11.97 0 000 12c0 1.94.47 3.77 1.32 5.65l4.04-3z" />
      <path fill="#EA4335" d="M12 4.75c2.21 0 3.7.95 4.55 1.75l3.32-3.23C17.79 1.19 15.15 0 12 0 7.4 0 3.44 2.7 1.36 6.65l4.03 3.13C6.28 6.87 8.9 4.75 12 4.75z" />
    </svg>
  );
}

export function AuthModal({
  mode,
  onClose,
  onModeChange,
}: {
  mode: AuthMode;
  onClose: () => void;
  onModeChange: (m: AuthMode) => void;
}) {
  const isSignIn = mode === 'signin';

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-forest-950/60 px-4 backdrop-blur-sm"
      onClick={onClose}
      style={{ animation: 'fadeIn 0.18s ease-out' }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[420px] overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-forest-950/10"
        style={{ animation: 'scaleIn 0.22s cubic-bezier(0.16,1,0.3,1)', willChange: 'transform, opacity' }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 grid h-8 w-8 place-items-center rounded-full text-forest-950/40 transition-colors hover:bg-forest-950/5 hover:text-forest-950"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="px-8 pb-8 pt-14">
          {/* segmented mode switcher */}
          <div className="relative grid grid-cols-2 rounded-full bg-forest-950/[0.05] p-1">
            <span
              className="absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-forest-950 transition-transform duration-300 ease-out"
              style={{ transform: isSignIn ? 'translateX(0)' : 'translateX(100%)', willChange: 'transform' }}
            />
            <button
              type="button"
              onClick={() => onModeChange('signin')}
              className={`relative z-10 rounded-full py-2 text-sm font-semibold transition-colors duration-200 ${
                isSignIn ? 'text-white' : 'text-forest-950/55 hover:text-forest-950'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => onModeChange('signup')}
              className={`relative z-10 rounded-full py-2 text-sm font-semibold transition-colors duration-200 ${
                !isSignIn ? 'text-white' : 'text-forest-950/55 hover:text-forest-950'
              }`}
            >
              Sign Up
            </button>
          </div>

          <div key={mode} className="animate-fadeUp mt-6 flex h-[500px] flex-col" style={{ animationDuration: '0.3s' }}>
            <div className="min-h-[56px]">
              <h2 className="text-2xl font-bold tracking-tight text-forest-950">
                {isSignIn ? 'Welcome back' : 'Create your account'}
              </h2>
              <p className="mt-1.5 text-sm text-forest-950/55">
                {isSignIn ? 'Sign in to your SPATIO AGRI workspace.' : 'Start running your operation on one shared picture.'}
              </p>
            </div>

            <div className="flex flex-1 flex-col justify-center">
            <form onSubmit={(e) => { e.preventDefault(); onClose(); }} className="space-y-3.5">
              {!isSignIn && (
                <div className="relative">
                  <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-forest-950/35" />
                  <input type="text" required placeholder="Full name" className="input" style={{ paddingLeft: '2.5rem' }} />
                </div>
              )}
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-forest-950/35" />
                <input type="email" required placeholder="Work email" className="input" style={{ paddingLeft: '2.5rem' }} />
              </div>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-forest-950/35" />
                <input type="password" required placeholder="Password" className="input" style={{ paddingLeft: '2.5rem' }} />
              </div>

              {isSignIn ? (
                <div className="flex justify-end">
                  <button type="button" className="text-xs font-medium text-emerald-deep hover:underline">
                    Forgot password?
                  </button>
                </div>
              ) : (
                <label className="flex items-start gap-2.5 pt-1 text-xs leading-relaxed text-forest-950/55">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded border-forest-950/20 text-emerald-accent focus:ring-emerald-accent/40"
                  />
                  I agree to the Terms of Service and Privacy Policy.
                </label>
              )}

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-emerald-accent py-3 text-sm font-semibold text-white shadow-glow transition-all duration-200 hover:bg-emerald-deep active:scale-[0.98]"
              >
                {isSignIn ? 'Sign In' : 'Create Account'}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-px flex-1 bg-forest-950/10" />
              <span className="text-[11px] font-medium uppercase tracking-wide text-forest-950/35">or continue with</span>
              <span className="h-px flex-1 bg-forest-950/10" />
            </div>

            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-2.5 rounded-full border border-forest-950/10 py-3 text-sm font-semibold text-forest-950 transition-colors duration-200 hover:bg-forest-950/[0.03]"
            >
              <GoogleIcon className="h-4 w-4" />
              Google
            </button>
            </div>

            <p className="mt-4 text-center text-sm text-forest-950/55">
              {isSignIn ? "Don't have an account? " : 'Already have an account? '}
              <button
                type="button"
                onClick={() => onModeChange(isSignIn ? 'signup' : 'signin')}
                className="font-semibold text-emerald-deep hover:underline"
              >
                {isSignIn ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
