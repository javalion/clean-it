import styles from "./page.module.css";

const navItems = [
  { label: "Edit", icon: "✏️" },
  { label: "Home", icon: "🏠", active: true },
  { label: "Calendar", icon: "📅" },
  { label: "Goals", icon: "🎯" },
  { label: "Rewards", icon: "🎁" },
];

const rooms = [
  {
    name: "Main Bedroom",
    icon: "🛏️",
    tone: "purple" as const,
    doneCount: 1,
    totalCount: 5,
    chores: [
      {
        name: "Make the bed",
        room: "Main Bedroom",
        due: "Today",
        dueTone: "soon" as const,
        xp: 15,
        coins: 3,
        done: true,
      },
      {
        name: "Throw away garbage",
        room: "Main Bedroom",
        due: "Today",
        dueTone: "soon" as const,
        xp: 20,
        coins: 4,
        done: false,
      },
      {
        name: "Put away books",
        room: "Main Bedroom",
        due: "Tomorrow",
        dueTone: "upcoming" as const,
        xp: 15,
        coins: 3,
        done: false,
      },
      {
        name: "Clean nightstands",
        room: "Main Bedroom",
        due: "This week",
        dueTone: "upcoming" as const,
        xp: 25,
        coins: 5,
        done: false,
      },
      {
        name: "Vacuum the floor",
        room: "Main Bedroom",
        due: "Overdue",
        dueTone: "overdue" as const,
        xp: 40,
        coins: 8,
        done: false,
      },
    ],
  },
  {
    name: "Kitchen",
    icon: "🗑️",
    tone: "green" as const,
    doneCount: 1,
    totalCount: 3,
    chores: [
      {
        name: "Do the dishes",
        room: "Kitchen",
        due: "Today",
        dueTone: "soon" as const,
        xp: 25,
        coins: 5,
        done: false,
      },
      {
        name: "Clean the counters",
        room: "Kitchen",
        due: "Today",
        dueTone: "soon" as const,
        xp: 20,
        coins: 4,
        done: true,
      },
      {
        name: "Clean the table",
        room: "Kitchen",
        due: "Tomorrow",
        dueTone: "upcoming" as const,
        xp: 15,
        coins: 3,
        done: false,
      },
    ],
  },
];

const quests = [
  {
    title: "Spotless Week",
    subtitle: "Finish 10 chores",
    reward: "50 coins",
    progress: 6,
    total: 10,
  },
  {
    title: "Kitchen Hero",
    subtitle: "Clear the Kitchen",
    reward: "Badge",
    progress: 1,
    total: 3,
  },
  {
    title: "Early Riser",
    subtitle: "3 morning chores",
    reward: "30 XP",
    progress: 2,
    total: 3,
  },
];

const badges = [
  { label: "First Sweep", icon: "✏️", earned: true },
  { label: "Tidy Streak", icon: "🔥", earned: true },
  { label: "Coin Stacker", icon: "🪙", earned: true },
  { label: "Kitchen Boss", icon: "👑", earned: false },
  { label: "Night Owl", icon: "🌙", earned: false },
  { label: "Level 5", icon: "⭐", earned: false },
];

const dueToneClass: Record<string, string> = {
  overdue: styles.dueOverdue,
  soon: "",
  upcoming: styles.dueSoon,
};

export default function Home() {
  return (
    <div className={styles.page}>
      <nav className={styles.sidebar}>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li
              key={item.label}
              className={`${styles.navItem} ${item.active ? styles.navItemActive : ""}`}
              aria-label={item.label}
            >
              <span aria-hidden>{item.icon}</span>
            </li>
          ))}
        </ul>
        <div className={styles.avatar}>Y</div>
      </nav>

      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <p className={styles.eyebrow}>Saturday, June 7 · Welcome back</p>
            <h1 className={styles.title}>Let&apos;s tidy up ✨</h1>
          </div>
          <div className={styles.headerStats}>
            <span className={`${styles.pill} ${styles.pillCoin}`}>🪙 1,240</span>
            <span className={`${styles.pill} ${styles.pillStreak}`}>🔥 6 day streak</span>
            <button type="button" className={styles.primaryButton}>
              + New chore
            </button>
          </div>
        </header>

        <div className={styles.grid}>
          <div className={styles.column}>
            <section className={styles.summaryRow}>
              <div className={`${styles.card} ${styles.progressCard}`}>
                <div className={styles.progressRing}>
                  <span className={styles.progressValue}>50%</span>
                  <span className={styles.progressLabel}>Today</span>
                </div>
                <div className={styles.statList}>
                  <div className={styles.statRow}>
                    <span className={`${styles.statIcon} ${styles.statIconBlue}`} aria-hidden>
                      📅
                    </span>
                    <div>
                      <p className={styles.statTitle}>2/8</p>
                      <p className={styles.statSubtitle}>Chores done this week</p>
                    </div>
                  </div>
                  <div className={styles.statRow}>
                    <span className={`${styles.statIcon} ${styles.statIconPink}`} aria-hidden>
                      🔥
                    </span>
                    <div>
                      <p className={styles.statTitle}>6 days</p>
                      <p className={styles.statSubtitle}>Current tidy streak</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.card} ${styles.levelCard}`}>
                <div className={styles.levelTop}>
                  <div className={styles.levelBadge}>
                    <span className={styles.levelLabel}>LEVEL</span>
                    <span className={styles.levelValue}>4</span>
                  </div>
                  <div className={styles.levelCopy}>
                    <p className={styles.levelHint}>Keep it up!</p>
                    <p className={styles.levelHeadline}>240 XP to level 5</p>
                  </div>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.progressBarFill} style={{ width: "70%" }} />
                </div>
                <div className={styles.levelFooter}>
                  <div className={styles.levelFooterStats}>
                    <span className={`${styles.pill} ${styles.pillOnDark}`}>🪙 1,240</span>
                    <span className={`${styles.pill} ${styles.pillOnDark}`}>🔥 6 day streak</span>
                  </div>
                  <button type="button" className={styles.secondaryButton}>
                    🎁 Spend
                  </button>
                </div>
              </div>
            </section>

            <section className={styles.card}>
              <div className={styles.sectionHeader}>
                <h2>Chores by room</h2>
                <button type="button" className={styles.primaryButton}>
                  + Add
                </button>
              </div>

              {rooms.map((room) => (
                <div key={room.name} className={styles.room}>
                  <div className={styles.roomHeader}>
                    <span
                      className={`${styles.roomIcon} ${
                        room.tone === "green" ? styles.roomIconGreen : styles.roomIconPurple
                      }`}
                      aria-hidden
                    >
                      {room.icon}
                    </span>
                    <div className={styles.roomInfo}>
                      <h3>{room.name}</h3>
                      <div className={styles.roomProgress}>
                        <span className={styles.roomProgressTrack}>
                          <span
                            className={`${styles.roomProgressFill} ${
                              room.tone === "green" ? styles.roomProgressFillGreen : ""
                            }`}
                            style={{ width: `${(room.doneCount / room.totalCount) * 100}%` }}
                          />
                        </span>
                        <span className={styles.roomProgressLabel}>
                          {room.doneCount}/{room.totalCount} done
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className={`${styles.iconButton} ${room.tone === "green" ? styles.iconButtonGreen : ""}`}
                      aria-label={`Add chore to ${room.name}`}
                    >
                      +
                    </button>
                  </div>

                  <div className={styles.choreList}>
                    {room.chores.map((chore) => (
                      <div
                        key={chore.name}
                        className={`${styles.chore} ${chore.done ? styles.choreDone : ""}`}
                      >
                        <span
                          className={`${styles.checkbox} ${
                            chore.done
                              ? `${styles.checkboxChecked} ${
                                  room.tone === "green" ? styles.checkboxCheckedGreen : ""
                                }`
                              : ""
                          }`}
                          aria-hidden
                        >
                          {chore.done ? "✓" : ""}
                        </span>
                        <div className={styles.choreInfo}>
                          <p className={`${styles.choreName} ${chore.done ? styles.choreNameDone : ""}`}>
                            {chore.name}
                          </p>
                          <p className={styles.choreMeta}>
                            <span className={styles.room}>{chore.room}</span> ·{" "}
                            <span className={`${styles.due} ${dueToneClass[chore.dueTone]}`}>
                              {chore.due}
                            </span>
                          </p>
                        </div>
                        <div className={`${styles.choreActions} ${chore.done ? styles.tagFaded : ""}`}>
                          <span className={`${styles.tag} ${styles.tagXp}`}>⚡ {chore.xp}</span>
                          <span className={`${styles.tag} ${styles.tagCoin}`}>🪙 {chore.coins}</span>
                          <button type="button" className={styles.editButton} aria-label={`Edit ${chore.name}`}>
                            ✏️
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </div>

          <div className={styles.column}>
            <section className={styles.card}>
              <div className={styles.sectionHeader}>
                <div>
                  <h2>Weekly quests</h2>
                  <p className={styles.sectionSubtitle}>Resets Sunday</p>
                </div>
              </div>

              {quests.map((quest) => (
                <div key={quest.title} className={styles.quest}>
                  <span className={styles.questIcon} aria-hidden>
                    🚩
                  </span>
                  <div className={styles.questBody}>
                    <div className={styles.questHead}>
                      <div>
                        <h3>{quest.title}</h3>
                        <p>{quest.subtitle}</p>
                      </div>
                      <span className={styles.questReward}>{quest.reward}</span>
                    </div>
                    <div className={styles.questProgress}>
                      <span className={styles.questProgressTrack}>
                        <span
                          className={styles.questProgressFill}
                          style={{ width: `${(quest.progress / quest.total) * 100}%` }}
                        />
                      </span>
                      <span className={styles.questProgressLabel}>
                        {quest.progress}/{quest.total}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <section className={styles.card}>
              <div className={styles.sectionHeader}>
                <h2>Badges</h2>
              </div>
              <div className={styles.badgeGrid}>
                {badges.map((badge) => (
                  <div key={badge.label} className={styles.badge}>
                    <span
                      className={`${styles.badgeIcon} ${badge.earned ? styles.badgeEarned : styles.badgeLocked}`}
                      aria-hidden
                    >
                      {badge.icon}
                    </span>
                    <p className={styles.badgeLabel}>{badge.label}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
