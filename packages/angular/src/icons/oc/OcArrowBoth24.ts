import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-arrow-both-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcArrowBoth24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.78 5.97a0.750.75 0 0 0-1.06 0l-5.25 5.25a0.750.75 0 0 0 0 1.06l5.25 5.25a0.750.75 0 0 0 1.06-1.06L3.81 12.5h16.38l-3.97 3.97a0.750.75 0 1 0 1.06 1.06l5.25-5.25a0.750.75 0 0 0 0-1.06l-5.25-5.25a0.750.75 0 1 0-1.06 1.06L20.19 11H3.81l3.97-3.97a0.750.75 0 0 0 0-1.06Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcArrowBoth24;
