<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22 12C22 6.48 17.52 2 12 2 8.98 2 6.28 3.34 4.45 5.45L2 3V9H8L5.86 6.87C7.33 5.11 9.54 4 12 4 16.42 4 20 7.58 20 12 20 16.42 16.42 20 12 20 7.58 20 4 16.42 4 12H2C2 17.52 6.48 22 12 22 17.52 22 22 17.52 22 12ZM10.78 8.52 15.38 11.58C15.67 11.78 15.67 12.22 15.38 12.42L10.78 15.48C10.45 15.7 10 15.47 10 15.07V8.93C10 8.53 10.45 8.3 10.78 8.52Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
