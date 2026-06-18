<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 9h6v6H9z"}],["path",{"d":"M20 6c0-1.1-0.9-2-2-2h-2V2h-2v2h-4V2H8v2H6c-1.1 0-2 0.9-2 2v2H2v2h2v4H2v2h2v2c0 1.10.9 2 2 2h2v2h2v-2h4v2h2v-2h2c1.1 0 2-0.9 2-2v-2h2v-2h-2v-4h2V8h-2V6zM6 18V6h12l0 12H6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
