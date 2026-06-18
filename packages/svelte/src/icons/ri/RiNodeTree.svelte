<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 2C10.55 2 11 2.45 11 3V7C11 7.55 10.55 8 10 8H8V10H13V9C13 8.45 13.45 8 14 8H20C20.55 8 21 8.45 21 9V13C21 13.55 20.55 14 20 14H14C13.45 14 13 13.55 13 13V12H8V18H13V17C13 16.45 13.45 16 14 16H20C20.55 16 21 16.45 21 17V21C21 21.55 20.55 22 20 22H14C13.45 22 13 21.55 13 21V20H7C6.45 20 6 19.55 6 19V8H4C3.45 8 3 7.55 3 7V3C3 2.45 3.45 2 4 2H10ZM19 18H15V20H19V18ZM19 10H15V12H19V10ZM9 4H5V6H9V4Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
