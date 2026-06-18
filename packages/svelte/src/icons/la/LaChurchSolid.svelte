<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 15 3 L 15 5 L 13 5 L 13 7 L 15 7 L 15 9.56 L 11.28 13.28 L 11 13.59 L 11 17.41 L 4.5 21.13 L 5.5 22.88 L 7 22.03 L 7 29 L 15 29 L 15 25 C 15 24.45 15.45 24 16 24 C 16.55 24 17 24.45 17 25 L 17 29 L 25 29 L 25 22.03 L 26.5 22.88 L 27.5 21.13 L 21 17.41 L 21 13.59 L 20.72 13.28 L 17 9.56 L 17 7 L 19 7 L 19 5 L 17 5 L 17 3 Z M 16 11.44 L 19 14.44 L 19 18.59 L 19.5 18.88 L 23 20.88 L 23 27 L 19 27 L 19 25 C 19 23.36 17.64 22 16 22 C 14.36 22 13 23.36 13 25 L 13 27 L 9 27 L 9 20.88 L 12.5 18.88 L 13 18.59 L 13 14.44 Z M 16 15 C 15.45 15 15 15.45 15 16 L 15 19 L 17 19 L 17 16 C 17 15.45 16.55 15 16 15 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
