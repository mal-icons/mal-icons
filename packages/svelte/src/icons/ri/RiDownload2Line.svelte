<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.55 21.55 21 21 21H3C2.45 21 2 20.55 2 20V12H4V19Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
