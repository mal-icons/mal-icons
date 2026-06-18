<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m23.53 1.02-7.69 3.45h-7.06l-2.98 3.45h7.17L0.47 22.98l7.68-3.61h7.07v0l2.98-3.45-7.150 12.48-14.9zM0 4.47v14.9h1.88l2.98-3.45H3.45v-8h0.94l2.82-3.45H0zm22.12 0-2.98 3.61h1.41v7.84h-0.94l-2.98 3.45H24V4.47h-1.88z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
