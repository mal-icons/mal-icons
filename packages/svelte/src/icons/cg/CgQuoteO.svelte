<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M20 5H4V19H20V5ZM4 3C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H4Z","fill":"currentColor"}],["path",{"d":"M9.07 9.2H12.07L9.93 14.8H6.93L9.07 9.2Z","fill":"currentColor"}],["path",{"d":"M14.07 9.2H17.07L14.93 14.8H11.93L14.07 9.2Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
