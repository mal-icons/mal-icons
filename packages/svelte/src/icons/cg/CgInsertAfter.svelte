<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 4C12.55 4 13 4.45 13 5V8H16C16.55 8 17 8.45 17 9C17 9.55 16.55 10 16 10H13V13C13 13.55 12.55 14 12 14C11.45 14 11 13.55 11 13V10H8C7.45 10 7 9.55 7 9C7 8.45 7.45 8 8 8H11V5C11 4.45 11.45 4 12 4Z","fill":"currentColor"}],["path",{"d":"M3 19C3 18.45 3.45 18 4 18H20C20.55 18 21 18.45 21 19C21 19.55 20.55 20 20 20H4C3.45 20 3 19.55 3 19Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
