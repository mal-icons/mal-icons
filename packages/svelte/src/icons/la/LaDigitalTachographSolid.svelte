<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 4.02 7 C 2.9 7 2 7.9 2 9.02 L 2 22.98 C 2 24.1 2.9 25 4.02 25 L 26.98 25 C 28.1 25 29 24.1 29 22.98 L 29 9.02 C 29 7.9 28.1 7 26.98 7 L 4.02 7 z M 4 9 L 26.98 9 L 27 9 L 27 23 L 4 23 L 4 9 z M 6 11 L 6 13 L 16 13 L 16 11 L 6 11 z M 6 15 L 6 17 L 8 17 L 8 15 L 6 15 z M 10 15 L 10 17 L 12 17 L 12 15 L 10 15 z M 14 15 L 14 17 L 16 17 L 16 15 L 14 15 z M 6 19 L 6 21 L 16 21 L 16 19 L 6 19 z M 18 19 L 18 21 L 25 21 L 25 19 L 18 19 z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
