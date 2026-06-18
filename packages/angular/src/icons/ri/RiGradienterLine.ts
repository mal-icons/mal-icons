import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-gradienter-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiGradienterLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.05 13H4.06C4.55 16.95 7.92 20 12 20C16.08 20 19.45 16.95 19.94 13H21.95C21.45 18.05 17.19 22 12 22C6.81 22 2.55 18.05 2.05 13ZM2.05 11C2.55 5.95 6.81 2 12 2C17.19 2 21.45 5.95 21.95 11H19.94C19.45 7.05 16.08 4 12 4C7.92 4 4.55 7.05 4.06 11H2.05ZM12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiGradienterLine;
