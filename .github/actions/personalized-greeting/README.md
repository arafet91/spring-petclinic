# Action de salutation personnalisée

Cette action construit une salutation à partir de `username` et `greeting`, l'affiche dans les logs et expose le texte complet avec l'output `message`.

## Inputs

| Nom | Obligatoire | Valeur par défaut | Description |
| --- | --- | --- | --- |
| `username` | Oui | Aucune | Nom de la personne à saluer. |
| `greeting` | Non | `Bonjour` | Texte de salutation. |

## Output

| Nom | Description |
| --- | --- |
| `message` | Salutation complète, par exemple `Bonjour, Ada!`. |

## Utilisation

```yaml
steps:
  - name: Saluer Ada
    id: greeting
    uses: ./.github/actions/personalized-greeting
    with:
      username: Ada

  - name: Utiliser la salutation
    run: echo "${{ steps.greeting.outputs.message }}"
```

Si `username` est absent, l'action échoue avec le message `Input required and not supplied: username`.

## Développement et test local

Depuis ce dossier, installez les dépendances puis générez le bundle autonome :

```sh
npm install
npm run build
```

Le workflow de test local se trouve dans `.github/workflowsLocal/blank.yml` et peut être exécuté depuis la racine du dépôt avec :

```sh
act -W .github/workflowsLocal/blank.yml -j test-greeting
```