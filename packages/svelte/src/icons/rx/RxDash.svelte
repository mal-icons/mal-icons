<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M5 7.5C5 7.22 5.22 7 5.5 7H9.5C9.78 7 10 7.22 10 7.5C10 7.78 9.78 8 9.5 8H5.5C5.22 8 5 7.78 5 7.5Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
