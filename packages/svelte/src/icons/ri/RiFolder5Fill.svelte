<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.41 5H20C20.55 5 21 5.45 21 6V7H3V4C3 3.45 3.45 3 4 3H11.41L13.41 5ZM3.09 9H20.91C21.47 9 21.91 9.45 21.91 10C21.91 10.03 21.91 10.06 21.91 10.08L21.08 20.08C21.03 20.6 20.6 21 20.08 21H3.92C3.4 21 2.97 20.6 2.92 20.08L2.09 10.08C2.04 9.53 2.45 9.05 3 9C3.03 9 3.06 9 3.09 9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
