<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 3.5V13.5L16 8.5L21 3.5ZM21 20V18H3V20H21ZM12 13V11H3V13H12ZM12 6V4H3V6H12Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
