# Client - Frontend (Next.js)

This is the frontend of the AI Video Generator built using **Next.js**, **Tailwind CSS**, and **TypeScript**.

## 📂 Directory Structure

```
Client/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── VideoGenerator.tsx
│   ├── api/
│   │   ├── generate-image/route.ts
│   │   ├── generate-script/route.ts
│   │   └── video/route.ts
│   ├── components/
│   │   ├── RealEstateForm.tsx
│   │   ├── SuplimaxForm.tsx
│   │   ├── UseCaseSwitcher.tsx
│   ├── hooks/
│   │   ├── useRealEstateGenerator.ts
│   │   └── useSuplimaxGenerator.ts
│   ├── services/
│   │   └── geminiService.ts
├── components/ui/
│   ├── button.tsx
│   ├── input.tsx
│   ├── select.tsx
├── lib/utils.ts
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## 🛠️ Setup

```bash
cd Client
npm install
npm run dev
```

Then open: `http://localhost:3000`
