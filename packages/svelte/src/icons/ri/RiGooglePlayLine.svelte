<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 1.73C4.18 1.73 4.35 1.78 4.5 1.87L20.51 11.13C20.98 11.41 21.15 12.02 20.87 12.5C20.78 12.65 20.66 12.78 20.51 12.87L4.5 22.13C4.02 22.41 3.41 22.24 3.14 21.77C3.05 21.61 3 21.44 3 21.27V2.73C3 2.18 3.45 1.73 4 1.73ZM12.29 13.41L7.79 17.91L13.49 14.61L12.29 13.41ZM5 6.12V17.88L10.88 12L5 6.12ZM15.28 10.42L13.71 12L15.29 13.58L18.01 12L15.28 10.42ZM7.79 6.09L12.29 10.59L13.49 9.38L7.79 6.09Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
