// UI copy only. User notes, stored symptom identifiers, and form values are never
// translated. Health content has its own reviewed bilingual fields.
const zh = new Map(Object.entries({
  'Resolve the storage issue in Settings before adding records.': '请先在设置中解决存储问题，再添加记录。',
  'Open Settings to resolve the storage issue first.': '请先打开设置，解决存储问题。',
  'Hormonal contraception, pregnancy, breastfeeding, and the approach to menopause may make calendar estimates less useful. You can pause estimates in Settings and keep logging.': '使用激素避孕方法、怀孕、哺乳或接近绝经期时，日历预估的参考价值可能降低。你可以在设置中暂停预估，并继续记录。',

  'Today': '今天',
  'Patterns': '规律',
  'Tips': '建议',
  'Settings': '设置',
  'Your cycle': '我的周期',
  'Saved in this browser': '保存在此浏览器',
  'Estimates may change. Not for pregnancy prevention.': '预估日期可能变化，不可用于避孕。',
  'Sources & help': '来源与帮助',
  'Period in progress': '经期中',
  'Your rhythm': '你的节奏',
  'Add a period to begin.': '记一次经期，开始了解自己。',
  'Add past period': '补记经期',
  'View records': '查看记录',
  'Next period': '下次经期',
  'Estimate paused': '预估已暂停',
  'Dates vary': '周期有变化',
  'Building your estimate': '积累记录中',
  'Estimate unavailable': '暂无法预估',
  'Add missing dates or keep tracking.': '补记遗漏日期，或继续记录。',
  'Check for missing records.': '看看是否漏记了日期。',
  'Estimate · may change': '预估 · 可能变化',
  'Past estimate': '预估日期已过',
  'How it works': '如何预估',
  'No phase or fertility prediction.': '不预测周期阶段或易孕期。',
  'Estimated start': '预估开始日',
  'Recent history': '近期记录',
  'Log four starts for an estimate.': '记满四次开始日，即可预估。',
  'How do you feel?': '今天感觉如何？',
  "Today's check-in saved": '今天已记录',
  'Good': '舒适',
  'Mild': '轻度',
  'Moderate': '中度',
  'Severe': '重度',
  'Tip for today': '今日建议',
  'All tips': '全部建议',
  'Details & source': '详情与来源',
  'General guidance': '一般健康建议',
  'When to get help': '何时就医',
  'Not a diagnosis.': '非诊断结果。',
  'Cycle lengths': '周期长度',
  'Symptoms logged': '已记录的症状',
  'No symptoms logged yet.': '暂未记录症状。',
  'Add check-ins to see your patterns.': '记录感受，了解自己的规律。',
  'Add two period starts to see your chart.': '记满两次开始日，即可查看图表。',
  'Recorded history': '历史记录',
  'Prediction settings': '预估设置',
  'Pause estimates': '暂停预估',
  'Backup & privacy': '备份与隐私',
  'Export before changing devices.': '更换设备前，请先导出备份。',
  'Backups are readable files. Import replaces records after confirmation.': '备份为可直接阅读的文件；确认导入后，将替换当前记录。',
  'Storage details': '存储详情',
  'Try demo': '体验演示',
  'Delete records': '删除记录',
  'About': '关于',
  'First day': '开始日',
  'Last day': '结束日',
  'Still on my period': '经期还未结束',
  'Spotting? Add it as a symptom.': '点滴出血？请记在症状中。',
  'Symptoms': '症状',
  'Discomfort': '不适程度',
  'Note': '备注',
  'Ready when you are': '随时开始记录',
  'Your first record': '第一次记录',
  'This month': '本月',
  'Details': '查看详情',
  'Demo mode': '演示模式',
  'Fictional records': '虚构记录',
  'See a sample cycle': '看看示例周期',
  'About these sources': '关于资料来源',
  'Four period starts': '四次经期开始日',
  'Three start-to-start intervals.': '得到三个开始日间隔。',
  'Your recent history': '近期记录',
  'Median of up to six cycles.': '取最近最多六个周期的中位数。',
  'A date range': '一个日期范围',
  'Your shortest to longest cycle.': '依据最短至最长周期。',
  'Your next period may fall outside this range.': '下次经期可能在此范围之外开始。',
  'Estimation details': '预估详情',
  "✓ Today's check-in saved": '✓ 今天已记录',
  'Overview': '概览',
  'Calendar': '日历',
  'My patterns': '我的规律',
  'Guidance': '健康建议',
  'Privacy & data': '隐私与数据',
  'Main navigation': '主导航',
  'IN RHYTHM WITH YOU': '陪你了解自己的节奏',
  'Your body. Your data.': '你的身体，你的数据。',
  'Your records stay in this browser.': '记录保存在当前浏览器中。',
  'No account. No tracking.': '无需账号，不追踪你的活动。',
  'A little understanding, every day.': '每天，多了解自己一点。',
  'Exploring demo data': '正在浏览演示数据',
  'Private by design': '用心守护隐私',
  'You’re in demo mode.': '你正在使用演示模式。',
  'These are fictional records. Your personal records stay separate.': '这些是虚构记录，与你的个人记录分开保存。',
  'Exit demo': '退出演示',
  'Explore demo': '体验演示',
  'Review': '查看',
  'Changes are paused to protect any existing records.': '为保护已有记录，暂时无法修改。',
  'Made for understanding your cycle. Estimates may change; this app does not diagnose conditions or identify fertile days.': '帮助你了解月经周期。预估日期可能变化；本应用不用于诊断疾病或判断易孕期。',
  'Sources & support': '资料来源与就医建议',
  'Know yourself, kindly.': '温柔地了解自己。',
  'Log period': '记录月经',
  'Your cycle story starts here': '从这里开始了解你的月经周期',
  'Cycle day': '周期天数',
  'Days since last start': '距上次开始',
  'your own rhythm': '你自己的节奏',
  'Your story': '你的记录',
  'starts here': '从这里开始',
  'Average cycle': '平均周期长度',
  'Average period': '平均经期长度',
  'Cycles observed': '已记录的周期',
  'days': '天',
  'so far': '个',
  'YOUR NEXT PERIOD': '下次月经预估',
  'Taking a pause': '已暂停预估',
  'More context needed': '还需要更多信息',
  'Getting to know you': '正在了解你的规律',
  'This estimate has passed. You can add a missing period or keep tracking.': '预估日期已过。你可以补充遗漏的月经记录，或继续观察记录。',
  'An estimate, always': '日期仅为预估',
  'How we estimate dates': '我们如何预估日期',
  'A LITTLE MORE IN TUNE': '更了解自己的节奏',
  'Your cycle, understood.': '更懂你的月经周期。',
  'A thoughtful space to notice, learn, and care for yourself.': '安心记录，慢慢了解，好好照顾自己。',
  'TODAY, WITH YOU': '今天，陪伴你',
  'WELCOME TO CYCLEKIND': '欢迎使用 CYCLEKIND',
  'A little care goes a long way.': '一点照顾，让自己舒服一些。',
  'Every cycle tells a story.': '每个周期，都值得被了解。',
  'Start with a small check-in.': '从一次简单的记录开始。',
  'Your notes help you understand what is usual for you, one day at a time.': '每天的一点记录，帮助你慢慢了解自己的日常规律。',
  'Log your first period or add past dates. Your patterns will grow from there.': '记录第一次经期，或补充过去的日期，慢慢发现你的规律。',
  'Update this period': '更新这次经期',
  'Add a period': '添加经期',
  'Log your first period': '记录第一次经期',
  'Your daily check-in': '每日记录',
  'You made a little space for yourself today.': '今天，你为自己留了一点时间。',
  'How does today feel? There’s no right answer.': '今天感觉如何？如实记录就好。',
  'Comfortable': '状态舒适',
  'A little off': '有点不适',
  'A tough day': '比较难受',
  'View or edit today’s check-in': '查看或编辑今天的记录',
  'Add symptoms & a note': '添加症状与备注',
  'A GENTLE REMINDER': '温柔提醒',
  'There’s no perfect cycle. Getting to know yours is what matters.': '每个人的周期都有不同。了解自己的规律，更有意义。',
  'A little guidance, for you': '给你的一点建议',
  'Explore the library': '查看全部建议',
  'Curious how it looks with a little history?': '想看看有了历史记录后是什么样子吗？',
  'SOURCE-LINKED GUIDANCE': '附有资料来源的建议',
  'Your calendar': '你的日历',
  'Your month at a glance': '本月一览',
  'Previous month': '上个月',
  'Next month': '下个月',
  'Logged period': '已记录经期',
  'Estimated start window': '预估开始日期范围',
  'Check-in': '每日记录',
  'Edit period': '编辑经期',
  'No period recorded for this day.': '这一天没有经期记录。',
  'No discomfort': '没有不适',
  'Mild discomfort': '轻度不适',
  'Moderate discomfort': '中度不适',
  'Severe discomfort': '重度不适',
  'Edit check-in': '编辑每日记录',
  'Add check-in': '添加每日记录',
  'Log period here': '从这一天记录经期',
  'Future dates are estimates. You can log a day once it arrives.': '未来日期仅供预估。日期到来后才能添加实际记录。',
  'YOUR HISTORY': '你的历史记录',
  'Patterns, at your pace.': '按自己的节奏，了解规律。',
  'A record of your experience. There is no score to chase.': '记录真实感受，无需追求任何分数。',
  'Recent cycle lengths': '近期周期长度',
  'Start to start · days': '两次经期开始日之间 · 天',
  'Averages use up to six recent cycles. They describe your records and are not a health assessment.': '平均值使用最近最多六个周期计算，仅描述已有记录，不代表健康评估。',
  'Period history': '经期历史',
  'Ongoing': '仍在进行',
  'ongoing': '仍在进行',
  'Still in progress': '经期尚未结束',
  'Edit': '编辑',
  'Delete': '删除',
  'A fresh page.': '从新的一页开始。',
  'Add your recent periods to begin noticing patterns.': '添加最近几次经期，开始了解自己的规律。',
  'Your check-ins': '你的每日记录',
  'Add today’s': '记录今天',
  'No check-ins yet. Start whenever you’re ready.': '还没有每日记录，准备好时随时开始。',
  'KNOWLEDGE, WITH CARE': '有依据，也有温度',
  'A little understanding.': '多了解自己一点。',
  'Practical guidance drawn from public health sources.': '来自公共卫生资料的实用建议。',
  'Suggestions reflect your logged symptoms, not a confirmed cycle phase or diagnosis. Use what feels relevant to you.': '建议依据你记录的症状提供，不能确认周期阶段或作出诊断。请结合自己的情况参考。',
  'When to reach out': '什么时候寻求医疗帮助',
  'Tracking can help you describe changes. A healthcare professional can assess what they mean.': '记录可以帮助你描述身体变化，医护人员能够进一步评估这些变化的意义。',
  'CLEAR ABOUT THE DETAILS': '把细节说清楚',
  'An estimate, explained.': '了解预估是如何得出的。',
  'A useful starting point, with room for real life.': '提供参考，也为真实生活中的变化留出空间。',
  'Built from your own history': '基于你自己的历史记录',
  'Log at least four period starts, giving three start-to-start cycle lengths.': '至少记录四次经期开始日期，得到三个完整的开始日间隔。',
  'We use the median of your latest six available cycle lengths, rounded to a whole day.': '取最近最多六个周期长度的中位数，并四舍五入到整天。',
  'We add that length to your most recent actual period start to estimate the next start.': '在最近一次实际经期开始日期上加上该长度，预估下次开始日期。',
  'The displayed window uses your shortest and longest recent cycles. It is a historical range, not a statistical confidence interval.': '显示的日期范围依据近期最短和最长周期计算。这是历史范围，并非统计学置信区间。',
  'Your next period can fall outside the window. This simple calendar method has not been clinically validated. We do not move the estimate forward when a period hasn’t been recorded.': '下次经期可能落在该范围之外。这种简单的日历预估方法未经临床验证。如果没有新的经期记录，应用不会自动向后推移预估日期。',
  'When we hold an estimate': '什么情况下暂不预估',
  'The app withholds estimates if a recent interval is shorter than 15 days, longer than 90 days, or if the longest and shortest differ by more than 20 days. These are conservative software rules, not medical definitions of a normal cycle. Check for missing entries and keep tracking.': '如果近期有周期短于15天、长于90天，或最长与最短周期相差超过20天，应用会暂不提供预估。这些是保守的软件规则，并非医学上正常周期的定义。请检查是否遗漏记录，并继续观察。',
  'When your pattern is changing': '当你的周期规律发生变化',
  'Hormonal contraception, pregnancy, breastfeeding, and the approach to menopause may make calendar estimates less useful. You can pause estimates in Privacy & data and keep logging.': '激素避孕、怀孕、哺乳或临近绝经期，都可能降低日历预估的参考价值。你可以在“隐私与数据”中暂停预估，同时继续记录。',
  'This app does not identify fertile days or confirm ovulation. Do not use its date estimates to prevent pregnancy.': '本应用不能判断易孕期或确认排卵。请勿将预估日期用于避孕。',
  'NHS guidance': '英国 NHS 指南',
  'Learn about cycle variation · Office on Women’s Health': '了解周期变化 · 美国妇女健康办公室',
  'Back to overview': '返回概览',
  'ALWAYS YOURS': '始终属于你',
  'Simple controls, and a clear explanation of where your records live.': '简单的数据管理，清楚了解记录保存在哪里。',
  'On this device': '保存在这台设备上',
  'Your period dates, symptoms and notes are saved in this browser’s local storage. The app sends none of these records to a server and uses no analytics or external AI.': '经期日期、症状和备注保存在当前浏览器的本地存储中。应用不会将这些记录发送到服务器，也不使用分析追踪或外部 AI。',
  'Anyone with access to this browser profile may see your records. Browser storage is not encrypted by the app. Clearing browser data, changing browsers, or using a different site address creates an empty tracker.': '能够访问这个浏览器用户配置的人可能看到你的记录。应用不会对浏览器存储进行加密。清除浏览器数据、更换浏览器或使用不同的网站地址，会打开一个没有原有记录的追踪器。',
  'Export a backup before moving to another device or browser. Private browsing may erase records when you close it.': '更换设备或浏览器之前，请先导出备份。隐私浏览模式可能在关闭后清除记录。',
  'Export backup': '导出备份',
  'Import backup': '导入备份',
  'Backups contain readable personal data. Keep the downloaded file somewhere private. Import replaces the current records after confirmation.': '备份包含可直接阅读的个人数据，请妥善私密保存。确认导入后，备份会替换当前记录。',
  'Make it fit your life': '按你的生活来设置',
  'Pause period estimates': '暂停经期预估',
  'Useful when your cycle is changing, during pregnancy or breastfeeding, or when you simply want to log without predictions.': '适合周期发生变化、怀孕或哺乳期间，也适合只想记录而不需要预估的时候。',
  'Read the estimation method': '了解预估方法',
  'Try it first': '先体验一下',
  'Explore fictional cycle history. Demo changes are temporary and kept separate from your records.': '浏览虚构的周期历史。演示模式的修改仅临时保存，与你的个人记录分开。',
  'A fresh start': '重新开始',
  'Delete every period, check-in and preference saved by this app in this browser. This cannot be undone without a backup.': '删除本应用在当前浏览器中保存的全部经期、每日记录和偏好设置。没有备份将无法恢复。',
  'Delete all records': '删除全部记录',
  'Delete all demo records': '删除全部演示记录',
  'About Cyclekind': '关于 Cyclekind',
  'Cyclekind helps you record your experiences, estimate dates and find general information. Health guidance links directly to its sources so you can read the context.': 'Cyclekind 帮助你记录感受、预估日期并了解一般健康知识。每条健康建议都附有原始资料链接，方便你阅读完整内容。',
  'The hosted app may require sign-in for access. That access check is separate from your records, which stay in this browser.': '托管网站可能要求登录后访问。访问验证与你的记录分开；记录仍保存在当前浏览器中。',
  'Read sources & support': '查看资料来源与就医建议',
  'ONE DAY AT A TIME': '一天一天，慢慢了解',
  'Your month, in view.': '看见这个月的自己。',
  'Select a day to add a note or view your records.': '选择日期，添加备注或查看记录。',
  'Skip to content': '跳转到主要内容',
  'YOUR CYCLE': '你的月经周期',
  'Close dialog': '关闭对话框',
  'Log your period': '记录经期',
  'Update your period': '更新经期',
  'A small check-in. A clearer picture over time.': '简单记录，慢慢看清自己的规律。',
  'First day of bleeding': '经期开始日期',
  'My period is still going': '我的经期还未结束',
  'Last day of bleeding': '经期结束日期',
  'Log spotting as a symptom. Cycle estimates use the first day of your period.': '少量点滴出血请记录为症状。周期预估以经期第一天为依据。',
  'Cancel': '取消',
  'Save period': '保存经期',
  'DAILY CHECK-IN': '每日记录',
  'How are you feeling?': '你感觉怎么样？',
  'Your experience matters. Notice it, without judging it.': '你的感受很重要。如实记录，无需评判。',
  'Date': '日期',
  'What are you noticing?': '你注意到了哪些症状？',
  'Overall discomfort': '整体不适程度',
  'None': '无不适',
  'Mild — manageable': '轻度 — 可以应对',
  'Moderate — affects my day': '中度 — 影响日常生活',
  'Severe — stops usual activities': '重度 — 无法进行日常活动',
  'A note to yourself': '给自己的备注',
  '(optional)': '（选填）',
  'What helped? What felt different?': '什么让你感觉好一些？有什么变化？',
  'Save check-in': '保存每日记录',
  'PLEASE CONFIRM': '请确认',
  'Confirm': '确认',
  'This app needs JavaScript to keep records on your device and calculate estimates.': '本应用需要启用 JavaScript，才能在设备上保存记录并计算预估日期。',
  'Cramps': '痛经',
  'Bloating': '腹胀',
  'Headache': '头痛',
  'Low energy': '乏力',
  'Mood changes': '情绪变化',
  'Breast tenderness': '乳房胀痛',
  'Spotting': '点滴出血',
  'Resolve the storage issue in Privacy & data before adding records.': '请先到“隐私与数据”解决存储问题，再添加记录。',
  'Open Privacy & data to resolve the storage issue first.': '请先打开“隐私与数据”解决存储问题。',
  'Demo mode · fictional records': '演示模式 · 虚构记录',
  'Back to your personal records': '已返回你的个人记录',
  'Backup downloaded. Store it privately.': '备份已下载，请妥善私密保存。',
  'Delete this period?': '删除这次经期记录？',
  'This record will be removed and your estimates will be recalculated.': '这条记录将被删除，预估日期会重新计算。',
  'Period removed': '经期记录已删除',
  'Delete period': '删除经期',
  'Delete this check-in?': '删除这条每日记录？',
  'The symptoms and note for this day will be removed.': '这一天的症状与备注将被删除。',
  'Check-in removed': '每日记录已删除',
  'Delete check-in': '删除每日记录',
  'Delete all records?': '删除全部记录？',
  'All period dates, symptoms, notes and preferences in this tracker will be permanently removed. Export a backup first if you want to keep them.': '追踪器中的全部经期日期、症状、备注和偏好设置将被永久删除。如果想保留，请先导出备份。',
  'All records deleted': '全部记录已删除',
  'Period saved': '经期已保存',
  'Check-in saved': '每日记录已保存',
  'Choose a valid date today or earlier.': '请选择今天或更早的有效日期。',
  'Replace this day’s check-in?': '替换这一天的每日记录？',
  'Replace check-in': '替换每日记录',
  'Estimates paused': '已暂停预估',
  'Estimates resumed': '已恢复预估',
  'That file is too large. Choose a Cyclekind backup under 10 MB.': '文件过大，请选择小于 10 MB 的 Cyclekind 备份。',
  'Replace current records?': '替换当前记录？',
  'Import & replace': '导入并替换',
  'Backup imported': '备份已导入',
  'Records updated in another tab': '记录已在另一个标签页中更新',
  'The backup is too large. Use a Cyclekind backup with at most 10,000 records.': '备份过大，请使用最多包含 10,000 条记录的 Cyclekind 备份。',
  'The records are not valid JSON. Choose an unmodified Cyclekind backup.': '记录不是有效的 JSON 文件，请选择未经修改的 Cyclekind 备份。',
  'Today must be a valid calendar date.': '当前日期必须是有效的日历日期。',
  'Choose a Cyclekind backup containing a records object.': '请选择包含有效记录数据的 Cyclekind 备份。',
  'This backup version is not supported. Expected Cyclekind version 1.': '不支持此备份版本，请使用 Cyclekind 第 1 版备份。',
  'The backup must contain period records and daily check-ins.': '备份必须包含经期记录和每日记录列表。',
  'The backup exceeds the limit of 10,000 total records.': '备份超过了总计 10,000 条记录的上限。',
  'Backup settings must be an object.': '备份中的设置格式无效。',
  'The pause estimates setting must be true or false.': '暂停预估设置必须为开启或关闭。',
  'Period record IDs must be unique.': '经期记录的编号不能重复。',
  'A daily check-in cannot be recorded in the future.': '不能为未来日期添加每日记录。',
  'Only one daily check-in can be saved for each date.': '每个日期只能保存一条每日记录。',
  'A check-in cannot contain duplicate symptoms.': '一条每日记录不能包含重复症状。',
  'Check-in discomfort must be a whole number from 0 to 3.': '不适程度必须是 0 至 3 之间的整数。',
  'Each check-in note must be text of at most 1,000 characters.': '每条备注必须为文字，且不超过 1,000 个字符。',
  'This browser is not allowing access to device storage. Enable site storage, or use a browser that allows it, before recording personal data.': '浏览器不允许访问设备存储。请启用网站存储，或使用允许存储的浏览器，再记录个人数据。',
  'Your changes could not be saved on this device. Storage may be full or blocked. Export your existing records before changing browser settings.': '无法在此设备上保存修改，存储空间可能已满或被阻止。更改浏览器设置前，请先导出现有记录。',
  'Storage unavailable.': '存储不可用。',
  'Invalid calendar date.': '日历日期无效。',
  'Invalid date.': '日期无效。',
  'Date is outside the supported calendar.': '日期超出支持范围。',
  'A valid date and whole number of days are required.': '请输入有效日期和整数天数。',
  'Result is outside the supported calendar.': '计算结果超出支持的日期范围。',
  'Two valid calendar dates are required.': '需要两个有效的日历日期。',
  'Period record must be an object.': '经期记录格式无效。',
  'Record ID must be a nonempty string.': '记录编号必须是非空文字。',
  'Enter a valid start date.': '请输入有效的开始日期。',
  'Enter a valid end date or mark the period as ongoing.': '请输入有效的结束日期，或标记为经期尚未结束。',
  'A recorded period cannot start in the future.': '经期开始日期不能晚于今天。',
  'A recorded period cannot end in the future.': '经期结束日期不能晚于今天。',
  'End date must be on or after the start date.': '结束日期不能早于开始日期。',
  'Existing period records must be a list.': '已有经期记录必须是列表格式。',
  'An existing period record is invalid. Review it before saving.': '已有经期记录无效，请检查后再保存。',
  'Finish the existing ongoing period before starting another.': '请先填写当前经期的结束日期，再添加新的经期。',
  'These dates overlap an existing period. Edit that record or choose different dates.': '这些日期与已有经期重叠，请编辑已有记录或选择其他日期。',
  'Period records must be a list.': '经期记录必须是列表格式。',
  'Based on your shortest and longest recent cycles; actual dates may fall outside this range.': '范围依据近期最短和最长周期计算，实际日期可能落在范围之外。',
  'Review invalid or overlapping records before estimating the next period.': '请先检查无效或重叠的记录，再预估下次经期。',
  'Estimates are paused. Your records are still available.': '已暂停预估，你仍然可以查看记录。',
  'Log at least four period start dates so there are three completed start-to-start intervals to use.': '至少记录四次经期开始日期，才能使用三个完整的周期间隔进行预估。',
  'Your recent dates vary too much, or include a long or short gap, for this simple estimate. Check for missing records; this message is not a diagnosis.': '近期日期变化较大，或间隔过长、过短，暂不适合使用这种简单预估。请检查是否遗漏记录；这条提示不代表诊断。',
  'These dates are outside the supported estimation range.': '这些日期超出支持的预估范围。',
  'Your last recorded start is beyond the window suggested by recent history. Log any missing period; the estimate has not been moved forward.': '根据最近一次记录推算的日期范围已经过去。请补充遗漏的经期；应用没有自动向后推移预估日期。',
  'Language': '语言',
  'Switch language': '切换语言',
  'NHS': '英国 NHS',
  'U.S. Office on Women’s Health': '美国妇女健康办公室',
  'American College of Obstetricians and Gynecologists': '美国妇产科医师学会',
}));

function translateCore(text) {
  if (zh.has(text)) return zh.get(text);
  let match;
  if ((match = text.match(/^(.+): (\d+) of (\d+) check-ins$/))) return `${translateCore(match[1])}：${match[2]} / ${match[3]} 次每日记录`;
  if ((match = text.match(/^Started (.+)$/))) return `开始于 ${match[1]}`;
  if ((match = text.match(/^(\d+) of 4 starts logged$/))) return `已记录 ${match[1]} / 4 次开始日`;
  if ((match = text.match(/^(\d+) cycles · recorded history$/))) return `${match[1]} 个周期 · 历史记录`;
  if ((match = text.match(/^(\d+) check-ins · recorded history$/))) return `${match[1]} 次每日记录 · 历史记录`;
  if ((match = text.match(/^(\d+) of (\d+) check-ins$/))) return `${match[1]} / ${match[2]} 次每日记录`;
  if ((match = text.match(/^Estimated start: (.+) to (.+)$/))) return `预估开始日：${match[1]}至${match[2]}`;
  if ((match = text.match(/^(\d+) days$/))) return `${match[1]} 天`;
  if ((match = text.match(/^(\d+) starts logged$/))) return `已记录 ${match[1]} 次开始日`;
  if ((match = text.match(/^(.*?)\s*↗$/s))) return `${translateCore(match[1].trimEnd())} ↗`;
  if ((match = text.match(/^(.+) Changes are paused to protect any existing records\.$/s))) return `${translateCore(match[1])} 为保护已有记录，暂时无法修改。`;
  if ((match = text.match(/^Saved records could not be opened: (.+) Your stored copy has not been changed\.$/s))) return `无法打开已保存的记录：${translateCore(match[1])} 存储中的原始副本未被修改。`;
  if ((match = text.match(/^Cannot import: (.+)$/s))) return `无法导入：${translateCore(match[1])}`;
  if (/^(?:Unexpected (?:token|end|non-whitespace)|Expected (?:property name|double-quoted|','|':')|Bad (?:control|escaped)|Unterminated string).*JSON/is.test(text) || /is not valid JSON/i.test(text)) return '文件内容不是有效的 JSON，请选择未经修改的 Cyclekind 备份。';
  if ((match = text.match(/^Day (\d+) since your last logged period start$/))) return `距离上次记录的经期开始日第 ${match[1]} 天`;
  if ((match = text.match(/^Around (.+) · based on (\d+) recent cycles\.$/))) return `约 ${match[1]} · 根据近期 ${match[2]} 个周期预估。`;
  if ((match = text.match(/^Your period started (.+)\. Take a moment to notice how you feel\.$/))) return `本次经期开始于 ${match[1]}。花一点时间，感受今天的自己。`;
  if ((match = text.match(/^Period logged: (.+)$/))) return `已记录经期：${match[1].replace(/ongoing$/, '仍在进行')}`;
  if ((match = text.match(/^Recent cycle lengths: (.+) days$/))) return `近期周期长度：${match[1]} 天`;
  if ((match = text.match(/^Cycle (\d+)$/))) return `周期 ${match[1]}`;
  if ((match = text.match(/^(\d+) records$/))) return `${match[1]} 条记录`;
  if ((match = text.match(/^(\d+) days of bleeding$/))) return `出血 ${match[1]} 天`;
  if ((match = text.match(/^(.+) – Ongoing$/))) return `${match[1]} – 仍在进行`;
  if ((match = text.match(/^(No|Mild|Moderate|Severe) discomfort(?: · (.*))?$/))) return `${translateCore(`${match[1]} discomfort`)}${match[2] ? ' · ' + match[2].split(', ').map(translateCore).join('、') : ''}`;
  if ((match = text.match(/^Sources checked (.+)\. This describes a source check, not a clinical review\. Information is general education; suitability depends on your situation\.$/))) return `资料来源核对日期：${match[1]}。这表示已核对来源，并不代表临床审核。内容用于一般健康教育，是否适用取决于你的具体情况。`;
  if ((match = text.match(/^A check-in already exists for (.+)\. Replace its symptoms and note with this entry\?$/))) return `${match[1]} 已有一条每日记录。要用本次内容替换已有症状与备注吗？`;
  if ((match = text.match(/^Import (\d+) periods and (\d+) check-ins\. This replaces the (demo|personal) records currently in this browser\.$/))) return `将导入 ${match[1]} 条经期记录和 ${match[2]} 条每日记录，并替换当前浏览器中的${match[3] === 'demo' ? '演示' : '个人'}记录。`;
  if ((match = text.match(/^Period (\d+) must be a record object\.$/))) return `第 ${match[1]} 条经期记录格式无效。`;
  if ((match = text.match(/^Period (\d+) has an invalid record ID\.$/))) return `第 ${match[1]} 条经期记录的编号无效。`;
  if ((match = text.match(/^Period (\d+): (.+)$/s))) return `第 ${match[1]} 条经期记录：${translateCore(match[2])}`;
  if ((match = text.match(/^Check-in (\d+) must be a record object\.$/))) return `第 ${match[1]} 条每日记录格式无效。`;
  if ((match = text.match(/^Check-in (\d+) has an invalid date\.$/))) return `第 ${match[1]} 条每日记录的日期无效。`;
  if ((match = text.match(/^Check-in (\d+) contains an unknown symptom\.$/))) return `第 ${match[1]} 条每日记录包含无法识别的症状。`;
  if ((match = text.match(/^Estimated from (\d+) recent start-to-start intervals\.$/))) return `根据近期 ${match[1]} 个经期开始日间隔预估。`;
  // Calendar dates are formatted by the app using the chosen locale.
  if (/, (?:logged period|estimated start window|symptoms logged)/.test(text)) {
    return text.replace(/, logged period/g, '，已记录经期').replace(/, estimated start window/g, '，预估开始日期范围').replace(/, symptoms logged/g, '，已记录症状');
  }
  // A form can display several validation sentences in one text node.
  const sentences = text.match(/[^.!?]+[.!?](?:\s+|$)/g);
  if (sentences?.length > 1 && sentences.join('') === text) {
    const pieces = sentences.map(sentence => sentence.trim());
    if (pieces.every(piece => zh.has(piece))) return pieces.map(piece => zh.get(piece)).join(' ');
  }
  return text;
}

/** Translate exact UI copy, retaining leading and trailing whitespace. */
export function translate(text, language) {
  if (typeof text !== 'string' || language !== 'zh') return text;
  const core = text.trim();
  if (!core) return text;
  const start = text.indexOf(core);
  return text.slice(0, start) + translateCore(core) + text.slice(start + core.length);
}

const textMemory = new WeakMap();
const attributeMemory = new WeakMap();
const SKIP = '.note-text,textarea,script,style,[data-no-translate]';

function updateText(node, language) {
  const parent = node.parentElement;
  if (!parent || parent.closest(SKIP)) return;
  const value = node.nodeValue;
  const memory = textMemory.get(node);
  const original = memory && value === memory.lastTranslated ? memory.original : value;
  let next = translate(original, language);
  if (language === 'zh' && parent.parentElement?.classList.contains('weekdays')) {
    const index = [...parent.parentElement.children].indexOf(parent);
    next = ['一', '二', '三', '四', '五', '六', '日'][index] ?? next;
  }
  textMemory.set(node, { original, lastTranslated: next });
  if (value !== next) node.nodeValue = next;
}

function updateAttributes(element, language) {
  if (element.closest('.note-text,script,style,[data-no-translate]')) return;
  let memory = attributeMemory.get(element);
  if (!memory) { memory = new Map(); attributeMemory.set(element, memory); }
  for (const name of ['aria-label', 'placeholder', 'title']) {
    if (!element.hasAttribute(name)) { memory.delete(name); continue; }
    const value = element.getAttribute(name);
    const previous = memory.get(name);
    const original = previous && value === previous.lastTranslated ? previous.original : value;
    const next = translate(original, language);
    memory.set(name, { original, lastTranslated: next });
    if (value !== next) element.setAttribute(name, next);
  }
}

/**
 * Safe to call after every render or form update. WeakMaps preserve English for
 * unchanged nodes and detect new programmatic text before translating again.
 * Form values, user notes, IDs, URLs, and all record data are left untouched.
 */
export function localizeTree(root, language) {
  if (!root) return;
  if (root.nodeType === 3) { updateText(root, language); return; }
  if (root.nodeType === 1) updateAttributes(root, language);
  const document = root.ownerDocument || root;
  const walker = document.createTreeWalker(root, 1 | 4);
  let node;
  while ((node = walker.nextNode())) {
    if (node.nodeType === 3) updateText(node, language);
    else updateAttributes(node, language);
  }
}

/** A separate preference key keeps the record/backup schema unchanged. */
export function readLanguage() {
  try {
    const saved = globalThis.localStorage?.getItem('cyclekind.language');
    if (saved === 'en' || saved === 'zh') return saved;
  } catch { /* A blocked preference store must not break the app. */ }
  return /^zh/i.test(globalThis.navigator?.language || '') ? 'zh' : 'en';
}

export function writeLanguage(language) {
  if (language !== 'en' && language !== 'zh') return false;
  try {
    if (!globalThis.localStorage) return false;
    globalThis.localStorage.setItem('cyclekind.language', language);
    return true;
  } catch {
    return false;
  }
}
