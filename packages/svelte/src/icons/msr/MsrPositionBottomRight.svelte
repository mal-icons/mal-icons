<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M400-287h300q12.75 0 21.38-8.65Q730-304.31 730-317.1v-30.1q0-12.79-8.62-21.29T700-377H400q-12.75 0-21.37 8.65Q370-359.69 370-346.9v30.1q0 12.79 8.63 21.29T400-287ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
