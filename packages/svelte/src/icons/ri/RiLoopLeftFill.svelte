<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 4C9.41 4 7.11 5.23 5.64 7.14L8 9.5H2V3.5L4.22 5.72C6.05 3.45 8.86 2 12 2 17.52 2 22 6.48 22 12H20C20 7.58 16.42 4 12 4ZM4 12C4 16.42 7.58 20 12 20 14.59 20 16.89 18.77 18.36 16.86L16 14.5 22 14.5V20.5L19.78 18.28C17.95 20.55 15.14 22 12 22 6.48 22 2 17.52 2 12H4Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
