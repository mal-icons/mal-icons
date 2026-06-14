<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-3 3.75a0.750.75 0 0 1 0.75-0.75h1.5a0.750.75 0 0 1 0.750.75v4.25h0.75a0.750.75 0 0 1 0 1.5h-3a0.750.75 0 0 1 0-1.5h0.75V12h-0.75a0.750.75 0 0 1-0.75-0.75Z"}],["path",{"d":"M12 1c6.08 0 11 4.93 11 11s-4.92 11-11 11S1 18.08 1 12 5.93 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
