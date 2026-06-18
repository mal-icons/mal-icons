import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-odnoklassniki",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiOdnoklassniki {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0a6.2 6.2 0 0 0-6.19 6.2 6.2 6.2 0 0 0 6.2 6.19 6.2 6.2 0 0 0 6.19-6.19A6.2 6.2 0 0 0 12 0zm0 3.63a2.57 2.57 0 0 1 2.57 2.57 2.57 2.57 0 0 1-2.56 2.56 2.57 2.57 0 0 1-2.56-2.56 2.57 2.57 0 0 1 2.57-2.56zM6.81 12.6a1.81 1.81 0 0 0-0.91 3.35 11.61 11.61 0 0 0 3.6 1.49l-3.46 3.46a1.82 1.82 0 0 0 2.57 2.57L12 20.07l3.41 3.4a1.81 1.81 0 0 0 2.56 0c0.71-0.710.71-1.86 0-2.57l-3.46-3.46a11.59 11.59 0 0 0 3.6-1.49 1.81 1.81 0 1 0-1.93-3.07 7.87 7.87 0 0 1-8.34 0c-0.32-0.2-0.67-0.29-1.02-0.28z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiOdnoklassniki;
