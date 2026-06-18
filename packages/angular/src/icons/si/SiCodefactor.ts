import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-codefactor",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCodefactor {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.38 2.65a2.64 2.64 0 1-2.62 2.65 2.64 2.64 0 1-2.63-2.65A2.64 2.64 0 12.76 0a2.64 2.64 0 12.62 2.65zm0 9.35a2.64 2.64 0 1-2.62 2.65A2.64 2.64 0 1.13 12a2.64 2.64 0 12.63-2.65A2.64 2.64 0 15.38 12zm0 9.35A2.64 2.64 0 12.76 24a2.64 2.64 0 1-2.63-2.65 2.64 2.64 0 12.63-2.65 2.64 2.64 0 12.62 2.65zM11.32 0a2.64 2.64 0 0-2.61 2.65 2.64 2.64 0 2.6 2.65h9.94a2.64 2.64 0 2.63-2.65A2.64 2.64 0 21.26 0zm-2.61 12a2.64 2.64 0 12.62-2.65h5.68a2.64 2.64 0 12.6 2.65 2.64 2.64 0 1-2.6 2.65h-5.7a2.64 2.64 0 1-2.6-2.65z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCodefactor;
