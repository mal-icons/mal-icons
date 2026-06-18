<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 17.47C17.06 18.42 18.46 19 20 19H22V21H20C18.54 21 17.18 20.61 16 19.93C14.82 20.61 13.46 21 12 21C10.54 21 9.18 20.61 8 19.93C6.82 20.61 5.46 21 4 21H2V19H4C5.54 19 6.94 18.42 8 17.47C9.06 18.42 10.46 19 12 19C13.54 19 14.94 18.42 16 17.47ZM12.57 1.53L12.67 1.61L23 11H20V17C19.3 17 18.63 16.88 18 16.66L18 9.16L12 3.7L6 9.16L6 16.66C5.46 16.85 4.89 16.96 4.3 16.99L4 17V11H1L11.33 1.61C11.68 1.29 12.2 1.27 12.57 1.53Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
