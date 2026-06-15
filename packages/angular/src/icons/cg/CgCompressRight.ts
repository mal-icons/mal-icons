import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-compress-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgCompressRight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.57 8.03L20.91 1.77L22.32 3.19L15.99 9.43L19.56 9.45L19.55 11.45L12.55 11.42L12.58 4.42L14.58 4.43L14.57 8.03Z","fill":"currentColor"}],["path",{"d":"M7.98 14.54L4.41 14.55L4.41 12.55L11.41 12.54L11.41 19.54L9.41 19.54L9.41 15.94L3.1 22.23L1.68 20.81L7.98 14.54Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgCompressRight;
