<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M353-127 127-353q-9-9-9-21.5t9-21.5l437-437q9-9 21-9t21 9l227 226q9 9 9 21.5t-9 21.5L396-127q-9 9-21.5 9t-21.5-9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
