import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-globe-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiGlobeFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 21H18V23H6V21H11V19.95C7.71 19.62 4.88 17.7 3.32 14.96L5.05 13.97C6.43 16.38 9.03 18 12 18C16.42 18 20 14.42 20 10C20 7.03 18.38 4.43 15.97 3.05L16.96 1.32C19.97 3.04 22 6.28 22 10C22 15.19 18.05 19.45 13 19.95V21ZM12 17C8.13 17 5 13.87 5 10C5 6.13 8.13 3 12 3C15.87 3 19 6.13 19 10C19 13.87 15.87 17 12 17Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiGlobeFill;
