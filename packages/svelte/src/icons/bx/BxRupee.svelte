<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 6V4H6v2h3.5c1.3 0 2.40.84 2.82 2H6v2h6.32A2.99 2.99 0 0 1 9.5 12H6v2.41L11.59 20h2.83l-6-6H9.5a5.01 5.01 0 0 0 4.9-4H17V8h-2.6a4.93 4.93 0 0 0-0.92-2H17z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
