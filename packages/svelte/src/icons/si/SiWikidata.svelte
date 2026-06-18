<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 4.58v14.83h0.87V4.58zm1.79 0v14.83h2.65V4.58zm3.52 0v14.83H7.96V4.58zm3.55 0v14.83h0.87V4.58zm1.79 0v14.83h0.87V4.58zm1.76 0v14.83h2.65V4.58zm3.52 0v14.83h0.92V4.58zm1.79 0v14.83h2.65V4.58zm3.64 0v14.83h0.87V4.58zm1.79 0v14.83H24V4.58Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
