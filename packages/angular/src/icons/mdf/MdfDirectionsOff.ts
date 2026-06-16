import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-directions-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfDirectionsOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.83 10h0.67V7.5L17 11l-1.59 1.59L18.83 16l2.59-2.59c0.78-0.780.78-2.05 0-2.83l-7.99-8c-0.78-0.78-2.05-0.78-2.83 0L8 5.17 12.83 10zM2.81 2.81 1.39 4.22 5.17 8l-2.59 2.59c-0.780.78-0.78 2.05 0 2.83l8.01 8c0.780.78 2.050.78 2.83 0L16 18.83l3.78 3.78 1.41-1.41L2.81 2.81zM10 15H8v-4c0-0.050.02-0.090.03-0.14L10 12.83V15z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfDirectionsOff;
