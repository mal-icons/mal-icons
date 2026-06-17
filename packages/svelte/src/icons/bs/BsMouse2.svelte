<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 5.19C3 2.34 5.22 0 8 0s5 2.34 5 5.19v5.63C13 13.66 10.78 16 8 16s-5-2.34-5-5.19V5.19zm4.5-4.15C5.54 1.29 4 3.04 4 5.19V5.5h3.5zm1 0V5.5H12v-0.31c0-2.15-1.54-3.9-3.5-4.15M12 6.5H4v4.31C4 13.15 5.81 15 8 15s4-1.85 4-4.19z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
