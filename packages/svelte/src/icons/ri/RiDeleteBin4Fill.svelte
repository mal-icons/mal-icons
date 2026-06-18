<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 7V21C20 21.55 19.55 22 19 22H5C4.45 22 4 21.55 4 21V7H2V5H22V7H20ZM11 10V17H13V10H11ZM7 2H17V4H7V2Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
