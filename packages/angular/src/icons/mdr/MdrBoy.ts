import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-boy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBoy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 7.5c0.97 0 1.75-0.78 1.75-1.75S12.97 4 12 4s-1.750.78-1.75 1.75S11.03 7.5 12 7.5zM14 19c0 0.55-0.45 1-1 1h-2c-0.55 0-1-0.45-1-1v-4c-0.55 0-1-0.45-1-1v-3.5c0-1.10.9-2 2-2h2c1.1 0 2 0.9 2 2V14c0 0.55-0.45 1-1 1v4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBoy;
