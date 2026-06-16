<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-4.99 0-9-4.01-9-9s4.01-9 9-9 9 4.01 9 9-4.01 9-9 9z"}],["path",{"d":"M19.73 11.42 12.54 4.2c-0.36-0.27-0.8-0.27-1.15 0L4.2 11.42c-0.270.36-0.270.8 0 1.16l7.19 7.22c0.360.270.80.27 1.15 0l7.19-7.22c0.36-0.360.36-0.89 0-1.16zM13.5 14.5l-1.41-1.41L13.17 12H10v3H8v-4c0-0.60.4-1 1-1h4.17l-1.09-1.09L13.5 7.5 17 11l-3.5 3.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
