<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 6V3C7 2.45 7.45 2 8 2H20C20.55 2 21 2.45 21 3V17C21 17.55 20.55 18 20 18H17V21C17 21.55 16.55 22 15.99 22H4.01C3.45 22 3 21.56 3 21L3 7C3 6.45 3.45 6 4.01 6H7ZM9 6H17V16H19V4H9V6ZM7 11V13H13V11H7ZM7 15V17H13V15H7Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
