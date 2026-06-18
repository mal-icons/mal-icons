<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 0C5.39 0 0 5.35 0 12s5.35 12 12 12 12-5.35 12-12S18.61 0 12 0zm0 18c-3.32 0-6-2.67-6-6s2.68-6 6-6 6 2.68 6 6-2.67 6-6 6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
