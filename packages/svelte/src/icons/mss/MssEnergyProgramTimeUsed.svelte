<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M410-450ZM50-90v-720h430v60H110v600h600v-290h60v350H50Zm164-157h60v-275h-60v275Zm166 0h60v-406h-60v406Zm166 0h60v-148h-60v148Zm184-253q-31 0-59.5-10.5T616-538l-43 40-41-41 43-43.35Q559-606 549.5-633.33 540-660.65 540-690q0-78.85 55.58-134.43Q651.15-880 730-880h190v190q0 78.85-55.57 134.43Q808.85-500 730-500Zm0-60q54.17 0 92.08-37.92Q860-635.83 860-690v-130H730q-54.17 0-92.08 37.92Q600-744.17 600-690q0 17 4.5 33.5T616-623l136-136 43 42-136 136q17 8 34.5 14.5T730-560Zm-14-120Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
