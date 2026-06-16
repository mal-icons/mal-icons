import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-memory-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrMemoryAlt {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M280.18-370q12.83 0 21.33-8.62T310-400v-160q0-12.75-8.68-21.37-8.68-8.62-21.5-8.62-12.82 0-21.32 8.63T250-560v160q0 12.75 8.68 21.38 8.68 8.63 21.5 8.63Zm200 0q12.83 0 21.33-8.62T510-400v-160q0-12.75-8.68-21.37-8.68-8.62-21.5-8.62-12.82 0-21.32 8.63T450-560v160q0 12.75 8.68 21.38 8.68 8.63 21.5 8.63Zm200 0q12.83 0 21.33-8.62T710-400v-160q0-12.75-8.68-21.37-8.68-8.62-21.5-8.62-12.82 0-21.32 8.63T650-560v160q0 12.75 8.68 21.38 8.68 8.63 21.5 8.63ZM140-260h680v-440H140v440Zm0 0v-440 440Zm0 60q-24 0-42-18t-18-42v-440q0-24 18-42t42-18h70v-50q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T270-810v50h180v-50q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T510-810v50h180v-50q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T750-810v50h70q24 0 42 18t18 42v440q0 24-18 42t-42 18h-70v50q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T690-150v-50H510v50q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T450-150v-50H270v50q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T210-150v-50h-70Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrMemoryAlt;
