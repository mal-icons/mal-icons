<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.34 4C13.12 4.63 13 5.3 13 6C13 9.31 15.69 12 19 12C19.7 12 20.37 11.88 21 11.66V21C21 21.55 20.55 22 20 22H4C3.45 22 3 21.55 3 21V5C3 4.45 3.45 4 4 4H13.34ZM19 10C16.79 10 15 8.21 15 6C15 3.79 16.79 2 19 2C21.21 2 23 3.79 23 6C23 8.21 21.21 10 19 10Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
