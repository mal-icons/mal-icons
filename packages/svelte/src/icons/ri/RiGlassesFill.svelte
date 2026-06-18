<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1 12C1 9.24 3.24 7 6 7C7.21 7 8.33 7.43 9.19 8.15C9.91 7.44 10.91 7 12 7C13.1 7 14.09 7.44 14.81 8.15C15.67 7.43 16.79 7 18 7C20.76 7 23 9.24 23 12C23 14.76 20.76 17 18 17C15.24 17 13 14.76 13 12C13 11.18 13.2 10.41 13.54 9.73C13.18 9.28 12.62 9 12 9C11.38 9 10.82 9.28 10.46 9.73C10.8 10.41 11 11.18 11 12C11 14.76 8.76 17 6 17C3.24 17 1 14.76 1 12Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
