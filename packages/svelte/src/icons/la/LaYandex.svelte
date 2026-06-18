<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.66,4H16.17C12.74,4,10,6.72,10,12c0,3.17,1.24,5.5,3.75,6.66l-4.69,8.83 C8.91,27.78,9.06,28,9.31,28h2.17c0.18,0,0.31-0.06,0.37-0.22L16.25,19h1.25l-0.01,8.78 c0,0.1,0.09,0.22,0.21,0.22h2.05C19.94,28,20,27.9,20,27.75V4.32C20,4.1,19.88,4,19.66,4z M17.5,17H16 c-1.5,0-3.5-1.16-3.5-5c0-4,1.63-6,3.5-6h1.5V17z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
