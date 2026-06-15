<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 1h-11v9h11v-9zM10 9h-9v-7h9v7zM14 13h-11v-1.98h1v0.98h9v-7h-0.99v-1h1.99v9zM17 7v9h-11v-1.98h1v0.98h9v-7h-0.99v-1h1.99z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
