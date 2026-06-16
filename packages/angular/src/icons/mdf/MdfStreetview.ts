import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-streetview",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfStreetview {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.56 14.33c-0.340.27-0.560.7-0.56 1.17V21h7c1.1 0 2-0.9 2-2v-5.98c-0.94-0.33-1.95-0.52-3-0.52-2.03 0-3.930.7-5.44 1.83z"}],["circle",{"cx":"18","cy":"6","r":"5"}],["path",{"d":"M11.5 6c0-1.080.27-2.10.74-3H5c-1.1 0-2 0.9-2 2v14c0 0.550.23 1.050.59 1.41l9.82-9.82A6.44 6.44 0 0 1 11.5 6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfStreetview;
