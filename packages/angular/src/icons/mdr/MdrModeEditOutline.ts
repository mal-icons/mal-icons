import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-mode-edit-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrModeEditOutline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 17.46v3.04c0 0.280.220.50.50.5h3.04c0.13 0 0.26-0.050.35-0.15L17.81 9.94l-3.75-3.75L3.15 17.1c-0.10.1-0.150.22-0.150.36zM20.71 5.63l-2.34-2.34a11 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a11 0 0 0 0-1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrModeEditOutline;
