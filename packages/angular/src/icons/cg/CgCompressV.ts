import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-compress-v",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgCompressV {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.03 7.36L15.5 4.85L16.92 6.26L12.01 11.24L7.03 6.33L8.43 4.91L11.03 7.47L11.08 0.84L13.08 0.86L13.03 7.36Z","fill":"currentColor"}],["path",{"d":"M15.56 18.53L16.97 17.12L12.02 12.17L7.08 17.13L8.49 18.54L11.08 15.95L11.1 23.16L13.1 23.15L13.08 16.05L15.56 18.53Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgCompressV;
