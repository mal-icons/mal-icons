import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-ladder",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsLadder {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.5 1a0.50.5 0 0 1 0.50.5V2h6v-0.5a0.50.5 0 0 1 1 0v14a0.50.5 0 0 1-1 0V15H5v0.5a0.50.5 0 0 1-1 0v-14a0.50.5 0 0 1 0.5-0.5M5 14h6v-2H5zm0-3h6V9H5zm0-3h6V6H5zm0-3h6V3H5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsLadder;
