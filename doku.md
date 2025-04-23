# Hilfe

## SQLite/Datenbanken

Aufgabenstellung: Printable SQL Statements als Abgabe für die Aufgabenstellung

### Prisma

```bash
npx prisma init --datasource-provider sqlite
```

Erstellung des schema.prisma Files mit datasource provider Flag, damit SQLite als DB voreingestellt ist -> no meddling with the .env file!

#### Tools

VSCodeCommandLine

> Format Document

damit relations automatisch erstellt werden

```prisma

model Filiale {
  id    Int     @id @default(autoincrement())
  name  String

}

model Regal {
  id    Int     @id @default(autoincrement())
  filiale Filiale
}

```

->

```Prisma
model Filiale {
  id   Int    @id @default(autoincrement())
  name String

  Regal Regal[]
}

model Regal {
  id        Int     @id @default(autoincrement())
  filiale   Filiale @relation(fields: [filialeId], references: [id])
  filialeId Int
}

```

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

--> copy paste into wordfile

### If something goes wrong

#### changing the schema.prisma

Falls man in die unglückliche Situation kommt, das Schema File ändern zu müssen, kann folgendes helfen:

```bash
npx prisma validate
```

Überprüfung/Validierung des
