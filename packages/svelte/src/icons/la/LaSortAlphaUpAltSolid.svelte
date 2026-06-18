<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 5 5 L 5 7 L 10.56 7 L 5.28 12.28 L 5 12.59 L 5 15 L 13 15 L 13 13 L 7.44 13 L 12.72 7.72 L 13 7.41 L 13 5 L 5 5 z M 23 5.5 L 22.28 6.19 L 18 10.5 L 19.41 11.91 L 22 9.31 L 22 28 L 24 28 L 24 9.31 L 26.59 11.91 L 28 10.5 L 23.72 6.19 L 23 5.5 z M 8.19 17 L 7.97 17.66 L 6.03 23 L 6 23 L 6 23.06 L 5.06 25.66 L 5 25.81 L 5 27 L 7 27 L 7 26.16 L 7.41 25 L 10.59 25 L 11 26.16 L 11 27 L 13 27 L 13 25.81 L 12.94 25.66 L 12 23.06 L 12 23 L 11.97 23 L 10.03 17.66 L 9.81 17 L 8.19 17 z M 9 20.66 L 9.84 23 L 8.16 23 L 9 20.66 z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
