import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-number-3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiNumber3 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 2V3.36L12.81 9.55C16.02 9.95 18.5 12.68 18.5 16C18.5 19.59 15.59 22.5 12 22.5C8.95 22.5 6.4 20.41 5.69 17.58L7.63 17.09C8.12 19.05 9.89 20.5 12 20.5C14.49 20.5 16.5 18.49 16.5 16C16.5 13.51 14.49 11.5 12 11.5C11.28 11.5 10.6 11.67 9.99 11.97L9.77 12.09L9.08 10.89L14.86 4L6.5 4V2H18Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiNumber3;
