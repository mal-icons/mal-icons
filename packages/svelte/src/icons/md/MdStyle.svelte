<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m2.53 19.65 1.340.56v-9.03l-2.43 5.86c-0.41 1.020.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98a2.01 2.01 0 0 0-1.81-1.23c-0.26 0-0.530.04-0.790.15L7.1 5.95a2 2 0 0 0-1.08 2.6l4.96 11.97a2 2 0 0 0 2.6 1.08l7.36-3.05a1.99 1.99 0 0 0 1.09-2.6zm-9.2 3.8L7.87 7.79l7.35-3.04h0.01l4.95 11.95-7.35 3.05z"}],["circle",{"cx":"11","cy":"9","r":"1"}],["path",{"d":"M5.88 19.75c0 1.10.9 2 2 2h1.45l-3.45-8.34v6.34z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
