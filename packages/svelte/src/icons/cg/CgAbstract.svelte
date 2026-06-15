<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 5H19V19H16L16 8H5V5Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M10 19C12.76 19 15 16.76 15 14C15 11.24 12.76 9 10 9C7.24 9 5 11.24 5 14C5 16.76 7.24 19 10 19ZM10 16C11.1 16 12 15.1 12 14C12 12.9 11.1 12 10 12C8.9 12 8 12.9 8 14C8 15.1 8.9 16 10 16Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
