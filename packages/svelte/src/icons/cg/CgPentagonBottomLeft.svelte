<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M13.33 9.23L10 5L5 13.66L8.33 17.89L13.66 18.66L18.66 10L13.33 9.23ZM15.45 11.56L12.25 11.1L10.26 8.56L7.41 13.49L9.41 16.03L12.61 16.49L15.45 11.56Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
