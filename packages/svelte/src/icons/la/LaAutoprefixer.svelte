<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 15.93 5 L 8.67 27 L 12.16 27 L 13.4 23 L 18.61 23 L 19.84 27 L 23.33 27 L 15.93 5 z M 15.97 14.69 L 16.04 14.69 L 17.99 21 L 14.02 21 L 15.97 14.69 z M 9.27 21 L 1.47 21.56 L 1 22.67 L 8.56 23 L 9.27 21 z M 22.7 21 L 23.42 23 L 31 22.67 L 30.53 21.56 L 22.7 21 z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
