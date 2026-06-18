<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 3H5a1 1 0 0 0-1 1v2.59c0 0.520.21 1.040.58 1.41L10 13.41V21a1 1 0 0 0 1.450.9l4-2c0.34-0.170.55-0.520.55-0.89v-5.59l5.42-5.42c0.37-0.370.58-0.880.58-1.41V4a1 1 0 0 0-1-1zm-6.71 9.29A11 0 0 0 14 13v5.38l-2 1V13a11 0 0 0-0.29-0.71L6 6.59V5h14l0 1.58-5.71 5.71z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
