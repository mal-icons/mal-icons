<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 18V20H3V18H21ZM7 3.5V13.5L2 8.5L7 3.5ZM21 11V13H12V11H21ZM21 4V6H12V4H21Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
