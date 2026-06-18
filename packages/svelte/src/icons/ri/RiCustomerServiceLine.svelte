<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22 17C22 19.87 19.98 22.27 17.29 22.86L16.65 20.95C17.85 20.75 18.88 20.02 19.46 19H17C15.9 19 15 18.1 15 17V13C15 11.9 15.9 11 17 11H19.94C19.45 7.05 16.08 4 12 4C7.92 4 4.55 7.05 4.06 11H7C8.1 11 9 11.9 9 13V17C9 18.1 8.1 19 7 19H4C2.9 19 2 18.1 2 17V12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12V13V13V17V17V17ZM20 17V13H17V17H20ZM4 13V17H7V13H4Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
