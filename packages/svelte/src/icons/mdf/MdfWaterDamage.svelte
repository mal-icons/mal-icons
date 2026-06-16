<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 3 2 12h3v8h14v-8h3L12 3zm0 13c-1.1 0-2-0.9-2-2s2-4 2-4 2 2.9 2 4-0.9 2-2 2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
