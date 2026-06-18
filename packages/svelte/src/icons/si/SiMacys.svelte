<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.020.62L9.19 9.29H0l7.45 5.38-2.82 8.67L12 17.99l7.42 5.39-2.83-8.71L24 9.29h-9.16L12.020.62v0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
