<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 4C6.34 4 5 5.34 5 7C5 7.28 4.78 7.5 4.5 7.5H4.25C3.01 7.5 2 8.51 2 9.75C2 10.99 3.01 12 4.25 12H11.75C12.99 12 14 10.99 14 9.75C14 8.51 12.99 7.5 11.75 7.5H11.5C11.22 7.5 11 7.28 11 7C11 5.34 9.66 4 8 4ZM4.03 6.51C4.27 4.53 5.96 3 8 3C10.04 3 11.73 4.53 11.97 6.51C13.66 6.62 15 8.03 15 9.75C15 11.54 13.54 13 11.75 13H4.25C2.46 13 1 11.54 1 9.75C1 8.03 2.34 6.62 4.03 6.51Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
