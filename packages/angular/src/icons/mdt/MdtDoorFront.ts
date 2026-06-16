import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-door-front",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtDoorFront {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 19h10V5H7v14zm6-8h2v2h-2v-2z","opacity":".3"}],["path",{"d":"M13 11h2v2h-2z"}],["path",{"d":"M19 19V5c0-1.1-0.9-2-2-2H7c-1.1 0-2 0.9-2 2v14H3v2h18v-2h-2zm-2 0H7V5h10v14z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtDoorFront;
