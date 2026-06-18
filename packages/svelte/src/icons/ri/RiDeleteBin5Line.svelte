<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 8H20V21C20 21.55 19.55 22 19 22H5C4.45 22 4 21.55 4 21V8ZM6 10V20H18V10H6ZM9 12H11V18H9V12ZM13 12H15V18H13V12ZM7 5V3C7 2.45 7.45 2 8 2H16C16.55 2 17 2.45 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
