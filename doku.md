# Hilfe

## Node Basics

### Wichtige Befehle

```bash
node name.js
```

Führt eine JavaScript-Datei aus.

---

```bash
npm
```

**npm** steht für **Node Package Manager**. Damit lassen sich Abhängigkeiten und Pakete installieren.

Wenn eine `package.json` vorhanden ist, reicht:

```bash
npm i
```

um alle dort aufgelisteten Pakete zu installieren.

Ein einzelnes Paket installieren:

```bash
npm i <Paketname>
```

Beispiel:

```bash
npm i prisma
```

---

```bash
npx
```

**npx** führt ein Node-Package direkt aus, ohne es dauerhaft zu installieren.

Wir verwenden das häufig bei **Prisma**.

---

## SQLite / Datenbanken

### Aufgabenstellung

Ziel: SQL-Dumps erzeugen, die in ein Word-Dokument eingefügt werden können.

---

### Prisma Setup

Initialisierung von Prisma mit SQLite als Datenbank:

```bash
npx prisma init --datasource-provider sqlite
```

Dies erstellt die Datei `schema.prisma` mit SQLite als Standard-Datenbank.  
👉 Kein Bearbeiten der `.env` nötig!

---

#### Nützliche Tools

In **VSCode**:

> **Format Document**

Hilft beim automatischen Strukturieren und Erkennen von Relationen im Schema.

**Beispiel für automatische Relationserkennung:**

```prisma
model Filiale {
  id    Int     @id @default(autoincrement())
  name  String
}

model Regal {
  id     Int     @id @default(autoincrement())
  filiale Filiale
}
```

wird zu:

```prisma
model Filiale {
  id     Int     @id @default(autoincrement())
  name   String
  Regal  Regal[]
}

model Regal {
  id         Int     @id @default(autoincrement())
  filiale    Filiale @relation(fields: [filialeId], references: [id])
  filialeId  Int
}
```

---

Datenbankmigration ausführen:

```bash
npx prisma migrate dev
```

Erstellt die SQLite-Datei `dev.db` im Prisma-Ordner.

---

### SQLite direkt verwenden

```bash
sqlite3
.open prisma/dev.db
.dump
```

→ Ausgabe kopieren und in ein Word-Dokument einfügen.

---

### Fehlerbehebung

#### Schema ändern

Wenn Änderungen am Schema nötig sind:

**Validierung:**

```bash
npx prisma validate
```

Keine Fehlermeldung = alles passt.

Weitere Hilfe:

```bash
npx prisma --help
```

---

# Algorithmen

Hier findest du alles Wichtige zur Programmierung von Algorithmen in **JavaScript** oder **TypeScript**.

---

## Deno

**Deno** ist eine moderne Laufzeitumgebung für JavaScript und TypeScript. Besonders praktisch zum schnellen Testen von Algorithmen.

---

### Deno initialisieren

```bash
deno init
```

Erstellt automatisch:

- `main.ts`
- `main_test.ts`

Ausführung per:

```bash
deno run main.ts
```

💡 `.ts` kennzeichnet TypeScript-Dateien. Aber keine Sorge – du kannst auch ganz normale JavaScript-Syntax verwenden.

---
