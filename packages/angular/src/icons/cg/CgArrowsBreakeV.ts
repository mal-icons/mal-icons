import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-arrows-breake-v",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgArrowsBreakeV {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.24 5.24L14.83 6.66L13 4.83L13 9.24H17V11.24H7V9.24H11L11 4.83L9.17 6.66L7.76 5.24L12 1L16.24 5.24Z","fill":"currentColor"}],["path",{"d":"M7 15.25V13.25H17V15.25H13L13 19.67L14.83 17.84L16.24 19.25L12 23.5L7.76 19.25L9.17 17.84L11 19.67V15.25L7 15.25Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgArrowsBreakeV;
