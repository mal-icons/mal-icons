import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-token",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtToken {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m12 4.29 5.91 3.28-3.01 1.67C14.17 8.48 13.14 8 12 8s-2.170.48-2.9 1.24L6.09 7.57 12 4.29zm-1 14.87-6-3.33V9.26L8.13 11c-0.090.31-0.130.65-0.13 1 0 1.86 1.27 3.43 3 3.87v3.29zM10 12c0-1.10.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2zm3 7.16v-3.28c1.73-0.44 3-2.01 3-3.87 0-0.35-0.04-0.69-0.13-1.01L19 9.26v6.57l-6 3.33z","opacity":".3"}],["path",{"d":"m21 7-9-5-9 5v10l9 5 9-5V7zm-9-2.71 5.91 3.28-3.01 1.67C14.17 8.48 13.14 8 12 8s-2.170.48-2.9 1.24L6.09 7.57 12 4.29zm-1 14.87-6-3.33V9.26L8.13 11c-0.090.31-0.130.65-0.13 1 0 1.86 1.27 3.43 3 3.87v3.29zM10 12c0-1.10.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2zm3 7.16v-3.28c1.73-0.44 3-2.01 3-3.87 0-0.35-0.04-0.69-0.13-1.01L19 9.26v6.57l-6 3.33z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtToken;
