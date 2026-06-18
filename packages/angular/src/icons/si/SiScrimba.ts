import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-scrimba",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiScrimba {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M24 6.22a2.22 2.22 0 1-2.22 2.22h-8.89a2.22 2.22 0 10-4.44h8.89C23.01 4 24 5 24 6.22zm-7.33 9.33h-8.89a2.22 2.22 0 0 4.44h8.89a2.22 2.22 0 0-4.44zm0-5.78H13.11a2.22 2.22 0 0 4.44h3.56a2.22 2.22 0 0-4.44zM2.22 15.56a2.22 2.22 0 100 4.44 2.22 2.22 0 0-4.44z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiScrimba;
