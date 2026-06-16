<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m18 10.48 4-3.98v11l-4-3.98V18c0 1.1-0.9 2-2 2H4c-1.1 0-2-0.9-2-2V6c0-1.10.9-2 2-2h12c1.1 0 2 0.9 2 2v4.48zm-2-0.79V6H4v12h12V9.69zM10 12c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2zm0 1c1.34 0 4 0.67 4 2v1H6v-1c0-1.33 2.66-2 4-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
