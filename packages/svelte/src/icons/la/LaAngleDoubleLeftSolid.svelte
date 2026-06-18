<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 15.91 4.78 L 4.69 16 L 15.91 27.22 L 17.31 25.78 L 7.53 16 L 17.31 6.22 Z M 22.91 4.78 L 11.69 16 L 22.91 27.22 L 24.31 25.78 L 14.53 16 L 24.31 6.22 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
