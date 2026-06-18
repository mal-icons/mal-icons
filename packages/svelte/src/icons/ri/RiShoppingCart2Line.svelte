<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 6.42L0.76 3.17L2.18 1.76L5.42 5H20.66C21.21 5 21.66 5.45 21.66 6C21.66 6.1 21.65 6.2 21.62 6.29L19.22 14.29C19.09 14.71 18.7 15 18.26 15H6V17H17V19H5C4.45 19 4 18.55 4 18V6.42ZM6 7V13H17.52L19.32 7H6ZM5.5 23C4.68 23 4 22.33 4 21.5C4 20.67 4.68 20 5.5 20C6.33 20 7 20.67 7 21.5C7 22.33 6.33 23 5.5 23ZM17.5 23C16.68 23 16 22.33 16 21.5C16 20.67 16.68 20 17.5 20C18.33 20 19 20.67 19 21.5C19 22.33 18.33 23 17.5 23Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
