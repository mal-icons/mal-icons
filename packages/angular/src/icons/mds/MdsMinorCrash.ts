import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-minor-crash",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsMinorCrash {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.57 8H5.43L3 15v9h3v-2h12v2h3v-9l-2.43-7zM6.85 10h10.29l1.04 3H5.81l1.04-3zM6 17.5c0-0.830.67-1.5 1.5-1.5s1.50.67 1.5 1.5S8.33 19 7.5 19 6 18.33 6 17.5zm9 0c0-0.830.67-1.5 1.5-1.5s1.50.67 1.5 1.5-0.67 1.5-1.5 1.5-1.5-0.67-1.5-1.5zM9.41 5 8 6.41l-3-3L6.41 2l3 3zM16 6.41 14.59 5l3-3L19 3.41l-3 3zM13 5h-2V0h2v5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsMinorCrash;
