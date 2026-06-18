<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm1.39 18.54-0.24-3.76-2.39-1.610.15 5.13-4.320.15-0.17-13.41L10.5 4.98l0.09 5.35 2.22-1.610.11-3.78 4.410.28-0.35 4.59-2.61 1.61 2.67 1.170.91 5.69-4.560.26z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
