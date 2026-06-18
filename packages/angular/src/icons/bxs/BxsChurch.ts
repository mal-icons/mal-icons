import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-church",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsChurch {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 22v-4a2 2 0 0 1 4 0v4h4V12a1 1 0 0 0-0.48-0.86L13 8.43V6h2V4h-2V2h-2v2H9v2h2v2.43l-4.51 2.71A1 1 0 0 0 6 12v10h4zm-7 0h2v-8.12l-2.45 1.22A11 0 0 0 2 16v5a1 1 0 0 0 1 1zm18.45-6.89L19 13.88V22h2a1 1 0 0 0 1-1v-5c0-0.38-0.21-0.72-0.55-0.89z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsChurch;
