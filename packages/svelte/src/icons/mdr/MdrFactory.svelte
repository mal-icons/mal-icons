<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 10V8.48c0-0.71-0.71-1.19-1.37-0.93L9 9v-0.48c0-0.72-0.73-1.21-1.39-0.92l-4.4 1.88C2.48 9.8 2 10.52 2 11.32V20c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V10h-8zm-5 7c0 0.55-0.45 1-1 1s-1-0.45-1-1v-2c0-0.550.45-1 1-1s1 0.45 1 1v2zm4 0c0 0.55-0.45 1-1 1s-1-0.45-1-1v-2c0-0.550.45-1 1-1s1 0.45 1 1v2zm4 0c0 0.55-0.45 1-1 1s-1-0.45-1-1v-2c0-0.550.45-1 1-1s1 0.45 1 1v2zm3.12-15h-1.23c-0.51 0-0.930.38-0.990.88l-0.7 5.62h4.6l-0.69-5.62c-0.06-0.5-0.49-0.88-0.99-0.88z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
