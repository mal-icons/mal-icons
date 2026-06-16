<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m480-284 177-177q9-9 21-9t21 9q9 9 9 21t-9 21L522-242q-17 17-42 17t-42-17L261-419q-9-9-9-21t9-21q9-9 21-9t21 9l177 177Zm0-253 177-177q9-9 21-9t21 9q9 9 9 21t-9 21L522-495q-17 17-42 17t-42-17L261-672q-9-9-9-21t9-21q9-9 21-9t21 9l177 177Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
