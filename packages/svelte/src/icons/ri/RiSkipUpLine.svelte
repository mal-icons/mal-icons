<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 13.91L16.79 18.71L18.21 17.29L12 11.09L5.79 17.29L7.21 18.71L12 13.91ZM6 7L18 7V9L6 9L6 7Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
