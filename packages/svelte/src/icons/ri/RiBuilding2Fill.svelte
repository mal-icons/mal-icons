<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 19H14V6L20.39 8.74C20.76 8.9 21 9.26 21 9.66V19H23V21H1V19H3V5.65C3 5.25 3.23 4.9 3.59 4.74L11.3 1.31C11.55 1.2 11.84 1.31 11.96 1.57C11.99 1.63 12 1.7 12 1.77V19Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
