<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 22H4C3.45 22 3 21.55 3 21V3C3 2.45 3.45 2 4 2H20C20.56 2 21 2.45 21 3V21C21 21.55 20.56 22 20 22ZM9 6H7V8C7 10.76 9.24 13 12 13C14.77 13 17 10.76 17 8V6H15V8C15 9.66 13.66 11 12 11C10.35 11 9 9.66 9 8V6Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
