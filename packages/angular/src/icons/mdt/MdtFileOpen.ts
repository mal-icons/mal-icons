import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-file-open",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtFileOpen {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 14h3V9h-5V4H6v16h9z","opacity":".3"}],["path",{"d":"M15 22H6c-1.1 0-2-0.9-2-2V4c0-1.10.9-2 2-2h8l6 6v6h-2V9h-5V4H6v16h9v2zm4-0.34v-2.24l2.95 2.95 1.41-1.41L20.41 18h2.24v-2H17v5.66h2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtFileOpen;
