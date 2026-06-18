<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 0 4.63 12.22 12 16.57 19.37 12.22 12 0ZM12 24 4.63 13.62 12 18 19.37 13.62 12 24Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
