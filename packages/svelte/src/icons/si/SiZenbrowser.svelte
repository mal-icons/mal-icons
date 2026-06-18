<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M24 12c0 6.63-5.37 12-12 12S0 18.63 0 12 5.37 0 12 0s12 5.37 12 12zm-12 9.85c5.44 0 9.85-4.41 9.85-9.85S17.44 2.15 12 2.15 2.15 6.56 2.15 12 6.56 21.85 12 21.85zM20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-8 6.46a6.46 6.46 0 1 0 0-12.92 6.46 6.46 0 0 0 0 12.92zm0-1.85a4.62 4.62 0 1 0 0-9.23 4.62 4.62 0 0 0 0 9.23zM15.69 12a3.69 3.69 0 1 1-7.38 0 3.69 3.69 0 0 1 7.38 0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
