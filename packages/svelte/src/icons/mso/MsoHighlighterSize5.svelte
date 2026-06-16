<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M410-70 70-410q-9-9-9-21t9-21l438-438q8-8 20.5-8t21.5 9l340 339q9 9 9 21t-9 21L452-70q-9 9-21 9t-21-9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
