<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 3.5C2 3.22 2.22 3 2.5 3H10.5C10.78 3 11 3.22 11 3.5C11 3.78 10.78 4 10.5 4H2.5C2.22 4 2 3.78 2 3.5ZM2 11.5C2 11.22 2.22 11 2.5 11H9.5C9.78 11 10 11.22 10 11.5C10 11.78 9.78 12 9.5 12H2.5C2.22 12 2 11.78 2 11.5ZM2.5 7C2.22 7 2 7.22 2 7.5C2 7.78 2.22 8 2.5 8H13.5C13.78 8 14 7.78 14 7.5C14 7.22 13.78 7 13.5 7H2.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
