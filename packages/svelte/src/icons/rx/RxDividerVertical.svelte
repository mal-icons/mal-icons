<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7.5 2C7.78 2 8 2.22 8 2.5L8 12.5C8 12.78 7.78 13 7.5 13C7.22 13 7 12.78 7 12.5L7 2.5C7 2.22 7.22 2 7.5 2Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
