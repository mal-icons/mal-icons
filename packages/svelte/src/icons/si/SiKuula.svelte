<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 0C5.39 0 0 5.39 0 12s5.39 12 12 12 12-5.39 12-12S18.61 0 12 0Zm0 2.55A9.43 9.43 0 0 1 21.45 12 9.43 9.43 0 0 1 12 21.45 9.43 9.43 0 0 1 2.55 12 9.43 9.43 0 0 1 12 2.55Zm-0.61 5.37 4.37-0.69 2.01 3.94-3.13 3.13-3.94-2.01z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
