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
  // Ajoutez votre configuration pour le thème ici
};

const colors = {
  // Ajoutez votre palette de couleurs ici
}

const App = () => {
  return (
    <RoschTheme theme={theme} colors={colors}>
      <div>
        <RoschText>Bienvenue sur mon application</RoschText>
      </div>
    </RoschTheme>
  );
};

export default App;
```

## Thématisation
Le package @myrosch/ui utilise le composant RoschTheme pour permettre une personnalisation complète des composants via un thème global. Vous pouvez définir les styles globaux à appliquer sur tous les composants. un thème par defaut est fourni si aucun n'est fourni dans RoschTheme

```typescript
{
  name: "default-theme",  
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

### Palette de couleurs par défaut

La palette de couleurs est définie de manière centralisée pour garantir une cohérence dans l'apparence de vos composants.

```typescript
const defaultThemeColor = {
  buttons: {
    primary: {
      default: {
        onColor: '#ffffff',
        color: '#007bff',
      },
      disabled: {
        onColor: '#e2e6ea',
        color: '#6c757d',
      },
    },
    secondary: {
      default: {
        onColor: '#ffffff',
        color: '#6c757d',
      },
      disabled: {
        onColor: '#e2e6ea',
        color: '#adb5bd',
      },
    },
  },
  inputs: {
    primary: {
      default: {
        onColor: '#ffffff',
        color: '#007bff',
      },
      disabled: {
        onColor: '#e9ecef',
        color: '#6c757d',
      },
    },
  },
  texts: {
    primary: {
      default: {
        color: '#007bff',
      },
    },
    secondary: {
      default: {
        color: '#6c757d',
      },
    },
  },
};
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

