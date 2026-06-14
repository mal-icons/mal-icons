<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1.53 13.24a1.75 1.75 0 0 1 0-2.47l9.27-9.27a1.75 1.75 0 0 1 2.48 0l9.27 9.27a1.75 1.75 0 0 1 0 2.47l-9.27 9.27a1.75 1.75 0 0 1-2.47 0Zm1.06-1.41a0.250.25 0 0 0 0 0.35l9.27 9.27a0.250.25 0 0 0 0.35 0l9.27-9.27a0.250.25 0 0 0 0-0.35l-9.27-9.27a0.250.25 0 0 0-0.35 0Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
