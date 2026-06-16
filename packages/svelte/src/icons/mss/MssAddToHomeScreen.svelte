<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M240-40v-206h60v56h440v-580H300v56h-60v-206h560v880H240Zm60-90v30h440v-30H300ZM163-293l-43-43 245-244H200v-60h269v269h-60v-167L163-293Zm137-537h440v-30H300v30Zm0 0v-30 30Zm0 700v30-30Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
