<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 14v-4h-4v2.89L17.11 14zm-10-1.45V14h1.45zM14 10h-0.89l0.890.89zm5.11 6 0.890.89V16zM8 4h-0.89l0.890.89zm6 4V4h-4v2.89L11.11 8zm2-4h4v4h-4zm-6 12v4h4v-3.45l-0.55-0.55zm-6-6v4h4v-3.45L7.45 10zm12 10h1.45L16 18.55zM4 16h4v4H4zm0-9.45V8h1.45z","opacity":".3"}],["path",{"d":"M8 4v0.89l2 2V4h4v4h-2.89l2 2H14v0.89l2 2V10h4v4h-2.89l2 2H20v0.89l2 2V4c0-1.1-0.9-2-2-2H5.11l2 2H8zm8 0h4v4h-4V4zM1.41 1.14 0 2.55l2 2V20c0 1.10.9 2 2 2h15.45l2.01 2.01 1.41-1.41L1.41 1.14zM10 12.55 11.45 14H10v-1.45zm-6-6L5.45 8H4V6.55zM8 20H4v-4h4v4zm0-6H4v-4h3.45l0.550.55V14zm6 6h-4v-4h3.45l0.550.55V20zm2 0v-1.45L17.45 20H16z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
