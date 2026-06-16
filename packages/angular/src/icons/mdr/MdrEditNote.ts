import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-edit-note",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrEditNote {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 11c0 0.55-0.45 1-1 1H4c-0.55 0-1-0.45-1-1s0.45-1 1-1h9c0.55 0 1 0.45 1 1zM3 7c0 0.550.45 1 1 1h9c0.55 0 1-0.45 1-1s-0.45-1-1-1H4c-0.55 0-1 0.45-1 1zm7 8c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1s0.45 1 1 1h5c0.55 0 1-0.45 1-1zm8.01-2.130.71-0.71a11 0 0 1 1.41 0l0.710.71c0.390.390.39 1.02 0 1.41l-0.710.71-2.12-2.12zm-0.710.71-5.16 5.16c-0.090.09-0.140.21-0.140.35v1.41c0 0.280.220.50.50.5h1.41c0.13 0 0.26-0.050.35-0.15l5.16-5.16-2.12-2.11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrEditNote;
