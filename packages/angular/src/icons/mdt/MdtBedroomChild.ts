import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-bedroom-child",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtBedroomChild {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 20h16V4H4v16zm2-7.13c0-1 0.62-1.85 1.5-2.2V9c0-1.10.9-2 2-2h5c1.1 0 2 0.9 2 2v1.67c0.880.35 1.5 1.2 1.5 2.2V17h-1.5v-1.5h-9V17H6v-4.13z","opacity":".3"}],["path",{"d":"M20 2H4c-1.1 0-2 0.9-2 2v16c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm0 18H4V4h16v16z"}],["path",{"d":"M7.5 15.5h9V17H18v-4.13c0-1-0.62-1.85-1.5-2.2V9c0-1.1-0.9-2-2-2h-5c-1.1 0-2 0.9-2 2v1.67c-0.880.35-1.5 1.2-1.5 2.2V17h1.5v-1.5zm1.5-7h6v2H9v-2zM8.37 12h7.27c0.48 0 0.870.390.870.87V14h-9v-1.13H7.5c0-0.480.39-0.870.87-0.87z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtBedroomChild;
