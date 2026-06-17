import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-textarea",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsTextarea {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.5 2.5A1.5 1.5 0 0 1 3 1h10a1.5 1.5 0 0 1 1.5 1.5v3.56a2 2 0 0 1 0 3.87V13.5A1.5 1.5 0 0 1 13 15H3a1.5 1.5 0 0 1-1.5-1.5V9.94a2 2 0 0 1 0-3.87zm1 3.56a2 2 0 0 1 0 3.87V13.5a0.50.5 0 0 0 0.50.5h10a0.50.5 0 0 0 0.5-0.5V9.94a2 2 0 0 1 0-3.87V2.5A0.50.5 0 0 0 13 2H3a0.50.5 0 0 0-0.50.5zM2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsTextarea;
