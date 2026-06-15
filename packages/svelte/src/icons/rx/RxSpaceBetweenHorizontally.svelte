<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M14.5 1C14.22 1 14 1.22 14 1.5L14 6L10 6C9.45 6 9 6.45 9 7L9 8C9 8.55 9.45 9 10 9L14 9L14 13.5C14 13.78 14.22 14 14.5 14C14.78 14 15 13.78 15 13.5L15 1.5C15 1.22 14.78 1 14.5 1ZM5 6L1 6L1 1.5C1 1.22 0.78 1 0.5 1C0.22 1 0 1.22 0 1.5L0 13.5C0 13.78 0.22 14 0.5 14C0.78 14 1 13.78 1 13.5L1 9L5 9C5.55 9 6 8.55 6 8L6 7C6 6.45 5.55 6 5 6Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
