import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-diamond-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDiamondLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.47 8.69L19.71 8.13C20.15 7.12 20.94 6.32 21.93 5.88L22.69 5.54C23.1 5.36 23.1 4.76 22.69 4.58L21.97 4.26C20.96 3.81 20.16 2.97 19.72 1.93L19.47 1.32C19.29 0.89 18.71 0.89 18.53 1.32L18.28 1.93C17.84 2.97 17.04 3.81 16.03 4.26L15.31 4.58C14.9 4.76 14.9 5.36 15.31 5.54L16.07 5.88C17.06 6.32 17.85 7.12 18.29 8.13L18.53 8.69C18.71 9.11 19.29 9.11 19.47 8.69ZM5 6C4.69 6 4.39 6.15 4.2 6.4L1.2 10.4C0.91 10.78 0.94 11.31 1.26 11.67L10.26 21.67C10.45 21.88 10.72 22 11 22C11.28 22 11.55 21.88 11.74 21.67L20.74 11.67L19.26 10.33L11 19.51L3.29 10.94L5.5 8H14V6H5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDiamondLine;
