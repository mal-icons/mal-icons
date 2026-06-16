import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-liquor",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdLiquor {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 14c0 1.30.84 2.4 2 2.82V20H3v2h6v-2H7v-3.18C8.16 16.4 9 15.3 9 14V6H3v8zm2-6h2v3H5V8zm0 5h2v1c0 0.55-0.45 1-1 1s-1-0.45-1-1v-1zm15.64-4.46-0.96-0.32a1 1 0 0 1-0.68-0.95V3c0-0.55-0.45-1-1-1h-3c-0.55 0-1 0.45-1 1v4.28a1 1 0 0 1-0.680.95l-0.960.32c-0.810.28-1.36 1.04-1.36 1.9V20c0 1.10.9 2 2 2h7c1.1 0 2-0.9 2-2v-9.56c0-0.86-0.55-1.62-1.36-1.9zM16 4h1v1h-1V4zm4 16h-7v-2h7v2zm0-4h-7v-2h7v2zm0-4h-7v-1.56l0.95-0.32C15.18 9.72 16 8.57 16 7.28V7h1v0.28a3 3 0 0 0 2.05 2.85l0.950.31V12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdLiquor;
