<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.65 6.12C19.54 1.76 17.88 0 13.64 0H7.34v4.07h4.57c1.8 0 2.81 0 2.81 1.66v2.38c-0.83 0-2.88-0.04-4.43-0.04-4.25 0-5.83 1.73-5.94 6.12v3.74c0.11 4.1 1.51 5.87 5.25 6.08l3.85-4.07c-0.40.04-0.860.04-1.440.04-1.8 0-2.81 0-2.81-1.65v-4.57c0-1.65 1.01-1.65 2.81-1.65 1.91 0 2.81 0 2.81 1.66v10.22h4.82z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
