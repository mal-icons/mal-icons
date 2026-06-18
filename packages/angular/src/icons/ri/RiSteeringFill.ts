import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-steering-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSteeringFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.8 14C20.96 18.12 17.6 21.31 13.4 21.9L13.4 19.88C16.49 19.33 18.97 17.01 19.75 14L21.8 14ZM4.25 14C5.02 16.98 7.45 19.28 10.5 19.86V21.89C6.35 21.26 3.03 18.08 2.2 14L4.25 14ZM18 11V13H17C14.86 13 13.11 14.68 13 16.8L13 17V18H11V17C11 14.86 9.32 13.11 7.2 13L7 13H6V11H18ZM12 2C17.18 2 21.45 5.95 21.95 11L19.94 11C19.45 7.05 16.08 4 12 4C7.92 4 4.55 7.05 4.06 11L2.05 11C2.55 5.95 6.81 2 12 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSteeringFill;
