import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-nearby-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtNearbyOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.41 13.42 18.83 16l-1.81-1.81L19.2 12 12 4.8 9.81 6.99 8 5.17l2.58-2.58c0.78-0.78 2.05-0.78 2.83 0l8 8c0.790.780.79 2.04 0 2.83zm-0.22 7.77-1.41 1.41L16 18.83l-2.58 2.58c-0.780.78-2.050.78-2.83 0l-8-8c-0.78-0.78-0.78-2.05 0-2.83L5.17 8 1.39 4.22 2.8 2.81l18.39 18.38zm-7-4.17-1.39-1.39-0.80.8L7.58 12l0.8-0.8-1.4-1.39L4.8 12l7.2 7.2 2.19-2.18zM16.42 12 12 7.58l-0.80.8 4.42 4.420.8-0.8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtNearbyOff;
