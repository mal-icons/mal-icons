<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 12.5v-9A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5M2.5 4a0.50.5 0 0 0-0.50.5v3a0.50.5 0 0 0 1 0V5h2.5a0.50.5 0 0 0 0-1zm11 8a0.50.5 0 0 0 0.5-0.5v-3a0.50.5 0 0 0-1 0V11h-2.5a0.50.5 0 0 0 0 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
