import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-layout-centered",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscLayoutCentered {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3.5 1H12.5C13.88 1 15 2.12 15 3.5V12.5C15 13.88 13.88 15 12.5 15H3.5C2.12 15 1 13.88 1 12.5V3.5C1 2.12 2.12 1 3.5 1ZM2 3.5V12.5C2 13.33 2.67 14 3.5 14H6V2H3.5C2.67 2 2 2.67 2 3.5ZM12.5 14C13.33 14 14 13.33 14 12.5V3.5C14 2.67 13.33 2 12.5 2H10V14H12.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscLayoutCentered;
