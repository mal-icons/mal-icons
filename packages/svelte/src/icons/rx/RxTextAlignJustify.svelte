<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2.5 4C2.22 4 2 4.22 2 4.5C2 4.78 2.22 5 2.5 5H12.5C12.78 5 13 4.78 13 4.5C13 4.22 12.78 4 12.5 4H2.5ZM2 7.5C2 7.22 2.22 7 2.5 7H12.5C12.78 7 13 7.22 13 7.5C13 7.78 12.78 8 12.5 8H2.5C2.22 8 2 7.78 2 7.5ZM2 10.5C2 10.22 2.22 10 2.5 10H12.5C12.78 10 13 10.22 13 10.5C13 10.78 12.78 11 12.5 11H2.5C2.22 11 2 10.78 2 10.5Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
