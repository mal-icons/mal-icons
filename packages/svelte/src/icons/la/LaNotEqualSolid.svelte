<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 6.72 5.28 L 5.28 6.72 L 25.28 26.72 L 26.72 25.28 L 21.44 20 L 27 20 L 27 18 L 19.44 18 L 15.44 14 L 27 14 L 27 12 L 13.44 12 Z M 5 12 L 5 14 L 9.91 14 L 7.91 12 Z M 5 18 L 5 20 L 15.91 20 L 13.91 18 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
