import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-wb-iridescent",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsWbIridescent {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 15h14V9.05H5V15zm6-14v3h2V1h-2zm8.04 2.6-1.79 1.79 1.41 1.41 1.8-1.79-1.42-1.41zM13 23v-2.95h-2V23h2zm7.45-3.91-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM3.55 5.01 5.34 6.8l1.41-1.41L4.96 3.6 3.55 5.01zM4.96 20.5l1.79-1.8-1.41-1.41-1.79 1.79 1.41 1.42z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsWbIridescent;
