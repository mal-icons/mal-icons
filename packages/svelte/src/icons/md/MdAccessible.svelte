<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"4","r":"2"}],["path",{"d":"M19 13v-2c-1.540.02-3.09-0.75-4.07-1.83l-1.29-1.43c-0.17-0.19-0.38-0.34-0.61-0.45-0.01 0-0.01-0.01-0.02-0.01H13c-0.35-0.2-0.75-0.3-1.19-0.26C10.76 7.11 10 8.04 10 9.09V15c0 1.10.9 2 2 2h5v5h2v-5.5c0-1.1-0.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-9 7c-1.66 0-3-1.34-3-3 0-1.310.84-2.41 2-2.83V12.1a5 5 0 1 0 5.9 5.9h-2.07c-0.41 1.16-1.52 2-2.83 2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
