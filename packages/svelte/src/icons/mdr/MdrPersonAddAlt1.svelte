<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"9","cy":"8","r":"4"}],["path",{"d":"M9 14c-2.67 0-8 1.34-8 4v1c0 0.550.45 1 1 1h14c0.55 0 1-0.45 1-1v-1c0-2.66-5.33-4-8-4zm11-4V7h-2v3h-3v2h3v3h2v-3h3v-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
