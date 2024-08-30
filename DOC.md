# @myrosch/ui

[@myrosch/ui](https://www.npmjs.com/package/@myrosch/ui) est une bibliothèque de composants UI qui vous permet de créer des interfaces utilisateurs élégantes et cohérentes en utilisant un système de thèmes fourni par le `RoschThemeProvider`. Le package inclut actuellement trois composants principaux : `Input`, `Text`, et `Button`.

## Installation

Vous pouvez installer le package via npm ou yarn :

```bash
npm install @myrosch/ui
```

ou 

```bash
yarn add @myrosch/ui
```

## Utilisation

Pour utiliser les composants @myrosch/ui dans votre projet, vous devez d'abord envelopper votre application avec le composant `RoschTheme` pour fournir un thème à vos composants.

### Exemple d'utilisation :

```typescript
import React from 'react';
import { RoschTheme, RoschText } from '@myrosch/ui';

const theme = {
  colors: {
    primary: '#3498db',
    secondary: '#2ecc71',
    text: '#333',
  },
  fonts: {
    main: 'Arial, sans-serif',
  },
  // Ajoutez d'autres paramètres de thème selon vos besoins
};

const App = () => {
  return (
    <RoschTheme theme={theme}>
      <div>
        <RoschText>Bienvenue sur mon application</RoschText>
      </div>
    </RoschTheme>
  );
};

export default App;
```

## Thématisation
Le package @myrosch/ui utilise le composant RoschTheme pour permettre une personnalisation complète des composants via un thème global. Vous pouvez définir les couleurs, les polices, et d'autres styles globaux à appliquer sur tous les composants. un thème par defaut est fourni si aucun n'est fourni dans RoschTheme

```typescript
{
  name: "default-theme",
  colors: {
    primary: {
      lightest: "#cce5ff",
      light: "#66b2ff",
      base: "#007bff",
      dark: "#0056b3",
      darkest: "#003d80",
    },
    secondary: {
      lightest: "#e2e3e5",
      light: "#a6a9ad",
      base: "#6c757d",
      dark: "#494e52",
      darkest: "#343a40",
    },
    success: {
      lightest: "#d4edda",
      light: "#5cd67e",
      base: "#28a745",
      dark: "#1e7b32",
      darkest: "#155724",
    },
    danger: {
      lightest: "#f8d7da",
      light: "#ff6b75",
      base: "#dc3545",
      dark: "#a62630",
      darkest: "#721c24",
    },
    warning: {
      lightest: "#fff3cd",
      light: "#ffdf5d",
      base: "#ffc107",
      dark: "#b38600",
      darkest: "#856404",
    },
    info: {
      lightest: "#d1ecf1",
      light: "#5bc8e7",
      base: "#17a2b8",
      dark: "#11667f",
      darkest: "#0c5460",
    },
    light: {
      lightest: "#fefefe",
      light: "#f8f9fa",
      base: "#e2e3e5",
      dark: "#c7c8c9",
      darkest: "#818182",
    },
    dark: {
      lightest: "#6c757d",
      light: "#5a6268",
      base: "#343a40",
      dark: "#1d2124",
      darkest: "#121416",
    },
  },
  
  textSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.25rem", // 20px
    xl: "1.5rem", // 24px
    xxl: "2rem", // 32px
  },
  defaultTextSize: "md",
  
  spacings: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    xxl: "3rem", // 48px
  },
  defaultSpacing: "md",
  
  radiusSizes: {
    none: "0px",
    sm: "0.125rem", // 2px
    md: "0.25rem", // 4px
    lg: "0.5rem", // 8px
    xl: "1rem", // 16px
    xxl: "1.5rem", // 24px
    pills: "50rem", // Pour les éléments en forme de pilule
  },
  defaultRadiusSize: "md",
  
  buttons: {
    radius: "md",
    paddingHorizontal: "xl",
    paddingVertical: "md",
  },
  
  inputs: {
    radius: "lg",
    paddingHorizontal: "md",
    paddingVertical: "md",
  },
}
```


## Composants disponible

### RoschText

`RoschText` est un composant React simple et stylisé pour afficher du texte avec des options de personnalisation. Il permet d'appliquer des styles tels que le gras, le soulignement, la majuscule, et plus encore, tout en offrant la possibilité de définir la couleur et la taille du texte.

#### Utilisation

Pour utiliser le composant RoschText, importez-le simplement depuis @rosch/ui :

```typescript
import { RoschText } from '@rosch/ui';
```

Le composant RoschText vous permet d'afficher du texte avec diverses options de style en utilisant les propriétés disponibles. Voici un exemple d'utilisation de base :

```typescript
    <RoschText bold={true} fontSize="lg" colorType="primary">
        Bold and large text with primary color
    </RoschText>
```

### RoschButton

`RoschButton` est un composant React stylisé qui permet de créer des boutons personnalisés avec diverses options de style. Vous pouvez contrôler l'apparence du bouton, y compris sa couleur, sa taille, et son état (comme désactivé ou actif).

#### Utilisation

Pour utiliser le composant `RoschButton`, importez-le simplement depuis `@rosch/ui` :

```typescript
import { RoschButton } from '@rosch/ui';
```

Le composant `RoschButton` vous permet de créer des boutons avec différentes propriétés pour personnaliser leur apparence et leur comportement. Voici un exemple d'utilisation de base :

```typescript
<RoschButton colorType="primary" size="md">
    Click Me
</RoschButton>
```

### RoschInput

`RoschInput` est un composant React stylisé qui permet de créer des champs de saisie de texte avec diverses options de personnalisation. Vous pouvez contrôler l'apparence de l'input, ainsi que son comportement (comme la gestion des états actifs ou désactivés).

#### Utilisation

Pour utiliser le composant `RoschInput`, importez-le simplement depuis `@rosch/ui` :

```typescript
import { RoschInput } from '@rosch/ui';
```

Le composant `RoschInput` vous permet de créer des champs de saisie de texte avec différentes propriétés pour personnaliser leur apparence et leur comportement. Voici un exemple d'utilisation de base :

```typescript
<RoschInput placeholder="Enter your text here" size="md" disabled={false} />
```

