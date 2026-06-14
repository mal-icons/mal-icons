<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.22 5.22a0.750.75 0 0 1 1.06 0l6.25 6.25a0.750.75 0 0 1 0 1.06l-6.25 6.25a0.750.75 0 1 1-1.06-1.06l4.97-4.97H1.75a0.750.75 0 0 1 0-1.5h14.44L11.22 6.28a0.750.75 0 0 1 0-1.06Zm10.03-1.47a0.750.75 0 0 1 0.750.75v15a0.750.75 0 0 1-1.5 0v-15a0.750.75 0 0 1 0.75-0.75Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
