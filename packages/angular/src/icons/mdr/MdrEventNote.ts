import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-event-note",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrEventNote {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 10H8c-0.55 0-1 0.45-1 1s0.45 1 1 1h8c0.55 0 1-0.45 1-1s-0.45-1-1-1zm3-7h-1V2c0-0.55-0.45-1-1-1s-1 0.45-1 1v1H8V2c0-0.55-0.45-1-1-1s-1 0.45-1 1v1H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm-1 16H6c-0.55 0-1-0.45-1-1V8h14v10c0 0.55-0.45 1-1 1zm-5-5H8c-0.55 0-1 0.45-1 1s0.45 1 1 1h5c0.55 0 1-0.45 1-1s-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrEventNote;
