<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 19H20V12H22V20C22 20.55 21.55 21 21 21H3C2.45 21 2 20.55 2 20V12H4V19ZM14 9V15H10V9H5L12 2L19 9H14Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
