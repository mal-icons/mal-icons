import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-no-food",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfNoFood {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.35 8.52 11 5h5V1h2v4h5l-1.38 13.79L11.35 8.52zM1 21v1c0 0.550.45 1 1 1h13c0.55 0 1-0.45 1-1v-1H1zm20.90.9L2.1 2.10.69 3.51l5.7 5.7C3.28 9.87 1 11.99 1 15h11.17l2 2H1v2h15v-0.17l4.49 4.49 1.41-1.42z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfNoFood;
