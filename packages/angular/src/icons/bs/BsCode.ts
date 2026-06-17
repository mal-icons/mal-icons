import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-code",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCode {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.85 4.85a0.50.5 0 1 0-0.71-0.71l-3.5 3.5a0.50.5 0 0 0 0 0.71l3.5 3.5a0.50.5 0 0 0 0.71-0.71L2.71 8zm4.29 0a0.50.5 0 0 1 0.71-0.71l3.5 3.5a0.50.5 0 0 1 0 0.71l-3.5 3.5a0.50.5 0 0 1-0.71-0.71L13.29 8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCode;
