<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 3C16.28 3 20.22 4.5 23.31 7L22.05 8.55C19.31 6.33 15.81 5 12 5C8.91 5 6.03 5.88 3.58 7.39L12 17.82L18 10.39V13.57L12 21L0.69 7C3.78 4.5 7.72 3 12 3ZM22 19V21H20V19H22ZM22 10V17H20V10H22Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
