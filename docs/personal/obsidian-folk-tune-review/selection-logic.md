# Tune Selection Logic

The [`review`](review-command.mdx) and [`pick`](pick-command.mdx) commands use the same prioritisation logic to return a requested number of tunes for review. 

The `pick` command displays the resulting list, while `review` works through that list interactively and records the outcome.

## Summary

Scheduled selection is intended to keep neglected repertoire in circulation. We want to avoid the "oh, I haven't played that in years" scenario in a session when you can't quite get your fingers to go where they once could.

Tunes are prioritised in this order:

1. **Orderdue tunes**: tunes that need attention now are chosen first;
2. **Never-reviewed tunes**: tunes that have never been reviewed are introduced once known overdue items have been chosen; and
3. **Tunes not yet due**: tunes that are still within their review interval can be included when there are spare places in the requested list.

:::note
When `review` is run for one specifically named tune, using the `--tune` flag, it opens that tune directly, bypassing this logic.
:::

## Which tunes can be selected?

The application starts with tune notes found in the vault, then removes tunes that are not candidates for review.

A tune will only be considered when:

- it has a unique `id`, so that the CLI database can track its review history;
- it is flagged as having been learned in the note's metadata; and
- it passes any review-store and origin filters described below.

In the tune note, `learn: true` means that the tune is still to be learned, so it is not selected. A tune with `learn: false`, or with no `learn` value, is treated as part of the learned repertoire.

### Tunes excluded from the usual review list

By default, a tune is not selected when its review record says either of the following:

- `exclude: true`: the tune has been explicitly removed from review selection (e.g. it's one you know like the back of your hand).
- `maintenance: "session"`: regular session playing is expected to maintain the tune. Some tunes are played all the time anyway, so you don't want them included in a review.

The command options to include excluded tunes or session-maintained tunes override these rules independently. For example, including excluded tunes does not also include session-maintained tunes unless that flag is supplied as well.

### Filtering by origin

When an origin filter is supplied, only tunes whose displayed origin contains that text are retained. Matching is not case-sensitive.

For example, a filter of `scot` can match an origin displayed as `Scottish`, including when the origin in the note is an Obsidian link such as `[[Ref/Geo/Scottish|Scottish]]`.

## When is a tune due?

For each eligible tune, the application checks the review store to establish the most recent time it was maintained:

- `last` is the date it was reviewed through the CLI.
- `sessionLast` is the date it was recorded as played in a session.
- If both dates exist, the later date is used.

This most recent date is the tune's starting point for its next review. The tune becomes due after its review interval has passed:

```text
due date = most recent review or session date + interval in days
```

Each tune can have its own interval in its review record. If it has no interval, the selection service uses the default interval, which is 365 days unless configured differently by its caller.


### Tunes with no review history

A tune is treated as never reviewed when it has no review record, or when its record contains no usable review or session date. These tunes are available for selection, but are kept as their own group rather than being mixed into overdue tunes with a known history.

## Selection order

After filtering and calculating due dates, tunes are placed into the requested list in this order:

1. **Overdue tunes with review history.** These come first, with the most overdue tune first.
2. **Never-reviewed tunes.** These are used next, in a random order.
3. **Tunes that are not yet due.** If more tunes are needed to reach the requested count, the remaining places are filled from this group in a random order.

Only the requested number of tunes is returned. This means an overdue tune will always take priority over a never-reviewed or not-yet-due tune when there are more candidates than places.

The current selection behaviour does not give priority to the least recently played tune in the final, not-yet-due group; those top-up choices are random.

## Example

Suppose five tunes are requested and the eligible repertoire contains:

| Tune   | Status            |
|--------|-------------------|
| Tune A | No review history |
| Tune B | 12 days overdue   |
| Tune C | Not due yet       |
| Tune D | 90 days overdue   |
| Tune E | Not due yet       |

The selected list will start with Tune D, followed by Tune B, then Tune A. Tunes C and E fill the final two places – their order is random.


