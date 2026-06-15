<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 4.5C2 4.22 2.22 4 2.5 4H12.5C12.78 4 13 4.22 13 4.5C13 4.78 12.78 5 12.5 5H2.5C2.22 5 2 4.78 2 4.5ZM2 7.5C2 7.22 2.22 7 2.5 7H7.5C7.78 7 8 7.22 8 7.5C8 7.78 7.78 8 7.5 8H2.5C2.22 8 2 7.78 2 7.5ZM2 10.5C2 10.22 2.22 10 2.5 10H10.5C10.78 10 11 10.22 11 10.5C11 10.78 10.78 11 10.5 11H2.5C2.22 11 2 10.78 2 10.5Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
