import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-edit-location",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsEditLocation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C7.59 2 4 5.59 4 9.99 3.97 16.44 11.7 21.78 12 22c0 0 8.03-5.56 8-12 0-4.41-3.59-8-8-8zM9.8 14.99H8v-1.8l4.98-4.97 1.8 1.8-4.98 4.97zm5.82-5.82-1.8-1.8L15.2 6l1.8 1.8-1.37 1.37z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsEditLocation;
