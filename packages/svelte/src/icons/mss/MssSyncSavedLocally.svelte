<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m438-413 212-212-43-42-169.33 170L353-582l-43 42 128 127ZM40-120v-60h880v60H40Zm40-120v-600h800v600H80Zm60-60h680v-480H140v480Zm0 0v-480 480Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
