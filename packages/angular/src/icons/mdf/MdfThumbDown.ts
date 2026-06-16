import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-thumb-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfThumbDown {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 3H6c-0.83 0-1.540.5-1.84 1.22l-3.02 7.05c-0.090.23-0.140.47-0.140.73v2c0 1.10.9 2 2 2h6.31l-0.95 4.57-0.030.32c0 0.410.170.790.44 1.06L9.83 23l6.59-6.59c0.36-0.360.58-0.860.58-1.41V5c0-1.1-0.9-2-2-2zm4 0v12h4V3h-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfThumbDown;
