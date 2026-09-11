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

`
Final_Prototype_SIH26/
[ Step 1: Repository Initialization ]
                     │
                     ▼
            (Repository Lead)
         • Creates GitHub Repo
         • Pushes `.gitignore`, `.oxlintrc.json`
                     │
                     ├────────────────────────────────────────┐
                     ▼                                        ▼
       [ Step 2: Core Data Setup ]             [ Step 3: UI/UX Setup ]
                     │                                        │
                     ▼                                        ▼
                (Data Lead)                                (UX)
          • Pushes JSON datasets                 • Pushes `ux/` folder
          • Pushes `generate_dataset.py`                     │
                     │                                        │
                     ▼                                        │
       [ Step 4: ML & Documentation ]                         │
                     │                                        │
                     ▼                                        │
                (ML Data Specialist)                          │
         • Pushes CSV training datasets                       │
         • Pushes `DATASET_DOCUMENTATION.md`                 │
                     │                                        │
                     ▼                                        │
      [ Step 5: Model Artifacts ]                             │
                     │                                        │
                     ▼                                        │
               (Model Specialist)                             │
        • Pushes `.joblib` files in `database/models/`        │
                     │                                        │
                     ▼                                        │
        [ Step 6: System Agents ]                             │
                     │                                        │
                     ▼                                        │
             (Agent Specialist)                               │
         • Pushes `Agent.md`                                  │
                     │                                        │
                     └────────────────────────────────────────┘
                                     │
                                     ▼
                    [ Step 7: Final Review & Merge ]
                                     │
                                     ▼
                       • Verifies directory structure
                       • Tags initial release commit

---


Project Flow-Chat:
<img width="981" height="692" alt="image" src="https://github.com/user-attachments/assets/c1d21964-e0aa-4018-a4ec-367b38607f86" />





## 🔑 TextBee SMS OTP Connection
- **API Key**: 	xb_kfocljUl5G9bplOkm77nkLVi0jcB8qzJ
- **Configured in**: src/services/authService.ts & ite.config.ts
- **Fallback / Testing**: If no physical Android SMS device is connected in the TextBee dashboard, the system displays the generated OTP in a convenient dev card on screen, and universal demo code 123456 is also supported.

---

## 🗺️ Mapping & GIS Engine
- Powered by **OpenStreetMap** with custom mountain logistics overlays.
- Live radar simulation, geo-tagged hazard reporting, and road disruption bypass routing.
