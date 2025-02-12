# Aplicação **CBT** (Crypto Bot Trader)

## Frontend (React + TypeScript)
- **Dashboard Components**
  - Trade Monitor: Real-time trade visualization
  - Bot Configuration: Settings and parameters adjustment
  - Performance Metrics: Charts and statistics
  - Wallet Integration: Phantom wallet connection
  - Alerts Panel: Real-time notifications

- **Tech Stack**
  - React + TypeScript
  - Chakra UI/Material UI
  - React Query for API calls
  - Web3.js for Solana interactions
  - Chart.js for data visualization

## Backend (Python)
### Data Pipeline
1. **Data Collection**
   - Market data from Solana DEXs
   - Social media sentiment analysis
   - Wallet tracking

2. **AI Processing**
   - FinRL for trade optimization
   - BERT-Tiny for sentiment analysis
   - Continuous learning feedback loop

3. **Trade Execution**
   - Phantom Wallet integration
   - Risk management
   - Automated entry/exit

### Tech Stack
- FastAPI
- PostgreSQL
- Docker
- Python (FinRL, BERT-Tiny)

## Data Flow
1. Frontend ←→ FastAPI Backend
2. Backend ←→ AI Models
3. Backend ←→ Blockchain
4. Backend ←→ Database
