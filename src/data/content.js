// 사이트의 모든 내용은 이 파일 하나에서 관리합니다.
// 프로젝트 상세는 항상 문제 정의, 한 일, 결과(수치) 순서로 작성합니다.
// 표기 규칙: 대시(—, –)와 가운뎃점(·), 화살표, 둥근 따옴표는 쓰지 않습니다.

export const profile = {
  name: '김용민',
  nameEn: 'Kim Yongmin',
  affiliation: '한라대학교 IT소프트웨어학과, 동아리 HAI',
  tagline: '온디바이스에서 동작하는 AI를 만듭니다.',
  email: 'h4ruming@gmail.com',
  github: 'https://github.com/H4RUming',
};

export const stats = [
  { label: '특허 출원', value: 1 },
  { label: '대상', value: 2 },
  { label: '최우수상', value: 2 },
  { label: '우수상', value: 1 },
  { label: '팀장 프로젝트', value: 2 },
];

export const kinds = {
  project: '프로젝트',
  award: '수상',
  patent: '특허',
  contest: '대회',
  github: 'GitHub',
};

// 화면에서는 연도, 월 순으로 자동 정렬된다 (월이 없으면 그 해 맨 위)
// month: null 이면 월 미표기
// kind: project / award / patent / contest / github
// project: 연결된 상세 페이지 slug (없으면 펼침 없음)
// brief: 펼쳤을 때 보이는 문제 / 한 일 / 결과 한 줄씩
export const timeline = [
  {
    year: 2026, month: null, kind: 'project',
    title: 'RecallFrame',
    org: '가족 화상대화 액자, HL Future Day 2026 New Business Idea',
    badge: '팀장',
    project: 'recallframe',
  },
  {
    year: 2026, month: null, kind: 'contest',
    title: 'SK하이닉스 AI 해커톤 2026',
    org: '기초 지식 테스트와 AI 활용 문제 풀이 예선',
    badge: '1차 예선 통과',
  },
  {
    year: 2026, month: null, kind: 'project',
    title: 'SYNAPSE',
    org: '보행자 행동 예측 교통사고 예방 AI, 2026 캡스톤디자인 페스티벌',
    badge: '팀장',
    project: 'synapse',
  },
  {
    year: 2026, month: 7, kind: 'contest',
    title: '2026 SW중심대학 디지털 경진대회 AI부문',
    org: 'DACON, AI 코딩 에이전트 다음 행동 예측, 팀장',
    badge: '예선 30위',
    project: 'dacon-agent',
  },
  {
    year: 2026, month: 7, kind: 'patent',
    title: '회상치료를 지원하는 온디바이스 화상대화 장치 및 그 방법',
    org: '특허 출원 10-2026-0127005',
    badge: '발명자',
    project: 'recallframe',
    brief: {
      problem: '치매 어르신의 회상치료를 일상에서 반복해 줄 사람이 없다.',
      action: '가족의 얼굴과 목소리로 대화하는 온디바이스 화상대화 방법을 고안했다.',
      result: '2026년 7월 10일 출원, 심사청구 완료 (한라대학교 산학협력단).',
    },
  },
  {
    year: 2025, month: 11, kind: 'award',
    title: '2025 한라인재페스티벌 산학협력프로젝트',
    org: '한라대학교 총장상, 온비IT 팀',
    badge: '대상',
    project: 'pipe-robot',
  },
  {
    year: 2025, month: 11, kind: 'award',
    title: '2025 한라인재페스티벌 산학협력프로젝트',
    org: '한라대학교 SW중심대학사업단, H100 팀',
    badge: '최우수상',
  },
  {
    year: 2025, month: 11, kind: 'award',
    title: '2025 캡스톤디자인 아이디어 경진대회',
    org: '한라대학교 공학교육혁신센터, ARGOS 팀',
    badge: '최우수상',
    project: 'synapse',
  },
  {
    year: 2025, month: 10, kind: 'award',
    title: 'HL D&I한라와 함께하는 한라대학교 ESG 아이디어 공모전',
    org: 'HAI_Medicare 팀',
    badge: '대상',
    project: 'medicare',
  },
  {
    year: 2024, month: 11, kind: 'award',
    title: '제10회 HL Future Day (Track III)',
    org: 'HL홀딩스, TruthLens',
    badge: '우수상',
  },

  // GitHub 공개 저장소
  {
    kind: 'github',
    year: 2026, month: 10,
    title: 'Velyn',
    org: '사진이 기기 밖으로 나가지 않는 iPhone 사진 편집기',
    badge: 'Swift',
    brief: {
      problem: '고급 사진 편집 앱은 대부분 사진을 서버로 올리거나 계정을 요구하고, 일반 SDR 사진은 HDR 화면의 밝기 여유를 쓰지 못한다.',
      action: 'RAW 현상, 색 보정, 로컬 마스크, 객체 제거, 심도 블러를 모두 기기 안에서 처리하는 편집 엔진을 만들었다. SDR 사진에서 HDR 게인맵을 예측하는 GMNet을 실제 카메라 HDR/SDR 사진 쌍으로 파인튜닝해 Core ML로 넣었다.',
      result: '132장 평가에서 평균 휘도 오차 0.488 EV를 0.328 EV로 줄였다. 엔진 테스트 83개 통과, v1.2.0 릴리스. 파인튜닝한 모델은 PyTorch 가중치와 Core ML 패키지로 Hugging Face에 공개했다.',
    },
    tags: ['Swift', 'Core ML', 'On-Device ML', 'HDR Gain Map', 'AOT-GAN', 'Depth Anything V2'],
    links: [
      { label: 'GitHub 저장소', url: 'https://github.com/H4RUming/Velyn' },
      { label: 'Hugging Face 모델 (GMNet Camera v1)', url: 'https://huggingface.co/H4RUming/Velyn-GMNet-Camera-v1' },
    ],
  },
  {
    kind: 'github',
    year: 2026, month: 10,
    title: 'Pinpage',
    org: '막힌 문제의 근거를 학습 자료 속 정확한 위치로 짚어주는 macOS 학습 앱',
    badge: 'Swift',
    brief: {
      problem: 'AI에게 바로 답을 물으면 근거가 자료 어디에 있는지 알 수 없고, 그럴듯한 오답도 그대로 믿게 된다.',
      action: 'PDF와 코드를 문단 단위로 색인하고, 한글 음절 바이그램 BM25와 Core ML 임베딩을 섞은 하이브리드 검색을 만들었다. LLM 답변의 인용이 실제 자료에 있는지 앱이 검증해서, 확인되지 않은 인용은 버리고 근거를 누르면 PDF의 해당 문장을 강조한다.',
      result: '근거가 확인되지 않으면 자료에 없다고 답한다. 추론 모드 설정 비교 실측에서 응답이 17초 오답에서 3.8초 정답으로 바뀌었다.',
    },
    tags: ['SwiftUI', 'Core ML', 'EmbeddingGemma', 'Hybrid Search', 'RAG'],
    links: [{ label: 'GitHub 저장소', url: 'https://github.com/H4RUming/Pinpage' }],
  },
  {
    kind: 'github',
    year: 2026, month: 10,
    title: 'kit',
    org: 'Codex로 과제를 수행할 때 쓰는 작업 하네스',
    badge: 'Python',
    brief: {
      problem: '코딩 에이전트에게 긴 과제를 맡기면 요구사항을 빠뜨리거나, 검증 없이 넘어가거나, 세션이 바뀔 때 맥락을 잃는다.',
      action: '규칙 파일(AGENTS.md), 작업 문서 템플릿(TASK, DECISIONS, HANDOFF, VERIFY), 단계별 지시 카드, 검증 도구(테스트 요약, 웹 체크, DB 대조)를 하나로 묶었다. 요구사항을 완료 조건 단위로 나눠 조건마다 구현, 테스트, 커밋을 하고 멈추게 했다.',
      result: '내 과제 작업에 실제로 쓰고 있다. 설치 스크립트 한 줄로 어느 과제 폴더에든 적용되고, 도구는 Python 표준 라이브러리만 쓴다.',
    },
    tags: ['Codex', 'Agent Harness', 'Python'],
    links: [{ label: 'GitHub 저장소', url: 'https://github.com/H4RUming/kit' }],
  },
  {
    kind: 'github',
    year: 2026, month: 6,
    title: 'Gemma 4 31B 서빙 스택',
    org: 'RTX PRO 6000 한 장으로 31B 모델을 256K 컨텍스트로 서빙',
    badge: 'Shell, Python',
    brief: {
      problem: '31B 모델을 GPU 한 장에서 쓸 만한 속도로 서빙하기 어렵고, 클라이언트마다 요청 형식이 달라 로그 관리와 파라미터 처리가 제각각이다.',
      action: 'vLLM에 FP8 KV 캐시와 MTP 추측 디코딩(초안 5토큰)을 적용하고, 선택 근거를 ADR로 남겼다. 앞단에 비동기 FastAPI 프록시를 따로 두어 요청 로그 기록, thinking 파라미터 4종 통일, 샘플링 기본값 주입, 관리용 엔드포인트 차단을 맡겼다.',
      result: '단일 요청 42.1에서 103.2 tok/s로 2.45배, 동시 3요청 합산 294 tok/s. 초안 수락률 94~97%, KV 캐시 49만 5천 토큰.',
    },
    tags: ['vLLM', 'FP8', 'Speculative Decoding', 'FastAPI', 'systemd'],
    links: [
      { label: 'stack 저장소', url: 'https://github.com/H4RUming/gemma4-vllm-stack' },
      { label: 'proxy 저장소', url: 'https://github.com/H4RUming/gemma4-vllm-proxy' },
    ],
  },
];

export const projects = {
  'dacon-agent': {
    title: '코딩 에이전트 다음 행동 예측',
    subtitle: '대화 이력과 작업 상태로 AI 코딩 에이전트의 다음 행동 14종을 맞히는 분류 모델',
    period: '2026 (예선 마감 7월)',
    context: '2026 SW중심대학 디지털 경진대회 AI부문, DACON',
    role: '팀장, 모델링과 추론 최적화',
    team: '팀 참가',
    links: [{ label: 'GitHub 저장소 (코드 공개본)', url: 'https://github.com/H4RUming/dacon2026-agent-action' }],
    brief: {
      problem: '오프라인 T4 GPU에서 3만 건을 10분 안에 추론해야 하는 제약 아래, 코딩 에이전트의 다음 행동 14종을 분류해야 했다.',
      action: '문맥을 압축하지 않는 입력 구조로 바꾸고, 증류 모델 2개와 일반 모델 1개를 int8로 양자화해 10분 안에 앙상블했다.',
      result: '예선 30위 (Macro-F1 0.79231), T4 추론 8분 57초. 리더보드에서 가장 먼저 0.79를 넘겨 약 이틀간 1위를 지켰다.',
    },
    problem: [
      '대화 이력, 워크스페이스 상태, 현재 사용자 발화를 보고 AI 코딩 에이전트가 다음에 할 행동을 14개 중 하나로 맞히는 과제다. 평가는 Macro-F1.',
      '코드와 모델을 그대로 제출하는 방식이라 추론 환경 제약을 그대로 받는다. T4 16GB, 오프라인, 추론 10분 이내, 압축 파일 1GB 이하.',
      'train은 7만 건(9,429세션)이고, 같은 세션의 step끼리 문맥을 공유해서 무작위로 나누면 검증 점수가 부풀려진다.',
    ],
    action: {
      intro: '정확도와 추론 시간을 같이 맞춰야 하는 문제라서, 모든 후보를 T4 10분 안에 들어가는지부터 확인하고 그 안에서 점수를 올렸다. 리더보드에 맞춘 반복 튜닝은 쓰지 않았다. 모든 계수를 학습 데이터 검증 결과에서 뽑아서, 저장소 스크립트를 실행하면 최종 제출물이 그대로 다시 나온다.',
      points: [
        '대화 이력을 요약해 512토큰에 맞추던 방식을 버리고 전체 이력을 시간순으로 넣었다. 리더보드 점수가 0.6639에서 0.7797로 올랐다.',
        '세션 단위로 묶은 5-fold 검증을 기본으로 두고, 학습 코드와 제출 코드의 입력 직렬화가 글자 단위로 같은지 검사하는 절차를 만들었다.',
        '4개 teacher의 soft label로 mmBERT-base를 증류했다. 증류 비율을 올리면 검증 점수는 오르는데 리더보드 점수와의 차이가 사라지는 현상을 제출로 실측했고, 원인이 soft label 누적 노출량이라는 걸 찾았다.',
        '모델 구조마다 로컬과 T4의 속도 비가 다르다는 걸 제출로 실측해(mmBERT 6배, EuroBERT 7.7배) 시간 초과할 후보를 미리 거르는 기준으로 썼다.',
        '처음엔 T4 10분을 넘겨 실패했던 3모델 앙상블을, 토크나이즈를 한 번만 해서 모델끼리 공유하고 int8 복원을 GPU에서 하도록 바꿔 8분 57초로 넣었다.',
        '검증 점수와 리더보드의 차이를 추적하다가 train은 step 단위, test는 세션당 1 step이라는 샘플링 차이를 찾았다. 이 기준으로 다시 맞춘 클래스별 bias가 +0.0002를 낼 거라 예측했고, 실제 리더보드도 정확히 +0.0002 올랐다.',
        '디코더 LLM 분류에서 두 모델이 같은 점수대로 실패하는 걸 보고 셋업 결함을 의심했다. 왼쪽 패딩인데 오른쪽 패딩을 가정한 풀링이 원인이었고, 고친 뒤 0.2638에서 0.7640으로 정상화했다.',
      ],
      pipeline: [
        { name: '입력 직렬화', tech: '4구획, max_len 640', detail: '현재 발화, 작업 상태(CI, git, 열린 파일 수, 턴 등), 열린 파일 목록, 전체 이력을 4구획으로 넣는다. 이력은 요약하거나 압축하지 않는다. 토큰 길이 p99를 실측해 640으로 정했고, 잘리는 샘플은 5건이다.', mine: true },
        { name: '증류 모델 2개', tech: 'mmBERT-base 307M', detail: '4개 teacher의 OOF 평균 soft label로 증류했다. α 0.3, T 2.0, 3 epoch, lr 4e-5. 같은 레시피를 seed 42와 43으로 두 번 학습했다.', mine: true },
        { name: '일반 모델 1개', tech: 'mmBERT-base, lr 5e-5', detail: 'hard label로 전량 학습했다. 세 모델의 확률을 같은 비중으로 평균한다.', mine: true },
        { name: 'bias 보정', tech: '결정론적 피팅', detail: 'test는 세션당 1 step이라, OOF를 세션 길이의 역수로 가중한 macro-F1 기댓값을 목적함수로 클래스별 bias 14개를 맞춘다. 난수를 쓰지 않아 같은 OOF에서 항상 같은 bias가 나오고, 검증 스크립트로 비트 단위까지 재생성을 확인한다.', mine: true },
        { name: 'int8 추론', tech: 'per-channel, batch 256', detail: '모델당 308MB로 줄이고 GPU에서 fp16으로 복원한다. 토크나이즈는 한 번만 해서 세 모델이 공유하고, 길이 순으로 정렬한 배치로 추론한다. T4에서 8분 57초.', mine: true },
      ],
    },
    results: [
      { value: '0.79231', label: '예선 Macro-F1 (최종 30위)' },
      { value: '8분 57초', label: 'T4 3모델 추론 시간 (제한 10분)' },
      { value: '308MB', label: 'int8 양자화 후 모델당 크기' },
      { value: '+0.0002', label: '분포 보정 예측 이득, 실제 리더보드와 일치' },
      { value: '0.7640', label: 'LLM 분류 풀링 버그 수정 후 (수정 전 0.2638)' },
      { value: '약 이틀', label: '리더보드 1위 유지 (가장 먼저 0.79 돌파)' },
    ],
    retro: [
      '대회가 끝난 뒤 1등 팀(0.7988)의 공개 코드와 비교했다. 차이는 리더보드 튜닝이 아니라 입력 표현과 추론 엔지니어링이었다.',
      '1등 팀은 결정 변수를 특수 토큰으로 바꾸고 대회 텍스트로 MLM 이어학습(TAPT)을 했다. 나는 특수 토큰을 TAPT 없이 한 번 시도하고 실패하자 그 방향을 접었다.',
      '추론은 int8 3모델 8분 57초까지 갔다. 1등 팀은 small 모델 8개를 base와 delta로 압축하고 early-exit, 토큰 예산 기반 동적 배칭, CPU와 GPU 병렬 처리로 5분 14초에 돌렸다.',
      '그래서 원칙 하나를 세웠다. 한 방향을 접기 전에 그 방향의 표준 레시피를 끝까지 채웠는지 확인하고, 실패한 실험 한 번으로 폐기하지 않는다.',
    ],
    tags: ['Knowledge Distillation', 'INT8 Quantization', 'mmBERT', 'Ensemble', 'Inference Optimization', 'T4'],
  },

  recallframe: {
    title: 'RecallFrame',
    subtitle: '기억 속 가족의 얼굴로 대화하는 온디바이스 화상대화 액자',
    period: '2026',
    context: 'HL Future Day 2026 New Business Idea',
    role: '팀장, 발표, 특허 발명자',
    team: '4인 팀',
    brief: {
      problem: '경증 치매 어르신의 절반 이상이 혼자 살고, 회상치료를 반복해 줄 사람이 없다.',
      action: '사진 1장과 음성 5초로 가족의 얼굴과 목소리를 재현해 기기 안에서 대화하는 구조를 설계했다.',
      result: '특허 출원, 얼굴 합성 21fps, 음성 합성 지연 0.4초.',
    },
    problem: [
      '65세 이상 치매 환자는 97만 명이고, 그중 67.7%가 경증이다. 치매 환자 가구의 52.6%는 1인 가구다.',
      '회상치료는 일상에서 반복할수록 효과가 있지만, 병원 밖에서 이걸 해 줄 전문 인력이 없다.',
      '기존 돌봄 AI는 낯선 캐릭터 인형이나 로봇, 혹은 익명의 AI 상담원이다. 가족 얼굴을 쓰는 서비스는 고인 추모용 영상에 그친다. 지금 살아 있는 가족과 대화하는 경험은 없다.',
    ],
    action: {
      intro: '지금 곁에 있는 가족의 얼굴과 목소리로, 실제 추억을 소재로 대화하는 것을 목표로 다섯 단계 파이프라인을 설계했다. 모든 처리는 태블릿 안에서 이루어지고, 개인 데이터는 기기 밖으로 나가지 않는다.',
      points: [
        '음성을 텍스트로 바꾸지 않고 멀티모달 LLM에 바로 넣어, 목소리의 떨림과 억양, 말하는 속도까지 정서 판단에 쓰도록 했다.',
        '얼굴 합성을 사전 렌더링 클립, 캐시된 반응 클립, 실시간 립싱크의 3계층으로 나눠 필요할 때만 무거운 연산을 하도록 했다.',
        '이 구조를 지도교수와 공동 발명으로 특허 출원했다.',
      ],
      pipeline: [
        { name: '입력 이해', tech: 'Gemma 3n E2B, INT4', detail: '음성을 글자로 바꾸지 않고 그대로 입력해 정서와 질의를 함께 파악한다. 느리고 낮은 목소리로 "바다 가고 싶네"라고 말하면 정서는 그리움, 질의는 바다로 읽는다.', mine: true },
        { name: '추억 검색', tech: '한국어 임베딩, FAISS', detail: '가족이 앱에 등록한 사진과 이야기 중 의미가 가까운 추억을 찾는다. 바다라는 질의에 강릉 바다 여행 기록이 유사도 0.79로 검색된다.', mine: true },
        { name: '응답 생성', tech: '회상치료 대화 원칙', detail: '찾은 추억과 정서를 조건으로 응답을 만든다. 열린 질문을 쓰고, 기억이 틀려도 교정하지 않는다. 예를 들면 "강릉 경포대 갔을 때 좋으셨죠?" 같은 식이다.', mine: true },
        { name: '음성 합성', tech: 'CosyVoice, F5-TTS', detail: '가족 음성 5~10초에서 뽑은 화자 임베딩으로, 재학습 없이 같은 음색을 합성한다. 지연은 0.4초.', mine: true },
        { name: '얼굴 합성', tech: 'LivePortrait, Wav2Lip', detail: '짧은 반응은 미리 만든 클립을 재생하고, 긴 문장만 실시간 립싱크로 처리한다. Snapdragon 8 Elite 기준 21fps.', mine: true },
      ],
    },
    results: [
      { value: '10-2026-0127005', label: '특허 출원 (2026년 7월)' },
      { value: '21fps', label: '얼굴 합성 속도' },
      { value: '0.4초', label: '음성 합성 지연' },
      { value: '사진 1장, 음성 5초', label: '가족 등록에 필요한 입력' },
    ],
    tags: ['On-Device AI', 'Multimodal LLM', 'RAG', 'FAISS', 'Voice Cloning', 'Talking Head'],
  },

  synapse: {
    title: 'SYNAPSE',
    subtitle: '보행자 행동을 분석하고 예측해서 먼저 대응하는 교통사고 예방 AI',
    period: '2025 ~ 2026',
    context: '2026 캡스톤디자인 페스티벌, ARGOS 팀',
    role: '팀장, 아키텍처 설계, AI 학습, 백엔드와 대시보드',
    team: 'ARGOS 팀',
    brief: {
      problem: '기존 ADAS는 거리와 속도를 보고 위험이 생긴 뒤에 개입해서 대응 시간이 부족하다.',
      action: '보행자의 자세와 시선으로 의도를 읽고 GNN으로 관계를 추론하는 파이프라인을 230달러짜리 엣지 장비에 올렸다.',
      result: '예측 정확도 97%, 프레임당 약 30ms, 캡스톤 아이디어 경진대회 최우수상.',
    },
    problem: [
      '전 세계에서 매년 27만 명 이상의 보행자가 교통사고로 사망한다 (WHO, 2023).',
      '기존 ADAS와 자율주행은 거리, 속도, TTC 같은 물리량으로 판단한다. 위험이 생긴 뒤에 개입하는 구조라 대응할 시간이 부족하다.',
      '고가 LiDAR와 전용 컴퓨팅 장비가 필요해서, 구형 차량이나 이미 설치된 CCTV에는 붙일 수 없다.',
    ],
    action: {
      intro: '물리량 대신 보행자의 행동 의도를 보고, 사고 0.5~1초 전에 위험을 예측하는 4단계 추론 파이프라인과 서빙 계층을 설계하고 통합했다.',
      points: [
        '전체 시스템 아키텍처를 설계하고, 탐지부터 관계 추론까지 파이프라인을 하나로 통합했다.',
        'AI Hub의 스쿨존 보행 위험행동 영상(5.59TB) 등으로 상황별 전문가 모델을 따로 학습시켰다.',
        'FastAPI 백엔드와 운영자 대시보드를 만들었다. 대시보드는 객체 오버레이, 관계 그래프, Risk Timeline을 보여주고 위험하면 화면 전체에 적색 경보를 띄운다.',
        'Raspberry Pi 5와 Hailo-8 NPU에 올려서, 서버 없이 실시간으로 동작하게 했다.',
      ],
      pipeline: [
        { name: 'Perception', tech: 'YOLOv8, ByteTrack', detail: '보행자와 차량 등 6종 객체를 탐지하고 고유 ID로 추적한다. 스켈레톤 키포인트로 자세와 시선을 뽑아 다음 단계로 넘긴다. 프레임당 약 30ms.', mine: true },
        { name: 'Gating', tech: '도로 환경 8종 분류', detail: '날씨, 시간대, 장소 같은 현재 도로 환경을 분류해서 맞는 전문가 모델로 보낸다. 평균 신뢰도 97%, 약 50ms.', mine: true },
        { name: 'MoE', tech: 'Specialist Ensemble', detail: '모든 모델을 다 돌리지 않고, 상황에 맞는 전문가 모델(예를 들어 횡단보도 전문가)만 활성화해서 연산량과 지연을 줄인다. 약 165ms.', mine: true },
        { name: 'GNN', tech: 'Scene Graph', detail: '보행자, 차량, 신호등을 노드로 한 씬 그래프에서 메시지 패싱으로 관계를 추론한다. 충돌 가능성이 높은 엣지(예: 0.85)를 찾아 0.5~1초 뒤의 궤적과 위험도를 계산한다.', mine: true },
        { name: 'Serving', tech: 'FastAPI, MJPEG', detail: '추론 결과를 실시간으로 스트리밍하고, 대시보드에 관계 그래프와 Risk Timeline을 보여준다. 위험도가 0.65를 넘으면 경보를 띄운다.', mine: true },
      ],
    },
    results: [
      { value: '97%', label: '사고 예측 정확도 (평균)' },
      { value: '150ms', label: '탐지 속도 (평균)' },
      { value: '약 30ms', label: '프레임당 처리 (Hailo-8 NPU)' },
      { value: '230달러', label: '장비 비용 (Pi 5와 AI HAT+)' },
      { value: '최우수상', label: '2025 캡스톤디자인 아이디어 경진대회' },
    ],
    tags: ['Edge AI', 'Computer Vision', 'YOLOv8', 'GNN', 'Mixture of Experts', 'FastAPI', 'Hailo-8'],
  },

  medicare: {
    title: 'AI Medicare',
    subtitle: 'RAG 기반 스마트 진료보조 챗봇',
    period: '2025',
    context: 'HL D&I한라와 함께하는 한라대학교 ESG 아이디어 공모전',
    role: '개발 (프론트엔드, 데이터 전처리, API 연동)',
    team: '5인 팀 (HAI_Medicare)',
    links: [{ label: 'GitHub 저장소', url: 'https://github.com/H4RUming/HAI_Medicare' }],
    brief: {
      problem: '의료 취약 지역은 의사를 만나기 어렵고, 기존 헬스케어 챗봇은 범용 모델이라 전문성이 부족하다.',
      action: '의료 데이터 전처리와 챗 UI, 모델 API 연동을 맡아 근거와 참고 자료를 함께 보여주는 RAG 챗봇을 만들었다.',
      result: 'ESG 아이디어 공모전 대상, POC 완료.',
    },
    problem: [
      '필리핀의 의사 수는 인구 1만 명당 7.9명으로, 세계 평균 17.2명의 절반 이하다. 세계 농촌 인구의 56%는 필수 의료 서비스를 받지 못한다.',
      '국내도 지역 간 의료 격차가 크다. 치료가 가능했는데도 적절한 치료를 받지 못해 조기 사망하는 사람이 2만 2천 명에 이른다.',
      '기존 헬스케어 챗봇은 범용 GPT를 그대로 써서 의료 전문성과 최신 정보가 부족하고, 사용자가 사는 지역이나 계절 같은 환경을 고려하지 못한다.',
    ],
    action: {
      intro: '의료 특화 데이터에 RAG를 붙이고, 답변에 진단 근거와 참고 자료를 함께 보여주는 챗봇을 만들었다. 이 중 데이터 전처리와 화면, API 연동을 맡았다.',
      points: [
        'AI Hub 의료 질의응답 데이터, 한국어 말뭉치, medical-o1-reasoning-SFT를 학습과 검색에 쓸 수 있도록 정제했다.',
        '챗 UI(Open WebUI)와 모델 API를 연동했다.',
        '답변을 진단과 근거, 약물 처방, 추천사항과 요약, 참고 자료의 네 칸으로 나눠 보여주도록 화면을 구성했다.',
      ],
      pipeline: [
        { name: '데이터 전처리', tech: 'AI Hub, o1-SFT', detail: '의료 문서 2억 4천만 어절 규모의 질의응답 데이터와 의료 추론 데이터를 정제해 학습과 검색에 쓸 수 있게 만들었다.', mine: true },
        { name: '임베딩, Vector DB', tech: 'Indexing', detail: '정제한 문서를 잘라 임베딩하고 메타데이터와 함께 벡터 DB에 저장한다.', mine: false },
        { name: '검색', tech: 'RAG, 실시간 웹 검색', detail: '질문과 가까운 문서를 벡터 DB에서 찾고, 최신 정보는 실시간 웹 검색으로 보완한다.', mine: false },
        { name: 'Re-rank, Fusion', tech: '후처리', detail: '여러 경로로 찾은 결과를 다시 정렬하고 합쳐서 정확도를 높인다.', mine: false },
        { name: 'UI와 API 연동', tech: 'Open WebUI', detail: '모델 API를 챗 화면과 연결하고, 답변을 근거, 처방, 요약, 참고 자료로 나눠 보여준다.', mine: true },
      ],
    },
    results: [
      { value: '대상', label: 'ESG 아이디어 공모전 (2025년 10월)' },
      { value: 'POC', label: '기술 시연 가능 단계까지 완료' },
      { value: '2.4억 어절', label: '정제한 의료 문서 데이터 규모' },
    ],
    tags: ['LLM', 'RAG', 'Vector DB', 'Data Preprocessing', 'Healthcare AI'],
  },

  'pipe-robot': {
    title: '배관 내부 모니터링 로봇',
    subtitle: '배관 내부 손상을 자동으로 식별하는 AI (산학협력)',
    period: '2025',
    context: '2025 한라인재페스티벌 산학협력프로젝트',
    role: '데이터 정제, 모델 학습',
    team: '6인 팀 (온비IT)',
    brief: {
      problem: '노후 배관의 부식과 균열은 육안이나 카메라로는 정확히 진단하기 어렵다.',
      action: '로봇이 수집한 배관 영상을 정제해 학습 데이터로 만들고, 손상 3종 세그멘테이션 모델을 학습시켰다.',
      result: '한라인재페스티벌 산학협력프로젝트 대상.',
    },
    problem: [
      '산업 시설의 배관이 노후화되면서 부식과 균열이 늘고, 이게 설비 안전과 운영에 직접 영향을 준다.',
      '기존 육안 점검이나 카메라 점검은 배관 구조와 환경 때문에 정확한 진단이 어렵다.',
      '미세한 손상은 실시간으로 잡아내기 어려워서, 사고와 유지보수 비용으로 이어진다.',
    ],
    action: {
      intro: '배관 로봇이 찍은 영상에서 손상을 자동으로 찾아내는 시스템 중, 데이터 정제와 모델 학습을 맡았다. 데이터 수집과 평가, 검증은 다른 팀원이 담당했다.',
      points: [
        '로봇이 수집한 RAW 영상을 정제하고, 부식, 크랙, 천공 3종 손상을 Polygon 좌표로 표기한 학습용 데이터 쌍을 구성했다.',
        '이 데이터로 객체 탐지와 세그멘테이션 모델을 학습시켰다.',
      ],
      pipeline: [
        { name: '데이터 수집', tech: '배관 로봇', detail: '배관 로봇과 카메라로 내부 RAW 영상을 수집한다.', mine: false },
        { name: '데이터 정제', tech: 'Polygon 학습 데이터', detail: 'RAW 영상을 정제하고, 손상 영역을 Polygon 좌표와 카테고리로 표기한 학습용 데이터 쌍(이미지와 TXT)을 만들었다.', mine: true },
        { name: '모델 학습', tech: 'Detection, Segmentation', detail: '부식, 크랙, 천공 3종 클래스를 분류하고 영역을 나누는 모델을 학습시켰다.', mine: true },
        { name: '평가와 검증', tech: '전문가 검수', detail: '라벨 데이터 검수와 모델 성능 평가를 진행한다.', mine: false },
        { name: '프로토 서비스', tech: '모니터링 뷰어', detail: '추론 결과를 모니터링 화면에 실시간으로 반영한다.', mine: false },
      ],
    },
    results: [
      { value: '대상', label: '2025 한라인재페스티벌 산학협력프로젝트' },
      { value: '3종', label: '부식, 크랙, 천공 분류 및 영역화' },
    ],
    tags: ['Segmentation', 'Data Cleaning', 'Model Training', 'Industrial AI'],
  },
};


export const skills = [
  { group: 'AI / ML', items: ['PyTorch', 'YOLOv8', 'ByteTrack', 'GNN', 'Mixture of Experts', 'Multimodal LLM', 'RAG', 'FAISS', 'TTS', 'Knowledge Distillation', 'INT8 Quantization'] },
  { group: 'LLM Serving', items: ['vLLM', 'FP8 KV Cache', 'Speculative Decoding', 'systemd'] },
  { group: 'Backend', items: ['Python', 'FastAPI'] },
  { group: 'Apple', items: ['Swift', 'SwiftUI', 'Core ML'] },
  { group: 'Edge / HW', items: ['Raspberry Pi 5', 'Hailo-8 NPU', 'Mobile APU'] },
  { group: 'Data', items: ['AI Hub', 'OpenCV', 'Polygon Labeling', 'Preprocessing'] },
];
