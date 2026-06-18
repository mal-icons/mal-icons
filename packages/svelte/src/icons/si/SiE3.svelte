<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.07 16.52H4.77v-2.67h6.26v-3.76H4.77v-2.64h6.26V3.69H0v16.62h14.15c0-0.03-2.78-0.71-3.08-3.79zm10.12-6.4c1.9 1.29 2.88 2.54 2.81 5.11-0.07 2.67-2.78 5.04-5.72 5.04-2.1 0-4.77-0.95-5.79-3.76l3.49-1.56c0.470.88 1.15 1.56 2.2 1.56 1.15 0 2-0.88 2.1-20.03-0.27-0.14-2.23-2.1-2.3l-2.2-0.24 2.81-4.54h-6.33v-3.76h11.54z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
