import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-place-item",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrPlaceItem {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-120q-24.75 0-42.37-17.62T120-180v-440q0-24.75 17.63-42.37T180-680h180q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T360-620H180v440h600v-440H600q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T600-680h180q24.75 0 42.38 17.63T840-620v440q0 24.75-17.62 42.38T780-120H180Zm330-319 68-68q8.5-9 21.25-9t21.75 9q9 9 9 21.5t-9 21.5L501-344q-9 9-21 9t-21-9L339-464q-9-9-8.5-21.5T340-507q9-9 21.5-9t21.5 9l67 68v-491q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T510-930v491Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrPlaceItem;
