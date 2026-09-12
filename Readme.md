# NER-SHIELD: Smart Logistics & Disruption Intelligence Platform
### Smart India Hackathon 2026 Prototype — Problem Statement: SIH26002

This folder contains the complete, self-contained, working prototype and database for **NER-SHIELD**.

---

## 🚀 How to Run the Website

### Option 1: Development Server (Instant Live Reload)
`ash
npm run dev
`
Open your browser at: http://localhost:5173

### Option 2: Production Preview Build
`ash
npm run preview
`
Or view the pre-compiled production build inside the dist/ folder.

---

## 📁 Project Structure
NER FINAL/
├── database/                     
│   ├── models/                  
│   ├── complete_ner_dataset.json 
│   ├── DATASET_DOCUMENTATION.md 
│   ├── districts.json         
│   ├── fleets.json               
│   ├── generate_dataset.py      
│   ├── incidents.json           
│   ├── kpis.json                 
│   ├── ml_live_training_dataset.csv 
│   └── ml_training_dataset.csv   
│
├── dist/                         
├── node_modules/               
├── public/                      
├── src/                         
│
├── .gitignore                  
├── .oxlintrc                    
├── Agent                        
├── index                         
├── LICENSE                    
├── package                      
├── package-lock                 
├── postcss.config.js             
├── README                      
├── start_dev                  
├── start_preview               
├── tailwind.config.js            
├── tsconfig.app                 
├── tsconfig                   
├── tsconfig.node             
└── vite.config.ts              

---
## 🔑 TextBee SMS OTP Connection

- **Configured in**: src/services/authService.ts & ite.config.ts
- **Fallback / Testing**: If no physical Android SMS device is connected in the TextBee dashboard, the system displays the generated OTP in a convenient dev card on screen, and universal demo code 123456 is also supported.

---

## 🗺️ Mapping & GIS Engine
- Powered by **OpenStreetMap** with custom mountain logistics overlays.
- Live radar simulation, geo-tagged hazard reporting, and road disruption bypass routing.
