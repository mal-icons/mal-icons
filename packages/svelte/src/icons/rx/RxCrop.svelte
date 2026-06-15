<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3.5 0C3.78 0 4 0.22 4 0.5L4 3L11.5 3C11.78 3 12 3.22 12 3.5L12 11L14.5 11C14.78 11 15 11.22 15 11.5C15 11.78 14.78 12 14.5 12L12 12L12 14.5C12 14.78 11.78 15 11.5 15C11.22 15 11 14.78 11 14.5L11 12L3.5 12C3.22 12 3 11.78 3 11.5L3 4L0.5 4C0.22 4 0 3.78 0 3.5C0 3.22 0.22 3 0.5 3L3 3L3 0.5C3 0.22 3.22 0 3.5 0ZM4 4L4 11L11 11L11 4L4 4Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
