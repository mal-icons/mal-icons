import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-workspace-premium",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrWorkspacePremium {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m10.92 12.75 1.08-0.82 1.070.81c0.390.290.92-0.080.78-0.55l-0.42-1.36 1.2-0.95c0.37-0.280.16-0.88-0.32-0.88h-1.4l-0.43-1.34a0.50.5 0 0 0-0.95 0L11.09 9H9.68c-0.47 0-0.680.6-0.310.89l1.190.95-0.42 1.36c-0.140.470.390.840.780.55zM6 21.61c0 0.680.67 1.16 1.320.95L12 21l4.68 1.56a11 0 0 0 1.32-0.95v-6.33A7.96 7.96 0 0 0 20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.030.76 3.87 2 5.28v6.33zM12 4c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrWorkspacePremium;
