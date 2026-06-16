<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M402.18-321q12.83 0 21.33-8.62T432-351v-258q0-12.75-8.68-21.37-8.68-8.62-21.5-8.62-12.82 0-21.32 8.63T372-609v258q0 12.75 8.68 21.38 8.68 8.63 21.5 8.63Zm156 0q12.83 0 21.33-8.62T588-351v-258q0-12.75-8.68-21.37-8.68-8.62-21.5-8.62-12.82 0-21.32 8.63T528-609v258q0 12.75 8.68 21.38 8.68 8.63 21.5 8.63ZM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-520H140v520Zm0 0v-520 520Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
