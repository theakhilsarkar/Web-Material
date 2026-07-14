**Problem Statement: Comprehensive Core Banking System for a Growing Multi‑Branch Bank**

---

### 1. Background  
ABC Co‑operative Bank currently operates **3 branches** across different cities. It serves **20,000+ account holders** and manages deposits worth **₹700 crore**, with a daily transaction volume of **₹10 crore** (debits and credits). The bank’s entire operations – account master records, daily transactions, passbook updates, interest calculations, revenue tracking, and profit/loss statements – are handled manually using a combination of **Microsoft Excel, Notepad and Tally**.  

As the bank has grown beyond the 10,000‑account mark, these tools have become completely inadequate. Data is scattered across multiple files per branch, updates are error‑prone, searching for a customer or a transaction is painfully slow, and consolidating branch‑level data into a single financial summary is a multi‑day manual exercise. The bank now urgently needs a **unified, centralised banking application** to bring all operations under one roof, ensure data integrity, and allow the management to make informed decisions in real time.

---

### 2. Current Pain Points (The Why)  
- **Fragmented Data:** Each branch maintains its own Excel/Notepad files. There is no single source of truth.  
- **Manual Consolidation:** Monthly/quarterly reports, overall deposit position, and profit/loss require merging multiple spreadsheets, leading to delays and mistakes.  
- **Search & Retrieval Nightmare:** Locating a customer account or a specific transaction involves searching through several files; often takes hours.  
- **Transaction Management:** No real‑time validation of balance, duplicate entries, or linked accounts. Overdraft and limit checks are done mentally or in separate notes.  
- **Scalability Crisis:** At 10,000 accounts, the Excel workbooks became unstable. Now at 20,000 accounts and growing, the bank faces frequent file corruptions and data loss.  
- **Revenue & P&L Blindness:** Profit/loss measurement is an approximate exercise. The bank cannot reliably track income (interest earned, fees) versus expenses (interest paid, operational costs) across branches.  
- **Audit & Compliance Risk:** Inconsistent data and lack of audit trails make regulatory reporting a high‑stress, high‑risk activity.  

---

### 3. Project Goal  
Design and develop a **secure, multi‑branch, web‑based Core Banking Application** that replaces all manual tools and enables the bank to:  

1. **Centrally manage** customer accounts, transactions, and branch data.  
2. **Process high‑volume daily transactions** accurately and with real‑time balance updates.  
3. **Generate** operational and financial reports, including branch‑wise revenue and profit/loss statements.  
4. **Provide** a fast, intuitive search and data analysis interface.  
5. **Scale** smoothly to 100,000+ accounts and beyond, with reliable data integrity.

---

### 4. Core Functional Requirements (High‑Level)  

| Module | Key Features |
|--------|--------------|
| **Customer & Account Management** | Create/update customer profiles; open Savings, Current, Fixed Deposit accounts; assign unique account numbers; link customer to branch. |
| **Transaction Engine** | Cash deposit, cash withdrawal, fund transfer (within bank, NEFT/RTGS simulation), transaction reversal with proper audit trail. Real‑time balance validation and daily transaction limit checks. |
| **Multi‑Branch Support** | Branch‑wise login; ability to view/operate only own branch data (with admin override). Master admin can see consolidated view across all branches. |
| **Search & Data Retrieval** | Quick search by account number, customer name, PAN, phone number, date range, transaction ID. Search results must load within 2 seconds for 20,000+ records. |
| **Dashboards & Reports** | Branch‑wise and consolidated dashboards: total deposits, total advances (if implemented), daily transaction volume, NPA summaries (optional), interest paid/received. Export to PDF/Excel. |
| **Revenue & Profit/Loss Analysis** | Automated calculation of income (interest on loans, service charges) and expenses (interest on deposits, operational costs). Generate P&L statement per branch and bank‑level for any date range. |
| **Data Import & Legacy Migration** | Bulk import facility to migrate existing 20,000 accounts and transaction history from Excel/CSV files into the new system. |
| **User Roles & Access Control** | Roles: Teller, Branch Manager, Auditor, System Admin – each with granular permissions. |

---

### 5. Non‑Functional Requirements (Must‑Have)  

- **Scalability:** Handle 20,000 accounts and 10 Cr+ daily transaction load without performance degradation. Architecture must allow horizontal scaling for future growth.  
- **Data Integrity & Consistency:** Use ACID‑compliant transactions. No double‑posting, negative balances beyond authorized limits, or lost updates.  
- **Security:** Password hashing, HTTPS, role‑based access, protection against SQL injection/XSS. All sensitive data (e.g., PAN, Aadhaar) must be encrypted at rest.  
- **Auditability:** Every financial transaction must be logged with a timestamp, user ID, and IP address. Logs cannot be altered.  
- **Availability:** The system should have >99.5% uptime during banking hours (8 AM – 8 PM).  
- **Responsiveness:** The frontend must be fully responsive, usable on desktops, tablets, and mobile browsers with a clean, intuitive UI.  
- **Backup & Recovery:** Automated daily backups and a well‑documented restore procedure.

---

### 6. Expected Deliverables for the Student Project Team  

- **System Design Document:** Architecture diagram (frontend, backend, database), component design, ER diagram, API specifications, and technology stack justification.  
- **Working Software:**  
  - *Backend* – RESTful APIs (or GraphQL), business logic, database schema.  
  - *Frontend* – Responsive web application consuming backend APIs.  
- **Database:** Normalized schema that supports all modules; sample data scripts for 20,000 accounts and 30 days of transactions (to demonstrate performance).  
- **Test Suite & Quality Report:**  
  - Unit tests (backend), component tests (frontend), integration tests.  
  - Performance test results showing system behaviour under 10x daily transaction load.  
  - Security test summary (e.g., OWASP Top 10 check).  
- **Version Control & CI/CD:** Entire codebase managed with Git (GitHub/GitLab). A working CI/CD pipeline that runs tests and deploys the app to a staging environment.  
- **Deployment:** Deployed application on a cloud platform or virtual machine, accessible via a public URL. Dockerised deployment is a plus.  
- **User Manual & Demo Video:** Documentation explaining setup, features, and branch‑wise workflow.

---

### 7. Constraints & Assumptions  

- The bank’s branches have reliable internet connectivity; offline‑first capability is not required.  
- The system will be used by bank employees only; no customer‑facing portal for online banking is expected in this phase (though future extension may be considered).  
- The project must simulate realistic conditions: rapid development cycles, role‑based teamwork, code reviews, and strict deadlines – to prepare students for industry‑style delivery pressure, time management, and collaborative problem‑solving.  

---

**The Challenge:** Build a banking application that turns a chaotic mesh of spreadsheets into a single, trustworthy, real‑time financial command centre – and do so with the professionalism, teamwork, and engineering rigor that a ₹700‑crore institution demands.
