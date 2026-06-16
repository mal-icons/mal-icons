import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-watch",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdWatch {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m14.31 2 0.41 2.48C13.87 4.17 12.96 4 12 4c-0.95 0-1.870.17-2.710.47L9.7 2h4.61m0.41 17.52L14.31 22H9.7l-0.41-2.47c0.840.3 1.760.47 2.710.470.96 0 1.87-0.17 2.72-0.48M16 0H8l-0.95 5.73C5.19 7.19 4 9.45 4 12s1.19 4.81 3.05 6.27L8 24h8l0.96-5.73C18.81 16.81 20 14.54 20 12s-1.19-4.81-3.04-6.27L16 0zm-4 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdWatch;
