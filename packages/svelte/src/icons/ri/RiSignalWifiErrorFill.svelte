<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 3C16.28 3 20.22 4.5 23.31 7L22.5 8H18L18 13.57L12 21L0.69 7C3.78 4.5 7.72 3 12 3ZM22 19V21H20V19H22ZM22 10V17H20V10H22Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
