<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.33 1.61C11.68 1.29 12.2 1.27 12.57 1.53L12.67 1.61L23 11H20V20C20 20.51 19.61 20.94 19.12 20.99L19 21H12.5L15 17L11.5 14L15.5 11L13 9L13.5 6L10.5 9L13 11L8 14L11.75 17.5L8.5 21H5C4.49 21 4.06 20.61 4.01 20.12L4 20V11H1L11.33 1.61Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
