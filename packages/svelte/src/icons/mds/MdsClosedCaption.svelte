<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 4H3v16h18V4zm-10 7H9.5v-0.5h-2v3h2V13H11v2H6V9h5v2zm7 0h-1.5v-0.5h-2v3h2V13H18v2h-5V9h5v2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
