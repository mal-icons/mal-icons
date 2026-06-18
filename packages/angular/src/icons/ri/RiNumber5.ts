import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-number-5",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiNumber5 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 2V4H9.3L8.62 10.44C9.61 9.85 10.76 9.5 12 9.5C15.59 9.5 18.5 12.41 18.5 16C18.5 19.59 15.59 22.5 12 22.5C8.95 22.5 6.4 20.41 5.69 17.58L7.63 17.09C8.12 19.05 9.89 20.5 12 20.5C14.49 20.5 16.5 18.49 16.5 16C16.5 13.51 14.49 11.5 12 11.5C9.98 11.5 8.72 12.14 8.04 13.03L6.46 11.85L7.5 2H18Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiNumber5;
