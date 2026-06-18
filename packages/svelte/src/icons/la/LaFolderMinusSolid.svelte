<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 6 3 L 6 4 L 6 28 L 6 29 L 7 29 L 25 29 L 26 29 L 26 28 L 26 15.44 L 27.72 13.72 L 28 13.41 L 28 13 L 28 4 L 28 3 L 27 3 L 24 3 L 23 3 L 7 3 L 6 3 z M 8 5 L 22 5 L 22 13 L 22 13.41 L 22.28 13.72 L 24 15.44 L 24 27 L 8 27 L 8 5 z M 24 5 L 26 5 L 26 12.56 L 25 13.56 L 24 12.56 L 24 5 z M 12 15 L 12 17 L 20 17 L 20 15 L 12 15 z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
