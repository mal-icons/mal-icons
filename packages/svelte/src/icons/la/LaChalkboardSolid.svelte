<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 5 7 L 5 23 L 3 23 L 3 25 L 29 25 L 29 23 L 27 23 L 27 7 Z M 7 9 L 25 9 L 25 23 L 7 23 Z M 21.28 12.28 L 17 16.56 L 13.72 13.28 L 13 12.59 L 12.28 13.28 L 9.28 16.28 L 10.72 17.72 L 13 15.44 L 16.28 18.72 L 17 19.41 L 17.72 18.72 L 22.72 13.72 Z M 20 20 L 19 21 L 20 22 L 24 22 L 24 20 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
