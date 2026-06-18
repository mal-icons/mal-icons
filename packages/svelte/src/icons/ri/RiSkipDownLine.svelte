<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 10.09L7.21 5.29L5.79 6.71L12 12.91L18.21 6.71L16.79 5.29L12 10.09ZM18 17L6 17L6 15L18 15V17Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
