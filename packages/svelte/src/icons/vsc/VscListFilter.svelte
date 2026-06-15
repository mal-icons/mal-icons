<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 3.5C2 3.22 2.22 3 2.5 3H13.5C13.78 3 14 3.22 14 3.5C14 3.78 13.78 4 13.5 4H2.5C2.22 4 2 3.78 2 3.5ZM4 7.5C4 7.22 4.22 7 4.5 7H11.5C11.78 7 12 7.22 12 7.5C12 7.78 11.78 8 11.5 8H4.5C4.22 8 4 7.78 4 7.5ZM6 11.5C6 11.22 6.22 11 6.5 11H9.5C9.78 11 10 11.22 10 11.5C10 11.78 9.78 12 9.5 12H6.5C6.22 12 6 11.78 6 11.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
