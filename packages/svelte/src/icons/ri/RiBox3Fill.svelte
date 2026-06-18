<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.5 5.92 12 1 3.5 5.92 12 10.84 20.5 5.92ZM2.5 7.66V17.5L11 22.42V12.58L2.5 7.66ZM13 22.42 21.5 17.5V7.66L13 12.58V22.42Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
