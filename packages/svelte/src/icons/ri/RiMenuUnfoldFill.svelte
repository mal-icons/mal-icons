<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 18V20H3V18H21ZM17 3.5L22 8.5L17 13.5V3.5ZM12 11V13H3V11H12ZM12 4V6H3V4H12Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
