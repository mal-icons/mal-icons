<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M833-41 714-160H80v-640h80v86L26-848l43-43L876-84l-43 43ZM140-220h514L218-656h-78v436Zm680-6v-430H390L246-800h634v634l-60-60ZM720-326l-60-60v-114H546l-60-60h234v234Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
