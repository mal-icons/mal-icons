<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M272-120 64-480l208-360h416l208 360-208 360H272Zm34-60h348l172-300-172-300H306L133-480l173 300Zm174-300Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
