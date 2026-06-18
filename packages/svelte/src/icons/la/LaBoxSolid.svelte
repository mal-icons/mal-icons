<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 8.5 5 L 8.19 5.41 L 5 9.66 L 5 27 L 27 27 L 27 9.66 L 23.81 5.41 L 23.5 5 Z M 9.5 7 L 15 7 L 15 9 L 8 9 Z M 17 7 L 22.5 7 L 24 9 L 17 9 Z M 7 11 L 25 11 L 25 25 L 7 25 Z M 12.81 13 C 12.26 13.05 11.86 13.54 11.91 14.09 C 11.96 14.64 12.45 15.05 13 15 L 19 15 C 19.36 15 19.7 14.82 19.88 14.5 C 20.06 14.19 20.06 13.81 19.88 13.5 C 19.7 13.18 19.36 13 19 13 L 13 13 C 12.97 13 12.94 13 12.91 13 C 12.88 13 12.84 13 12.81 13 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
