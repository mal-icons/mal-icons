<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17.19 19.18L24 4.76 0 12.39l9.2 1.960.04 4.9 2.76-2.62-2.15-2.08 7.34 4.63z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
