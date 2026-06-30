import React, { useState } from "react";
import {
  CalendarClock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldAlert,
  Trophy,
  User,
  UsersRound,
} from "lucide-react";
import { motion } from "framer-motion";

const teams = [
  "Arsenal",
  "Aston Villa",
  "Bournemouth",
  "Brentford",
  "Brighton",
  "Chelsea",
  "Crystal Palace",
  "Everton",
  "Fulham",
  "Liverpool",
  "Manchester City",
  "Manchester United",
  "Newcastle United",
  "Nottingham Forest",
  "Tottenham Hotspur",
  "West Ham United",
  "Wolverhampton Wanderers",
  "Leeds United",
  "Burnley",
  "Sunderland",
];

const gameweeks = [
  "Gameweek 1",
  "Gameweek 2",
  "Gameweek 3",
  "Gameweek 4",
  "Gameweek 5",
];

const competitors = [
  { name: "Michael", status: "Still in", lastPick: "Arsenal" },
  { name: "Alex", status: "Still in", lastPick: "Liverpool" },
  { name: "Simon", status: "Out", lastPick: "Chelsea" },
  { name: "Dave", status: "Still in", lastPick: "Manchester City" },
  { name: "Chris", status: "Out", lastPick: "Tottenham Hotspur" },
];

const previousResults = [
  {
    gameweek: "Gameweek 1",
    player: "Michael",
    team: "Arsenal",
    result: "Won",
    status: "Still in",
  },
  {
    gameweek: "Gameweek 1",
    player: "Alex",
    team: "Liverpool",
    result: "Won",
    status: "Still in",
  },
  {
    gameweek: "Gameweek 1",
    player: "Simon",
    team: "Chelsea",
    result: "Draw",
    status: "Out",
  },
  {
    gameweek: "Gameweek 1",
    player: "Dave",
    team: "Manchester City",
    result: "Won",
    status: "Still in",
  },
  {
    gameweek: "Gameweek 1",
    player: "Chris",
    team: "Tottenham Hotspur",
    result: "Lost",
    status: "Out",
  },
];

const rules = [
  {
    icon: CircleDollarSign,
    title: "Pay in by Gameweek 1",
    text: "No late signing. Miss the transfer window and you watch from the stands.",
  },
  {
    icon: ShieldAlert,
    title: "Pick one Premier League team",
    text: "Back one side each gameweek to take all 3 points.",
  },
  {
    icon: Trophy,
    title: "Win or walk",
    text: "A win keeps you alive. A draw or defeat means a straight red.",
  },
  {
    icon: UsersRound,
    title: "No repeat picks",
    text: "Each club can only be used once, so squad management matters.",
  },
];

const timeline = [
  { label: "GW 1", title: "Entry closes", style: "border-red-400 bg-red-500/20" },
  { label: "GW 2", title: "Survivors advance", style: "border-white/20 bg-white/10" },
  { label: "GW 3", title: "Pressure builds", style: "border-white/20 bg-white/10" },
  { label: "Final", title: "Last fan wins", style: "border-lime-300 bg-lime-300/20" },
];

function AuthPage({ onEnter }) {
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const isSignup = mode === "signup";

  function handleSubmit(event) {
    event.preventDefault();
    onEnter(form.name || "Fan");
  }

  return (
    <main className="min-h-screen bg-emerald-950 text-white">
      <section className="relative grid min-h-screen place-items-center overflow-hidden px-5 py-10 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-black to-lime-950" />
        <div className="absolute -right-24 top-16 h-80 w-80 rounded-full bg-lime-400/20 blur-3xl" />
        <div className="absolute -bottom-24 left-16 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="relative z-10 grid w-full max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-lime-300 text-sm font-black text-black">
                LFS
              </span>
              <span className="text-lg font-black">Last Fan Standing</span>
            </div>

            <p className="mb-4 inline-flex rounded-full bg-lime-300/20 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-lime-200 sm:text-sm">
              Premier League survival competition
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Sign in and stay alive.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85 lg:mx-0">
              Enter the competition, submit your weekly pick, and avoid the dreaded draw-or-lose exit.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <StatCard number="3" label="Points needed" colour="lime" />
              <StatCard number="1" label="Pick weekly" colour="white" />
              <StatCard number="0" label="Second chances" colour="red" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mx-auto w-full max-w-md rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur"
          >
            <div className="mb-6 rounded-[1.5rem] bg-black/55 p-5">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-200">
                {isSignup ? "Create account" : "Welcome back"}
              </p>
              <h2 className="mt-2 text-3xl font-black text-white">
                {isSignup ? "Sign up" : "Login"}
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/70">
                {isSignup
                  ? "Create your profile ready for Gameweek 1."
                  : "Sign in to manage your weekly survival pick."}
              </p>
            </div>

            <div className="mb-5 grid grid-cols-2 rounded-2xl bg-black/35 p-1">
              <button
                type="button"
                onClick={() => setMode("login")}
                className={`rounded-xl px-4 py-3 text-sm font-black transition ${
                  !isSignup ? "bg-lime-300 text-black" : "text-white/70 hover:text-white"
                }`}
              >
                Login
              </button>

              <button
                type="button"
                onClick={() => setMode("signup")}
                className={`rounded-xl px-4 py-3 text-sm font-black transition ${
                  isSignup ? "bg-lime-300 text-black" : "text-white/70 hover:text-white"
                }`}
              >
                Sign up
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignup && (
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-white/80">
                    Name
                  </span>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-black/35 px-4 py-3 focus-within:border-lime-300/70">
                    <User className="h-5 w-5 text-lime-200" />
                    <input
                      value={form.name}
                      onChange={(event) =>
                        setForm({ ...form, name: event.target.value })
                      }
                      className="w-full bg-transparent text-white outline-none placeholder:text-white/35"
                      placeholder="Your name"
                      type="text"
                    />
                  </div>
                </label>
              )}

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-white/80">
                  Email
                </span>
                <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-black/35 px-4 py-3 focus-within:border-lime-300/70">
                  <Mail className="h-5 w-5 text-lime-200" />
                  <input
                    value={form.email}
                    onChange={(event) =>
                      setForm({ ...form, email: event.target.value })
                    }
                    className="w-full bg-transparent text-white outline-none placeholder:text-white/35"
                    placeholder="you@example.com"
                    type="email"
                    required
                  />
                </div>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-white/80">
                  Password
                </span>
                <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-black/35 px-4 py-3 focus-within:border-lime-300/70">
                  <Lock className="h-5 w-5 text-lime-200" />
                  <input
                    value={form.password}
                    onChange={(event) =>
                      setForm({ ...form, password: event.target.value })
                    }
                    className="w-full bg-transparent text-white outline-none placeholder:text-white/35"
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-white/60 transition hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </label>

              {!isSignup && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-white/70">
                    <input type="checkbox" className="h-4 w-4 rounded accent-lime-300" />
                    Remember me
                  </label>

                  <button
                    type="button"
                    className="font-bold text-lime-200 hover:text-lime-100"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-lime-300 px-6 py-4 font-black text-black shadow-xl shadow-lime-500/20 transition hover:-translate-y-0.5 hover:bg-lime-200"
              >
                {isSignup ? "Create account" : "Login"}{" "}
                <ChevronRight className="h-5 w-5" />
              </button>
            </form>

            <p className="mt-5 text-center text-sm text-white/70">
              {isSignup ? "Already entered?" : "New to the competition?"}{" "}
              <button
                type="button"
                onClick={() => setMode(isSignup ? "login" : "signup")}
                className="font-black text-lime-200 hover:text-lime-100"
              >
                {isSignup ? "Login instead" : "Create an account"}
              </button>
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function StatCard({ number, label, colour }) {
  const styles = {
    lime: "border-lime-300/40 bg-lime-300/15 text-lime-200",
    white: "border-white/20 bg-white/10 text-white",
    red: "border-red-400/40 bg-red-500/20 text-red-100",
  };

  return (
    <div className={`rounded-3xl border p-5 text-center ${styles[colour]}`}>
      <p className="text-4xl font-black">{number}</p>
      <p className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-white/80">
        {label}
      </p>
    </div>
  );
}

function ResultsAndCompetitorsTable() {
  const stillInCount = competitors.filter(
    (person) => person.status === "Still in"
  ).length;

  const outCount = competitors.filter((person) => person.status === "Out").length;

  return (
    <section className="bg-emerald-950 px-5 py-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-lime-200">
              Competition tracker
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Previous results and players.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/75">
              Keep track of who picked who, what happened, and who is still standing.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:min-w-[260px]">
            <StatCard number={stillInCount} label="Still in" colour="lime" />
            <StatCard number={outCount} label="Out" colour="red" />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-5 shadow-xl shadow-black/20 backdrop-blur">
            <h3 className="mb-4 text-2xl font-black text-white">
              Who’s in the competition
            </h3>

            <div className="overflow-hidden rounded-2xl border border-white/15">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-black/55 text-xs uppercase tracking-[0.18em] text-lime-200">
                  <tr>
                    <th className="px-4 py-4">Player</th>
                    <th className="px-4 py-4">Last pick</th>
                    <th className="px-4 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {competitors.map((person) => (
                    <tr key={person.name} className="bg-white/5">
                      <td className="px-4 py-4 font-black text-white">
                        {person.name}
                      </td>
                      <td className="px-4 py-4 font-semibold text-white/75">
                        {person.lastPick}
                      </td>
                      <td className="px-4 py-4">
                        <StatusBadge status={person.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-5 shadow-xl shadow-black/20 backdrop-blur">
            <h3 className="mb-4 text-2xl font-black text-white">
              Previous gameweek results
            </h3>

            <div className="overflow-x-auto rounded-2xl border border-white/15">
              <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                <thead className="bg-black/55 text-xs uppercase tracking-[0.18em] text-lime-200">
                  <tr>
                    <th className="px-4 py-4">Gameweek</th>
                    <th className="px-4 py-4">Player</th>
                    <th className="px-4 py-4">Team picked</th>
                    <th className="px-4 py-4">Result</th>
                    <th className="px-4 py-4">Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {previousResults.map((row, index) => (
                    <tr key={`${row.gameweek}-${row.player}-${index}`} className="bg-white/5">
                      <td className="px-4 py-4 font-bold text-white/80">
                        {row.gameweek}
                      </td>
                      <td className="px-4 py-4 font-black text-white">
                        {row.player}
                      </td>
                      <td className="px-4 py-4 font-semibold text-white/75">
                        {row.team}
                      </td>
                      <td className="px-4 py-4 font-bold text-white/80">
                        {row.result}
                      </td>
                      <td className="px-4 py-4">
                        <StatusBadge status={row.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusBadge({ status }) {
  const isStillIn = status === "Still in";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-black ${
        isStillIn ? "bg-lime-300 text-black" : "bg-red-500 text-white"
      }`}
    >
      {status}
    </span>
  );
}

function TeamPickPage({ userName, onBack, onLogout }) {
  const [selectedGameweek, setSelectedGameweek] = useState("Gameweek 1");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [submittedPick, setSubmittedPick] = useState(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  function submitPick(event) {
    event.preventDefault();
    if (!selectedTeam) return;

    setSubmittedPick({
      gameweek: selectedGameweek,
      team: selectedTeam,
    });

    setIsConfirmOpen(true);
  }

  return (
    <main className="min-h-screen bg-emerald-950 text-white">
      <section className="relative min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-black to-lime-950" />
        <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-lime-400/20 blur-3xl" />
        <div className="absolute -bottom-24 left-24 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between border-b border-white/20 pb-5">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20"
          >
            <ChevronLeft className="h-4 w-4" /> Back
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden text-sm font-bold text-white/70 sm:inline">
              {userName}
            </span>

            <button
              type="button"
              onClick={onLogout}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20"
            >
              Logout
            </button>
          </div>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <p className="mb-4 inline-flex rounded-full bg-lime-300/20 px-4 py-2 text-sm font-black uppercase tracking-[0.22em] text-lime-200">
              Team selection
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl">
              Choose your team for the gameweek.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
              Pick one team. If that team wins, you survive. If that team draws or loses, you are out.
            </p>

            <div className="mt-8 rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-xl shadow-black/20 backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-lime-200">
                Current pick
              </p>

              {submittedPick ? (
                <div className="mt-4 rounded-3xl border border-lime-300/40 bg-lime-300/15 p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 text-lime-200" />
                    <div>
                      <p className="text-xl font-black text-white">
                        {submittedPick.team}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white/70">
                        Submitted for {submittedPick.gameweek}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="mt-4 text-white/70">
                  No pick submitted yet.
                </p>
              )}
            </div>
          </motion.div>

          <motion.form
            onSubmit={submitPick}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur"
          >
            <div className="rounded-[1.5rem] bg-black/55 p-5">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-200">
                Make your pick
              </p>
              <h2 className="mt-2 text-3xl font-black text-white">
                {selectedGameweek}
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Select your gameweek, choose your team, then submit your pick.
              </p>
            </div>

            <label className="mt-6 block">
              <span className="mb-2 block text-sm font-bold text-white/80">
                Gameweek
              </span>
              <select
                value={selectedGameweek}
                onChange={(event) => setSelectedGameweek(event.target.value)}
                className="w-full rounded-2xl border border-white/15 bg-black/45 px-4 py-4 font-bold text-white outline-none focus:border-lime-300/70"
              >
                {gameweeks.map((gameweek) => (
                  <option key={gameweek} value={gameweek} className="bg-black text-white">
                    {gameweek}
                  </option>
                ))}
              </select>
            </label>

            <div className="mt-6">
              <p className="mb-3 text-sm font-bold text-white/80">
                Premier League team
              </p>

              <div className="grid max-h-[430px] gap-3 overflow-y-auto pr-1 sm:grid-cols-2">
                {teams.map((team) => {
                  const isSelected = selectedTeam === team;

                  return (
                    <button
                      key={team}
                      type="button"
                      onClick={() => setSelectedTeam(team)}
                      className={`rounded-2xl border px-4 py-4 text-left font-black transition ${
                        isSelected
                          ? "border-lime-300 bg-lime-300 text-black shadow-lg shadow-lime-500/20"
                          : "border-white/15 bg-black/35 text-white hover:border-lime-300/70 hover:bg-white/10"
                      }`}
                    >
                      {team}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="submit"
              disabled={!selectedTeam}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-lime-300 px-6 py-4 font-black text-black shadow-xl shadow-lime-500/20 transition hover:-translate-y-0.5 hover:bg-lime-200 disabled:cursor-not-allowed disabled:bg-white/20 disabled:text-white/40 disabled:shadow-none"
            >
              Submit pick <ChevronRight className="h-5 w-5" />
            </button>
          </motion.form>
        </div>

        {isConfirmOpen && submittedPick && (
          <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-5 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-md rounded-[2rem] border border-lime-300/40 bg-emerald-950 p-6 text-white shadow-2xl shadow-black/50"
            >
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-lime-300 text-black">
                <CheckCircle2 className="h-9 w-9" />
              </div>

              <div className="mt-5 text-center">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-200">
                  Pick submitted
                </p>
                <h2 className="mt-3 text-3xl font-black text-white">
                  {submittedPick.team}
                </h2>
                <p className="mt-3 text-base font-semibold leading-7 text-white/75">
                  Your pick for{" "}
                  <span className="text-lime-200">
                    {submittedPick.gameweek}
                  </span>{" "}
                  has been locked in.
                </p>
              </div>

              <div className="mt-6 rounded-3xl border border-white/15 bg-black/35 p-4 text-center">
                <p className="text-sm font-bold text-white/75">
                  If {submittedPick.team} win, you survive. Draw or lose and it is curtains.
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setIsConfirmOpen(false)}
                  className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 font-black text-white transition hover:bg-white/20"
                >
                  Edit pick
                </button>

                <button
                  type="button"
                  onClick={onBack}
                  className="rounded-2xl bg-lime-300 px-5 py-4 font-black text-black transition hover:bg-lime-200"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </section>
    </main>
  );
}

function HomePage({ userName, onLogout, onPickTeam }) {
  return (
    <main className="min-h-screen bg-emerald-950 text-white">
      <section className="relative overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-black to-lime-950" />
        <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-lime-400/20 blur-3xl" />
        <div className="absolute -bottom-24 left-24 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between border-b border-white/20 pb-5">
          <div className="flex items-center gap-3 font-bold tracking-wide text-white">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-lime-300 text-sm font-black text-black">
              LFS
            </span>
            <span className="text-lg sm:text-xl">Last Fan Standing</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onPickTeam}
              className="rounded-full bg-lime-300 px-4 py-2 text-sm font-black text-black transition hover:bg-lime-200"
            >
              Pick team
            </button>

            <button
              type="button"
              onClick={onLogout}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20"
            >
              Logout
            </button>
          </div>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 py-14 lg:grid-cols-2 lg:items-center lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl text-white"
          >
            <p className="mb-4 inline-flex rounded-full bg-lime-300/20 px-4 py-2 text-sm font-bold uppercase tracking-[0.22em] text-lime-200">
              Welcome, {userName}
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Last Fan Standing returns.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white sm:text-xl">
              Your football instincts are back on trial. Pick boldly, manage the clubs you have left, and stay alive when everyone else bottles it.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onPickTeam}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-lime-300 px-6 py-4 font-black text-black shadow-xl shadow-lime-500/20 transition hover:-translate-y-0.5 hover:bg-lime-200"
              >
                Pick your Gameweek team <CalendarClock className="h-5 w-5" />
              </button>

              <span className="text-sm font-semibold text-white">
                If nobody survives, the pot rolls over.
              </span>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-[2rem] border border-white/20 bg-white/10 p-6 text-white shadow-2xl shadow-black/30 backdrop-blur"
          >
            <div className="rounded-[1.5rem] bg-black/55 p-5">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-200">
                Survival rule
              </p>
              <h2 className="mt-2 text-3xl font-black text-white">
                Win or you are out
              </h2>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <StatCard number="3" label="Points needed" colour="lime" />
              <StatCard number="1" label="Team pick" colour="white" />
              <StatCard number="0" label="Repeat picks" colour="red" />
            </div>

            <div className="mt-5 rounded-3xl border border-red-400/50 bg-red-500/20 p-5 text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-red-100">
                Draw or lose = eliminated
              </p>
            </div>
          </motion.aside>
        </div>
      </section>

      <section id="deadline" className="bg-lime-300 px-5 py-10 text-black sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-black/70">
              Transfer window
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-black sm:text-4xl">
              Pay in before Gameweek 1 slams shut.
            </h2>
          </div>

          <p className="text-lg font-semibold leading-8 text-black/80">
            No late entries, no bench appeals, no second chances. Once the first deadline passes, the competition starts with only the paid-in fans on the teamsheet.
          </p>
        </div>
      </section>

      <ResultsAndCompetitorsTable />

      <section id="rules" className="bg-emerald-950 px-5 py-16 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-lime-200">
              Quick refresher
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Stay alive one gameweek at a time.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {rules.map((rule) => {
              const Icon = rule.icon;

              return (
                <article
                  key={rule.title}
                  className="rounded-[1.6rem] border border-white/20 bg-white/10 p-6 text-white shadow-xl shadow-black/20"
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-lime-300 text-black">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-black text-white">
                    {rule.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/85">
                    {rule.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-4">
            {timeline.map((step) => (
              <div
                key={step.label}
                className={`rounded-3xl border p-5 text-white ${step.style}`}
              >
                <span className="text-sm font-black uppercase tracking-[0.2em] text-white/70">
                  {step.label}
                </span>
                <strong className="mt-2 block text-xl font-black text-white">
                  {step.title}
                </strong>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-white/20 bg-white/10 p-8 text-center text-white shadow-2xl shadow-black/20">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-lime-200">
              The goal
            </p>

            <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl">
              Be the final name left when the whistle goes.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">
              Outlast the crowd by backing winners without burning through your strongest clubs too early.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("Fan");
  const [currentPage, setCurrentPage] = useState("home");

  if (!isLoggedIn) {
    return (
      <AuthPage
        onEnter={(name) => {
          setUserName(name);
          setIsLoggedIn(true);
          setCurrentPage("home");
        }}
      />
    );
  }

  if (currentPage === "pick") {
    return (
      <TeamPickPage
        userName={userName}
        onBack={() => setCurrentPage("home")}
        onLogout={() => {
          setIsLoggedIn(false);
          setCurrentPage("home");
        }}
      />
    );
  }

  return (
    <HomePage
      userName={userName}
      onPickTeam={() => setCurrentPage("pick")}
      onLogout={() => {
        setIsLoggedIn(false);
        setCurrentPage("home");
      }}
    />
  );
}