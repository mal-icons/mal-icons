<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M8 6.12L9.41 4.71L11.54 6.83L14.37 4L15.78 5.41L13.31 7.88H18C19.1 7.88 20 8.77 20 9.88V16.88C20 17.98 19.1 18.88 18 18.88H6C4.9 18.88 4 17.98 4 16.88V9.88C4 8.77 4.9 7.88 6 7.88H9.76L8 6.12ZM18 9.88H6V16.88H18V9.88Z","fill":"currentColor"}],["path",{"d":"M8 19.88H16V20.88H8V19.88Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
