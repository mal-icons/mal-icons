<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12ZM16.9 17C15.64 18.24 13.91 19 12 19C10.09 19 8.36 18.24 7.1 17H16.9ZM18.33 15C18.76 14.09 19 13.07 19 12C19 8.13 15.87 5 12 5C8.13 5 5 8.13 5 12C5 13.07 5.24 14.09 5.67 15H18.33Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
