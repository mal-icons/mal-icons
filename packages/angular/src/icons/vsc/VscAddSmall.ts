import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-add-small",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscAddSmall {
  readonly viewBox = "0 0 12 12";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 0.5C6 0.22 5.78 0 5.5 0C5.22 0 5 0.22 5 0.5V5H0.5C0.22 5 0 5.22 0 5.5C0 5.78 0.22 6 0.5 6H5V10.5C5 10.78 5.22 11 5.5 11C5.78 11 6 10.78 6 10.5V6H10.5C10.78 6 11 5.78 11 5.5C11 5.22 10.78 5 10.5 5H6V0.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscAddSmall;
