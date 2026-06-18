<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6H9ZM7 6H4C3.45 6 3 6.45 3 7V21C3 21.55 3.45 22 4 22H20C20.55 22 21 21.55 21 21V7C21 6.45 20.55 6 20 6H17C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6ZM9 10C9 11.66 10.34 13 12 13C13.66 13 15 11.66 15 10H17C17 12.76 14.76 15 12 15C9.24 15 7 12.76 7 10H9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
