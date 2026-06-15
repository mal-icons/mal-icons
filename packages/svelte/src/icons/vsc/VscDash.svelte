<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M5 8.5C5 8.22 5.22 8 5.5 8H10.5C10.78 8 11 8.22 11 8.5C11 8.78 10.78 9 10.5 9H5.5C5.22 9 5 8.78 5 8.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
