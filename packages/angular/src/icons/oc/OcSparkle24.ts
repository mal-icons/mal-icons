import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-sparkle-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcSparkle24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.190.56c0.28-0.75 1.34-0.75 1.62 0l1.92 5.24a5.83 5.83 0 0 0 3.47 3.47l5.24 1.92c0.760.280.76 1.34 0 1.62l-5.24 1.92a5.83 5.83 0 0 0-3.47 3.47l-1.92 5.24c-0.280.76-1.340.76-1.62 0l-1.92-5.24a5.83 5.83 0 0 0-3.47-3.47L0.56 12.81c-0.75-0.28-0.75-1.34 0-1.62l5.24-1.92a5.83 5.83 0 0 0 3.47-3.47L11.190.56Zm-0.5 5.76a7.34 7.34 0 0 1-4.36 4.37L2.73 12l3.59 1.32a7.33 7.33 0 0 1 4.37 4.37L12 21.27l1.32-3.59a7.33 7.33 0 0 1 4.37-4.36L21.27 12l-3.59-1.31a7.33 7.33 0 0 1-4.36-4.36L12 2.73l-1.31 3.59Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcSparkle24;
