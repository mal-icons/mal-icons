import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-beach-access",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdBeachAccess {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21 19.57-1.43 1.43-6.44-6.44 1.43-1.43zM13.12 3c-2.58 0-5.160.98-7.14 2.95l-0.010.01c-3.95 3.95-3.95 10.36 0 14.31l14.3-14.31A10.09 10.09 0 0 0 13.12 3zM6.14 17.27a8.06 8.06 0 0 1-0.68-6.82c0.19 1.910.89 3.79 2.07 5.44l-1.39 1.38zm2.84-2.84C7.63 12.38 7.12 9.93 7.6 7.6c0.58-0.12 1.16-0.18 1.75-0.18 1.8 0 3.550.55 5.08 1.56l-5.45 5.45zm1.47-8.97a8.06 8.06 0 0 1 6.820.68l-1.39 1.39a11.25 11.25 0 0 0-5.43-2.07z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdBeachAccess;
