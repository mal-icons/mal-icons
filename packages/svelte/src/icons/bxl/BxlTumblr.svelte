<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14.08 20.95c-2.69 0-4.7-1.38-4.7-4.7v-5.31H6.93V8.07c2.69-0.7 3.82-3.02 3.95-5.02h2.8v4.56h3.26v3.34h-3.26v4.62c0 1.390.7 1.86 1.81 1.86h1.58v3.52h-2.99z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
