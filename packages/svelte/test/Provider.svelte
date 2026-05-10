<script lang="ts">
  import { setIconContext } from "../src/context.ts";
  import FiActivity from "./FiActivity.svelte";

  setIconContext({ size: 24, color: "blue", className: "ctx" });
</script>

<FiActivity color="green" />
