import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-medication",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdMedication {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.5 15H8v-3h2.5V9.5h3V12H16v3h-2.5v2.5h-3V15zM19 8v11c0 1.1-0.9 2-2 2H7c-1.1 0-2-0.9-2-2V8c0-1.10.9-2 2-2h10c1.1 0 2 0.9 2 2zm-2 0H7v11h10V8zm1-5H6v2h12V3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdMedication;
