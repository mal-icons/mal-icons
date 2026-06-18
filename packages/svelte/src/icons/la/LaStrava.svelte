<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 14.18 2 L 5.9 18 L 10.78 18 L 14.18 11.62 L 17.56 18 L 22.4 18 L 14.18 2 z M 22.4 18 L 20 22.79 L 17.56 18 L 13.86 18 L 20 30 L 26.1 18 L 22.4 18 z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
