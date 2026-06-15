import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-remove-small",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscRemoveSmall {
  readonly viewBox = "0 0 11 11";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.5 6H0.5C0.22 6 0 5.78 0 5.5C0 5.22 0.22 5 0.5 5H10.5C10.78 5 11 5.22 11 5.5C11 5.78 10.78 6 10.5 6Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscRemoveSmall;
