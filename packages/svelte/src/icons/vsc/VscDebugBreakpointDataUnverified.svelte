<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.73 5L11.46 8L9.73 11H6.27L4.54 8L6.27 5H9.73ZM9.73 4H6.27C5.91 4 5.58 4.19 5.4 4.5L3.67 7.5C3.49 7.81 3.49 8.19 3.67 8.5L5.4 11.5C5.58 11.81 5.91 12 6.27 12H9.73C10.09 12 10.42 11.81 10.6 11.5L12.33 8.5C12.51 8.19 12.51 7.81 12.33 7.5L10.6 4.5C10.42 4.19 10.09 4 9.73 4Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
