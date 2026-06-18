<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22 11V20C22 20.55 21.55 21 21 21H3C2.45 21 2 20.55 2 20V11H22ZM22 9H2V4C2 3.45 2.45 3 3 3H10.41L12.41 5H21C21.55 5 22 5.45 22 6V9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
