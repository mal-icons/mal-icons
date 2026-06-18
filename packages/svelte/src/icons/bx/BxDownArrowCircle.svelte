<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 1.99C6.49 1.99 2 6.48 2 11.99c0 5.51 4.49 10 10 10 5.51 0 10-4.49 10-10s-4.49-10-10-10zm0 18c-4.410-8-3.59-8-8 0-4.41 3.59-8 8-8 4.410 8 3.59 8 8s-3.59 8-8 8z"}],["path",{"d":"M13 8h-2v4H7.99l4.01 4.01L16 12h-3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
