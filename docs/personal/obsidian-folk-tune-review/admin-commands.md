# Admin commands

> Set of commands to automate administrative tasks with the Obsidian vault, required to maintain and use this CLI

## Initialise IDs

```powershell
folk-tune admin id-init 
```

Best practice is to have auto-generated IDs upon creating a new tune note. 

I use this in my 'Tune Template' file:

```yaml
---
## other metadata
## ...
id: <%*
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
tR += uuidv4();
%>
created: <% tp.date.now("YYYY-MM-DD") %>
---
```

However, as is common, if you have an existing vault prior to using this CLI, you will need to add unique IDs to each tune note.

This command will scan your vault for tune notes and add a unique ID to each. 

Use `--dry-run` to see what would be changed without actually changing anything.

## Initialise vault

(IN PROGRESS)

If you do not have an existing vault and are starting from scratch, this command will create the whole recommended directory structure, including some of the standard reference data that can be amended afterwards.