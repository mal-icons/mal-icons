<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 11.75 5 L 11.69 5.94 L 11.5 8.94 L 11.44 10 L 13.44 10 L 12.56 22 L 10.56 22 L 10.5 22.94 L 10.31 25.94 L 10.22 27 L 20.25 27 L 20.31 26.06 L 20.5 23.06 L 20.56 22 L 18.56 22 L 19.44 10 L 21.44 10 L 21.5 9.06 L 21.69 6.06 L 21.78 5 Z M 13.63 7 L 19.63 7 L 19.56 8 L 17.56 8 L 17.5 8.94 L 16.5 22.94 L 16.44 24 L 18.44 24 L 18.38 25 L 12.38 25 L 12.44 24 L 14.44 24 L 14.5 23.06 L 15.5 9.06 L 15.56 8 L 13.56 8 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
