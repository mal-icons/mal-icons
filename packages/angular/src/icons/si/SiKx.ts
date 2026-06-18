import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-kx",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiKx {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 5.87h3.59v12.25H0V5.87Zm11.75 0L7.65 12l4.1 6.13H7.65L3.59 12l4.06-6.13h4.1Zm12.25 0L19.9 12 24 18.13h-4.1l-2.03-3.04-2.03 3.05h-4.1L15.84 12l-4.1-6.13h4.1l2.03 3.08 2.03-3.08H24Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiKx;
