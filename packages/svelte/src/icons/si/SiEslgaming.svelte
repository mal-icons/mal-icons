<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12c0-6.63-5.37-12-12-12zm0.46 2.16a9.8 9.8 0 0 1 5.79 2.22L4.38 18.24a9.86 9.86 0 0 1-1.06-1.58zm7.19 3.63a9.8 9.8 0 0 1 2.19 5.81l-14.45 9.1a9.83 9.83 0 0 1-1.59-1.05zm1.98 8.29c-0.89 4.45-5.62 8.89-11.9 7.49Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
