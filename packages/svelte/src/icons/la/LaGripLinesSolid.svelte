<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 3 11 L 3 13 L 29 13 L 29 11 L 3 11 z M 3 19 L 3 21 L 29 21 L 29 19 L 3 19 z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
