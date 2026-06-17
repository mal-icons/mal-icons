<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.41 3.34A5.53 5.53 0 0 1 8 2c2.69 0 4.92 2 5.17 4.58C14.76 6.8 16 8.14 16 9.77 16 11.57 14.5 13 12.69 13H3.78C1.71 13 0 11.37 0 9.32c0-1.76 1.27-3.22 2.94-3.590.14-0.860.7-1.72 1.46-2.38"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
