<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.45 20.44h10.2V24H12.45Zm2.46-0.8 8.87-9.81L14.9 0l-2.44 2.7 6.44 7.13-6.44 7.12ZM9.1 0 0.22 9.82l8.87 9.81 2.46-2.69L5.11 9.82 11.55 2.7Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
