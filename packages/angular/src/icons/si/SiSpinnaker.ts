import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-spinnaker",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSpinnaker {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.34 0C17.79 8.74 11.32 21.990.82 23.88c10.81 1.06 19.48-5.33 21.65-8.07C24.63 13.08 21.34 0 21.34 0zM0.82 23.88L0.8 23.88v0l0.020zM17.18 5.8C15.41 10.99 10.48 18.55 5.4 20.39c0.890.03 1.74-0.02 2.56-0.13 3.99-3.22 7.14-8.04 9.58-12.77-0.19-0.98-0.36-1.69-0.36-1.69z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSpinnaker;
