<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 18V20H3V18H21ZM6.6 3.9L8.01 5.32L4.83 8.5L8.01 11.68L6.6 13.1L2 8.5L6.6 3.9ZM21 11V13H12V11H21ZM21 4V6H12V4H21Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
