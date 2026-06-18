<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 4 5 L 4 7 L 6 7 L 6 5 L 4 5 z M 22 5.5 L 21.28 6.19 L 17 10.5 L 18.41 11.91 L 21 9.31 L 21 28 L 23 28 L 23 9.31 L 25.59 11.91 L 27 10.5 L 22.72 6.19 L 22 5.5 z M 4 9 L 4 11 L 8 11 L 8 9 L 4 9 z M 4 13 L 4 15 L 10 15 L 10 13 L 4 13 z M 4 17 L 4 19 L 12 19 L 12 17 L 4 17 z M 4 21 L 4 23 L 14 23 L 14 21 L 4 21 z M 4 25 L 4 27 L 16 27 L 16 25 L 4 25 z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
