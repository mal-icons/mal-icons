<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 15.51 2.44 L 3 24 L 5.31 24 L 15.51 6.42 L 25.63 23.8 L 29.57 17 L 27.26 17 L 25.63 19.82 L 15.51 2.44 z M 15.53 10.43 L 8.81 22 L 11.13 22 L 15.53 14.41 L 24.03 29 L 26.34 29 L 15.53 10.43 z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
