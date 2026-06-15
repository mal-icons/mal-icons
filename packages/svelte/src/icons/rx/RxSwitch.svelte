<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M10.5 4C8.57 4 7 5.57 7 7.5C7 9.43 8.57 11 10.5 11C12.43 11 14 9.43 14 7.5C14 5.57 12.43 4 10.5 4ZM7.67 11C6.65 10.18 6 8.91 6 7.5C6 6.09 6.65 4.82 7.67 4H4.5C2.57 4 1 5.57 1 7.5C1 9.43 2.57 11 4.5 11H7.67ZM0 7.5C0 5.01 2.01 3 4.5 3H10.5C12.99 3 15 5.01 15 7.5C15 9.99 12.99 12 10.5 12H4.5C2.01 12 0 9.99 0 7.5Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
