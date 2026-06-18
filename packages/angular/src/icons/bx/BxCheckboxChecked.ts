import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-checkbox-checked",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxCheckboxChecked {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 5c-1.1 0-2 0.9-2 2v10c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2V7c0-1.1-0.9-2-2-2H7zm0 12V7h10l0 10H7z"}],["path",{"d":"M11 12.56 9.7 11.29l-1.4 1.43 2.7 2.65 4.7-4.65-1.41-1.42z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxCheckboxChecked;
