// Plain-language summaries checked against the linked sources on 2026-10-08.
// This review date describes a source check, not clinical validation or endorsement.
export const contentReviewedOn = '2026-10-08';

export const sourceList = [
  { id: 'nhs-pain', title: 'NHS · Period pain', titleZh: 'NHS · 痛经', url: 'https://www.nhs.uk/symptoms/period-pain/', publisher: 'NHS', publisherZh: '英国国民保健署（NHS）', reviewedOn: contentReviewedOn },
  { id: 'nhs-pms', title: 'NHS · PMS (premenstrual syndrome)', titleZh: 'NHS · 经前综合征（PMS）', url: 'https://www.nhs.uk/conditions/pre-menstrual-syndrome/', publisher: 'NHS', publisherZh: '英国国民保健署（NHS）', reviewedOn: contentReviewedOn },
  { id: 'nhs-heavy', title: 'NHS · Heavy periods', titleZh: 'NHS · 月经过多', url: 'https://www.nhs.uk/conditions/heavy-periods/', publisher: 'NHS', publisherZh: '英国国民保健署（NHS）', reviewedOn: contentReviewedOn },
  { id: 'nhs-irregular', title: 'NHS · Irregular periods', titleZh: 'NHS · 月经不规律', url: 'https://www.nhs.uk/symptoms/irregular-periods/', publisher: 'NHS', publisherZh: '英国国民保健署（NHS）', reviewedOn: contentReviewedOn },
  { id: 'owh-cycle', title: 'Office on Women’s Health · Your menstrual cycle', titleZh: '美国女性健康办公室 · 了解月经周期', url: 'https://womenshealth.gov/menstrual-cycle/your-menstrual-cycle', publisher: 'U.S. Office on Women’s Health', publisherZh: '美国女性健康办公室', reviewedOn: contentReviewedOn },
  { id: 'nhs-anaemia', title: 'NHS · Iron deficiency anaemia', titleZh: 'NHS · 缺铁性贫血', url: 'https://www.nhs.uk/conditions/iron-deficiency-anaemia/', publisher: 'NHS', publisherZh: '英国国民保健署（NHS）', reviewedOn: contentReviewedOn },
  { id: 'nhs-fertility', title: 'NHS · Natural family planning', titleZh: 'NHS · 自然避孕法', url: 'https://www.nhs.uk/contraception/methods-of-contraception/natural-family-planning/', publisher: 'NHS', publisherZh: '英国国民保健署（NHS）', reviewedOn: contentReviewedOn },
  { id: 'nhs-missed', title: 'NHS · Missed or late periods', titleZh: 'NHS · 月经未至或推迟', url: 'https://www.nhs.uk/symptoms/missed-or-late-periods/', publisher: 'NHS', publisherZh: '英国国民保健署（NHS）', reviewedOn: contentReviewedOn },
  { id: 'nhs-unusual', title: 'NHS · Bleeding between periods or after sex', titleZh: 'NHS · 非经期出血或性交后出血', url: 'https://www.nhs.uk/symptoms/vaginal-bleeding-between-periods-or-after-sex/', publisher: 'NHS', publisherZh: '英国国民保健署（NHS）', reviewedOn: contentReviewedOn },
  { id: 'acog-bleeding', title: 'ACOG · Abnormal uterine bleeding', titleZh: 'ACOG · 异常子宫出血', url: 'https://www.acog.org/womens-health/faqs/abnormal-uterine-bleeding', publisher: 'American College of Obstetricians and Gynecologists', publisherZh: '美国妇产科医师学会（ACOG）', reviewedOn: contentReviewedOn },
];

const cards = [
  {
    id: 'small-notes', trigger: 'general', title: 'Small notes, useful patterns',
    titleZh: '一点记录，慢慢看见规律',
    text: 'Record when bleeding starts and ends, how heavy it feels, and any symptoms that affect your day. A few months of notes can make it easier to describe changes to a healthcare professional.',
    textZh: '记下月经开始和结束的日期、经量感受，以及影响日常生活的症状。积累几个月的记录，能帮助你向医护人员更清楚地描述变化。',
    sourceIds: ['owh-cycle'],
  },
  {
    id: 'cramp-comfort', trigger: 'cramps', title: 'A little warmth may help',
    titleZh: '一点温暖，或许能缓解不适',
    text: 'For period cramps, try a warm bath or a heat pad or hot-water bottle wrapped in a towel. Gentle movement, such as walking or yoga, may also ease discomfort if it feels comfortable.',
    textZh: '痛经时，可以尝试温水浴，或用毛巾包裹热敷垫、热水袋来热敷。在身体感觉舒适的前提下，散步、瑜伽等轻柔活动也可能缓解不适。',
    sourceIds: ['nhs-pain'],
  },
  {
    id: 'mood-patterns', trigger: 'mood', title: 'Notice how you feel',
    titleZh: '留意自己的感受',
    text: 'Mood and sleep symptoms can occur before a period. Regular activity, enough sleep, and stress-reducing activities may help. Track symptoms for at least two cycles; seek support if they disrupt daily life.',
    textZh: '月经前可能出现情绪变化或睡眠问题。规律活动、充足睡眠和减压活动可能有所帮助。建议至少记录两个周期；如果症状影响日常生活，请寻求专业支持。',
    sourceIds: ['nhs-pms'],
  },
  {
    id: 'fatigue-support', trigger: 'fatigue', title: 'Persistent tiredness deserves attention',
    titleZh: '持续疲倦，值得关注',
    text: 'Heavy periods can contribute to iron deficiency anaemia. If tiredness persists, especially with breathlessness or noticeable heartbeats, arrange a medical review. A blood test can help check the cause.',
    textZh: '月经过多可能导致缺铁性贫血。如果疲倦持续存在，尤其伴随气短或心悸，请预约就医。血液检查可帮助查明原因。',
    sourceIds: ['nhs-anaemia'],
  },
  {
    id: 'heavy-flow', trigger: 'heavy', title: 'When flow affects your day',
    titleZh: '当经量影响日常生活',
    text: 'Changing a pad or tampon every 1–2 hours, bleeding for more than 7 days, or leaking onto clothes can be signs of heavy periods. Talk with a clinician if bleeding affects your daily life or keeps happening.',
    textZh: '每 1–2 小时就需要更换卫生巾或卫生棉条、出血超过 7 天，或经血渗到衣物上，都可能是月经过多的表现。如果出血影响日常生活或反复发生，请咨询医生。',
    sourceIds: ['nhs-heavy'],
  },
  {
    id: 'patterns-can-change', trigger: 'general', title: 'Your pattern can change',
    titleZh: '月经规律也会变化',
    text: 'Stress, hormonal contraception, puberty and the approach to menopause can change period timing. Speak with a clinician if your usual pattern changes or your periods become irregular.',
    textZh: '压力、激素避孕方法、青春期和接近绝经期，都可能影响月经时间。如果原有规律发生变化，或月经变得不规律，请咨询医生。',
    sourceIds: ['nhs-irregular'],
  },
  {
    id: 'missed-period', trigger: 'general', title: 'A late date is not a diagnosis',
    titleZh: '推迟的日期不等于诊断',
    text: 'Periods can be late for several reasons, including pregnancy, stress and hormonal contraception. A calendar estimate cannot explain why. Arrange a medical review if you miss three periods in a row.',
    textZh: '怀孕、压力、激素避孕方法等多种原因都可能让月经推迟，日历估算无法判断原因。如果连续三次月经未至，请预约就医。',
    sourceIds: ['nhs-missed'],
  },
];

export const guidanceCards = cards.map(card => ({
  ...card,
  reviewedOn: contentReviewedOn,
  sourceTitle: sourceList.find(source => source.id === card.sourceIds[0]).title,
  sourceTitleZh: sourceList.find(source => source.id === card.sourceIds[0]).titleZh,
  sourceUrl: sourceList.find(source => source.id === card.sourceIds[0]).url,
  sources: card.sourceIds.map(id => sourceList.find(source => source.id === id)),
}));

export const predictionNotes = [
  {
    id: 'estimate-only',
    text: 'Dates are estimates from your recorded history. Cycle length can change from month to month, and your next period may fall outside the displayed range.',
    textZh: '日期根据你的历史记录估算。每个月的周期长度可能不同，下次月经也可能在显示的范围之外开始。',
    sourceIds: ['owh-cycle'],
  },
  {
    id: 'changing-pattern',
    text: 'Predictions may be less useful when your pattern is changing, including with hormonal contraception, pregnancy, breastfeeding or the approach to menopause.',
    textZh: '当月经规律正在变化时，例如使用激素避孕方法、怀孕、哺乳或接近绝经期，估算的参考价值可能降低。',
    sourceIds: ['nhs-irregular', 'nhs-missed'],
  },
  {
    id: 'not-contraception',
    text: 'This tracker does not identify fertile days or confirm ovulation. Do not use its period estimates to prevent pregnancy.',
    textZh: '本工具无法识别易孕期，也无法确认排卵。请勿将月经估算用于避孕。',
    sourceIds: ['nhs-fertility'],
  },
];

// Show these in a clearly labeled care/help panel. Logging a symptom alone must
// not claim that an emergency or a condition has been detected.
export const careGuidance = [
  {
    id: 'bleeding-emergency', level: 'emergency', title: 'Heavy bleeding with concerning symptoms',
    titleZh: '大量出血并伴有警示症状',
    text: 'Seek emergency care if you are changing a pad or tampon every hour for more than two hours and also have chest pain, breathlessness, or feel lightheaded or dizzy.',
    textZh: '如果每小时都需要更换卫生巾或卫生棉条，且持续超过两小时，同时出现胸痛、气短、头晕或眩晕中的任何一种症状，请立即前往急诊。',
    sourceIds: ['acog-bleeding'],
  },
  {
    id: 'severe-pain', level: 'urgent', title: 'Severe or unusual pain',
    titleZh: '剧烈或异常疼痛',
    text: 'Get urgent medical help for severe or worse-than-usual pelvic or period pain when pain relief has not helped.',
    textZh: '如果盆腔疼痛或痛经很剧烈，或比平时更严重，而且止痛处理未能缓解，请尽快就医。',
    sourceIds: ['nhs-pain'],
  },
  {
    id: 'missed-bleeding-pain', level: 'urgent', title: 'Missed period, unusual bleeding and pain',
    titleZh: '月经未至后，出现异常出血和疼痛',
    text: 'Get urgent medical help if a recently missed period is followed by unusual bleeding and abdominal or pelvic pain.',
    textZh: '如果近期月经未至，随后出现异常出血，并伴有腹部或盆腔疼痛，请尽快就医。',
    sourceIds: ['nhs-unusual'],
  },
  {
    id: 'disruptive-symptoms', level: 'routine', title: 'Symptoms deserve support',
    titleZh: '不适值得获得帮助',
    text: 'Book a medical review for symptoms that interrupt everyday activities, or bleeding between periods or after sex.',
    textZh: '如果症状影响日常活动，或出现非经期出血、性交后出血，请预约就医。',
    sourceIds: ['nhs-pain', 'nhs-heavy', 'nhs-unusual'],
  },
];
