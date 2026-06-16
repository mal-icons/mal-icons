<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m11.19 1.36-7 3.11C3.47 4.79 3 5.51 3 6.3V11c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6.3c0-0.79-0.47-1.51-1.19-1.83l-7-3.11c-0.51-0.23-1.11-0.23-1.62 0zm-1.9 14.93L6.7 13.7a11 0 1 1 1.41-1.41L10 14.17l5.88-5.88a11 0 1 1 1.41 1.41l-6.59 6.59a11 0 0 1-1.41 0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
