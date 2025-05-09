import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-300 to-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-35 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-teal-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-35 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-white/95 hover:bg-white text-slate-800 hover:text-slate-900 rounded-xl border-2 border-emerald-300 hover:border-emerald-400 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
          >
            Logout
          </button>
        </header>

        {/* Main content */}
        <div className="max-w-4xl mx-auto">
          {/* Welcome card */}
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-emerald-300/60 p-8 mb-8">
            <div className="text-center">
              {/* Avatar */}
              <div className="w-24 h-24 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              
              {/* Welcome message */}
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent mb-4">
                Welcome back, {user?.name || 'User'}! 🎉
              </h2>
              <p className="text-xl text-slate-700 mb-8 font-medium">
                You have successfully logged into your account
              </p>

              {/* User info grid */}
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl p-6 border-2 border-emerald-300/50 shadow-lg">
                  <h3 className="text-lg font-bold text-emerald-800 mb-2">Name</h3>
                  <p className="text-slate-900 text-xl font-semibold">{user?.name || 'N/A'}</p>
                </div>
                <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl p-6 border-2 border-teal-300/50 shadow-lg">
                  <h3 className="text-lg font-bold text-emerald-800 mb-2">Email</h3>
                  <p className="text-slate-900 text-xl font-semibold">{user?.email || 'N/A'}</p>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 border-2 border-green-300/50 shadow-lg">
                  <h3 className="text-lg font-bold text-emerald-800 mb-2">Role</h3>
                  <p className="text-slate-900 text-xl font-semibold capitalize">{user?.role || 'user'}</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl p-6 border-2 border-cyan-300/50 shadow-lg">
                  <h3 className="text-lg font-bold text-emerald-800 mb-2">Member Since</h3>
                  <p className="text-slate-900 text-xl font-semibold">
                    {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
