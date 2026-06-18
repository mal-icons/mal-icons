<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M24 12.02C17.56 12.41 12.41 17.56 12.02 24H11.98C11.59 17.56 6.44 12.41 0 12.02V11.98C6.44 11.59 11.59 6.44 11.98 0H12.02C12.41 6.44 17.56 11.59 24 11.98V12.02Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
