<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m12 12.77 5.59-9.44h-3.28L12 7.33v0L9.69 3.33h-3.28z"}],["path",{"d":"M18.46 3.33 12 14.24 5.54 3.33H1.99L12 20.67l10.01-17.34z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
