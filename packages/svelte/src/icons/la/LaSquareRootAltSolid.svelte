<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 19.31 6 L 19.06 6.66 L 12.91 22.72 L 9.91 16.56 L 9.63 16 L 6 16 L 6 18 L 8.38 18 L 12 25.44 L 12.28 26 L 13.78 26 L 14.03 25.34 L 20.69 8 L 26 8 L 26 6 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
