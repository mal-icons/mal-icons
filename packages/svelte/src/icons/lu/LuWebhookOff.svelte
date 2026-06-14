<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 17h-5c-1.09-0.02-1.940.92-2.5 1.9A3 3 0 1 1 2.57 15"}],["path",{"d":"M9 3.4a4 4 0 0 1 6.520.66"}],["path",{"d":"m6 17 3.1-5.8a2.5 2.5 0 0 0 0.06-2.05"}],["path",{"d":"M20.3 20.3a4 4 0 0 1-2.30.7"}],["path",{"d":"M18.6 13a4 4 0 0 1 3.36 3.41"}],["path",{"d":"m12 6 0.6 1"}],["path",{"d":"m2 2 20 20"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
