# Hilfe

## SQLite/Datenbanken

Aufgabenstellung: Printable SQL Statements als Abgabe für die Aufgabenstellung

### Prisma

```bash
npx prisma init --datasource-provider sqlite
```

Erstellung des schema.prisma Files mit datasource provider Flag, damit SQLite als DB voreingestellt ist -> no meddling with the .env file!

```bash
npx prisma migrate dev
```

Generierung der dev.db

### SQLite

```bash
sqlite3
.open prisma/dev.db
.dump
```

-> copy paste into wordfile
