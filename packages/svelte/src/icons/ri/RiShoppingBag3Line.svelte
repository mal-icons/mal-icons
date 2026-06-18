<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.5 2H17.5C17.82 2 18.12 2.15 18.3 2.4L21 6V21C21 21.55 20.56 22 20 22H4C3.45 22 3 21.55 3 21V6L5.7 2.4C5.89 2.15 6.19 2 6.5 2ZM19 8H5V20H19V8ZM18.5 6L17 4H7L5.5 6H18.5ZM9 10V12C9 13.66 10.35 15 12 15C13.66 15 15 13.66 15 12V10H17V12C17 14.76 14.77 17 12 17C9.24 17 7 14.76 7 12V10H9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
