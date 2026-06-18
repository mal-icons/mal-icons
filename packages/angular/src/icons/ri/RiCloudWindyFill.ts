import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-cloud-windy-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCloudWindyFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 19V15.01H2.07C1.39 13.83 1 12.46 1 11C1 6.58 4.58 3 9 3C12.39 3 15.3 5.11 16.46 8.1C16.8 8.03 17.14 8 17.5 8C20.54 8 23 10.46 23 13.5C23 16.54 20.54 19 17.5 19H14ZM6 21H16V23H6V21ZM2 17H12V19H2V17Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCloudWindyFill;
