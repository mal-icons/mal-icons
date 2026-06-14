<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M289 371H49V0h22a218 218 0 0 1 218 218.2z"}],["path",{"fill":"currentColor","d":"M278.2 600H289V371H49a229 229 0 0 0 229 229"}],["path",{"fill":"currentColor","d":"M343.6 600H551V371H343.6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
