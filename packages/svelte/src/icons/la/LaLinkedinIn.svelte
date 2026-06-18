<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 8.64 4 C 7.18 4 6 5.18 6 6.64 C 6 8.1 7.18 9.31 8.64 9.31 C 10.1 9.31 11.28 8.1 11.28 6.64 C 11.28 5.18 10.1 4 8.64 4 z M 21.54 11 C 19.32 11 18.05 12.16 17.44 13.31 L 17.37 13.31 L 17.37 11.31 L 13 11.31 L 13 26 L 17.56 26 L 17.56 18.73 C 17.56 16.81 17.7 14.96 20.07 14.96 C 22.41 14.96 22.44 17.15 22.44 18.85 L 22.44 26 L 26.99 26 L 27 26 L 27 17.93 C 27 13.98 26.15 11 21.54 11 z M 6.36 11.31 L 6.36 26 L 10.92 26 L 10.92 11.31 L 6.36 11.31 z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
