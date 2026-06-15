<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 3C2 2.45 2.45 2 3 2H12C12.55 2 13 2.45 13 3V12C13 12.55 12.55 13 12 13H3C2.45 13 2 12.55 2 12V3ZM12 3H3V12H12V3Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
