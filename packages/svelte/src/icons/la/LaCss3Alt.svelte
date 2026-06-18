<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 6 4 L 8 25 L 16 28 L 24 25 L 26 4 L 6 4 z M 9.33 7 L 22.65 7 L 22.39 10 L 16.7 13 L 19.12 13 L 22 13 L 22.12 13 L 21.61 19.01 L 21.63 19 L 21.36 22 L 16 24 L 10.63 22 L 10.3 18 L 13.33 18 L 13.48 20.03 L 16 20.9 L 18.52 20.05 L 18.87 16 L 10.13 16 L 9.87 13 L 15.78 10 L 9.61 10 L 9.33 7 z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
