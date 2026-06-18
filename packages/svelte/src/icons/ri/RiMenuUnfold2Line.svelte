<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.6 3.9L16 8.5L20.6 13.1L22.01 11.68L18.83 8.5L22.01 5.32L20.6 3.9ZM21 20V18H3V20H21ZM12 13V11H3V13H12ZM12 6V4H3V6H12Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
