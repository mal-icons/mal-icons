<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.1 0C18.67 0 24 5.49 24 12c0 6.51-5.33 11.99-11.9 11.99L0 24V11.79C0 5.28 5.53 0 12.1 0zm0.12 4.56c-2.590-5 1.35-6.34 3.57-1.33 2.21-1.39 4.96-0.15 7.22L4.4 19.61l4.79-1.07c2.75 1.23 5.970.68 8.14-1.39 2.17-2.05 2.86-5.23 1.74-8-1.13-2.78-3.84-4.59-6.84-4.58h-0.01z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
