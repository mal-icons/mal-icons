import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-tiktok-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiTiktokFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 8.25V15.5C16 19.09 13.09 22 9.5 22C5.91 22 3 19.09 3 15.5C3 11.91 5.91 9 9.5 9C10.02 9 10.52 9.06 11 9.17V12.34C10.55 12.12 10.04 12 9.5 12C7.57 12 6 13.57 6 15.5C6 17.43 7.57 19 9.5 19C11.43 19 13 17.43 13 15.5V2H16C16 4.76 18.24 7 21 7V10C19.11 10 17.37 9.34 16 8.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiTiktokFill;
