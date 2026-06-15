<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7 2H11.5C11.78 2 12 2.22 12 2.5C12 2.78 11.78 3 11.5 3H11V13.5C11 13.78 10.78 14 10.5 14C10.22 14 10 13.78 10 13.5V3H9V13.5C9 13.78 8.78 14 8.5 14C8.22 14 8 13.78 8 13.5V9H7C5.07 9 3.5 7.43 3.5 5.5C3.5 3.57 5.07 2 7 2ZM7 8H8V3H7C5.62 3 4.5 4.12 4.5 5.5C4.5 6.88 5.62 8 7 8Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
