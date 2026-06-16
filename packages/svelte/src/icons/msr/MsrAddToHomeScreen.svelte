<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M300-40q-24.75 0-42.37-17.62T240-100v-146h60v56h440v-580H300v56h-60v-146q0-24.75 17.63-42.37T300-920h440q24.75 0 42.38 17.63T800-860v760q0 24.75-17.62 42.38T740-40H300Zm0-90v30h440v-30H300Zm109-408L184-314q-9 9-21 9t-21-9q-9-9-9-21.5t9-21.5l223-223H230q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T230-640h209q12.75 0 21.38 8.63T469-610v209q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T409-401v-137ZM300-830h440v-30H300v30Zm0 0v-30 30Zm0 700v30-30Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
