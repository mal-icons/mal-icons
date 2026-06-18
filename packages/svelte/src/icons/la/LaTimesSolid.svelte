<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 7.22 5.78 L 5.78 7.22 L 14.56 16 L 5.78 24.78 L 7.22 26.22 L 16 17.44 L 24.78 26.22 L 26.22 24.78 L 17.44 16 L 26.22 7.22 L 24.78 5.78 L 16 14.56 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
