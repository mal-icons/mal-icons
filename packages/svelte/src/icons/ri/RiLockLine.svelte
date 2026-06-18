<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 10H20C20.55 10 21 10.45 21 11V21C21 21.55 20.55 22 20 22H4C3.45 22 3 21.55 3 21V11C3 10.45 3.45 10 4 10H5V9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9V10ZM5 12V20H19V12H5ZM11 14H13V18H11V14ZM17 10V9C17 6.24 14.76 4 12 4C9.24 4 7 6.24 7 9V10H17Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
