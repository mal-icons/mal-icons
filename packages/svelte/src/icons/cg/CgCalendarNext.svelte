<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.72 16.55L16.22 13.95L11.72 11.35V12.95H7.77V14.95H11.72V16.55Z","fill":"currentColor"}],["path",{"d":"M8 7C7.45 7 7 7.45 7 8C7 8.55 7.45 9 8 9H16C16.55 9 17 8.55 17 8C17 7.45 16.55 7 16 7H8Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M6 3C4.34 3 3 4.34 3 6V18C3 19.66 4.34 21 6 21H18C19.66 21 21 19.66 21 18V6C21 4.34 19.66 3 18 3H6ZM18 5H6C5.45 5 5 5.45 5 6V18C5 18.55 5.45 19 6 19H18C18.55 19 19 18.55 19 18V6C19 5.45 18.55 5 18 5Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
